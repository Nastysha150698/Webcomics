import _ from 'lodash'
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import $ from 'jquery'

import O_Sidebar from '../components/O_Sidebar'
import O_ComicsArtboard from '../components/O_ComicsArtboard'

export default class T_ComicsEditorContainer extends React.Component {
  constructor(props, context) {
    super(props, context)

    let comicItems = []
    this.props.figures.map((figure, i) => {
      figure.type = 'figure'
      comicItems.push(figure)
    })
    this.props.images.map((image, i) => {
      image.type = 'image'
      comicItems.push(image)
    })
    this.props.speeches.map((speech, i) => {
      speech.type = 'speech'
      comicItems.push(speech)
    })
    comicItems.sort(function(a, b){
      return a.z_index - b.z_index
    })

    this.state = {
      comicItems: comicItems,

      draggingComicItem: 0,
      resizingComicItem: 0,
      activeComicItem: null,
      handlerType: '',
      clickX: 0,
      clickY: 0,
    }
    _.bindAll(
      this,
      'handleKeyPress',
      'setDraggingComicItem',
      'setResizingComicItem',
      'setActiveComicItem',
      'setCoursorPosition',
      'setDraggingResizingNone',
      'setActiveNone',
      'reorderLayers',
      'createNewComicItem',
      'saveLayersOrder',
      'deleteComicItem',
      'putComicItemDown',
      'putComicItemUp',
      'updateColor',
      'changeComicItemData',
      'tuneComicItem'
    )
  }

  setDraggingComicItem(comicsItemIndex) {
    if (comicsItemIndex != 0) {
      let newComicItems = this.state.comicItems
      this.state.comicItems.map((comicItem, i) => {
        if (i == comicsItemIndex) {
          newComicItems[i]['active'] = true
        } else {
          if (newComicItems[i]['active']) {
            this.tuneComicItem(i)
          }
          newComicItems[i]['active'] = false
        }
      })

      this.setState({
        draggingComicItem: comicsItemIndex,
        activeComicItem: comicsItemIndex,
        clickX: event.pageX - this.state.comicItems[comicsItemIndex]['x'],
        clickY: event.pageY - this.state.comicItems[comicsItemIndex]['y'],
        comicItems: newComicItems
      })

    } else {
      this.tuneComicItem(this.state.activeComicItem)

      this.setState({
        draggingComicItem: 0
      })
    }
  }

  setResizingComicItem(comicsItemIndex, handlerType) {
    let newComicItems = this.state.comicItems
    if (comicsItemIndex == 0) {
      newComicItems[this.state.draggingComicItem]['active'] = false
    } else {
      newComicItems[this.state.draggingComicItem]['active'] = true
    }

    this.setState({
      resizingComicItem: comicsItemIndex,
      handlerType: handlerType,
      clickX: event.pageX - this.state.comicItems[comicsItemIndex]['x'],
      clickY: event.pageY - this.state.comicItems[comicsItemIndex]['y'],

      comicItems: newComicItems
    })
  }

  setActiveComicItem(comicsItemIndex) {
    let newComicItems = this.state.comicItems
    this.state.comicItems.map((comicItem, i) => {
      if (i == comicsItemIndex) {
        newComicItems[i]['active'] = true
      } else {
        newComicItems[i]['active'] = false
      }
    })

    this.setState({
      activeComicItem: comicsItemIndex,
      comicItems: newComicItems
    })
  }

  setCoursorPosition(coursorX, coursorY) {
    if ((this.state.draggingComicItem != 0) && (this.state.resizingComicItem == 0)) {
      let newComicItems = this.state.comicItems
      newComicItems[this.state.draggingComicItem]['y'] = (coursorY - this.state.clickY)
      newComicItems[this.state.draggingComicItem]['x'] = (coursorX - this.state.clickX)

      this.setState({
        comicItems: newComicItems
      })
    }

    if (this.state.resizingComicItem != 0) {
      let newComicItems = this.state.comicItems
      let currentComicItem = newComicItems[this.state.resizingComicItem]

      let top
      let left
      let width
      let height

      if (this.state.handlerType == 'nw') {
        top = coursorY
        left = coursorX - 240
        width = currentComicItem['x'] + currentComicItem['width'] - left
        height = currentComicItem['y'] + currentComicItem['height'] - top
      }
      if (this.state.handlerType == 'n') {
        top = coursorY
        left = currentComicItem['x']
        width = currentComicItem['width']
        height = currentComicItem['y'] + currentComicItem['height'] - top
      }
      if (this.state.handlerType == 'ne') {
        top = coursorY
        left = currentComicItem['x']
        width = coursorX - 240 - currentComicItem['x']
        height = currentComicItem['y'] + currentComicItem['height'] - top
      }
      if (this.state.handlerType == 'e') {
        top = currentComicItem['y']
        left = currentComicItem['x']
        width = coursorX - 240 - currentComicItem['x']
        height = currentComicItem['y'] + currentComicItem['height'] - top
      }
      if (this.state.handlerType == 'se') {
        top = currentComicItem['y']
        left = currentComicItem['x']
        width = coursorX - 240 - currentComicItem['x']
        height = coursorY - currentComicItem['y']
      }
      if (this.state.handlerType == 's') {
        top = currentComicItem['y']
        left = currentComicItem['x']
        width = currentComicItem['width']
        height = coursorY - currentComicItem['y']
      }
      if (this.state.handlerType == 'sw') {
        top = currentComicItem['y']
        left = coursorX - 240
        width = currentComicItem['x'] + currentComicItem['width'] - left
        height = coursorY - currentComicItem['y']
      }
      if (this.state.handlerType == 'w') {
        top = currentComicItem['y']
        left = coursorX - 240
        width = currentComicItem['x'] + currentComicItem['width'] - left
        height = currentComicItem['height']
      }

      newComicItems[this.state.resizingComicItem]['y'] = top
      newComicItems[this.state.resizingComicItem]['x'] = left
      newComicItems[this.state.resizingComicItem]['width'] = width
      newComicItems[this.state.resizingComicItem]['height'] = height

      this.setState({
        comicItems: newComicItems
      })
    }
  }

  setDraggingResizingNone() {
    this.setState({
      draggingComicItem: 0,
      resizingComicItem: 0
    })
  }

  setActiveNone() {
    if (this.state.activeComicItem != null) {
      let newComicItems = this.state.comicItems
      this.state.comicItems.map((comicItem, i) => {
        newComicItems[i]['active'] = false
      })
      this.setState({
        activeComicItem: null,
        comicItems: newComicItems
      })
    }
  }

  tuneComicItem(comicsItemIndex) {
    let comicItem = this.state.comicItems[comicsItemIndex]
    $.ajax( {
        dataType: "json",
        method: "POST",
        url: "/comics_on_react/tune",
        data: {
          comic_id: this.props.comic_id,
          figure_id: comicItem.id,
          width: comicItem.width,
          height: comicItem.height,
          x: comicItem.x,
          y: comicItem.y,
          background_color: comicItem.background_color
        }
      })
      .done(function() {
        console.log("success: tuneComicItem")
      })
      .fail(function() {
        console.log("error: tuneComicItem")
      })
      .always(function() {
        console.log("complete")
    })
  }

  reorderLayers(comicItems) {
    console.log('reordering Layers...');
    let newComicItems = []
    comicItems.map((comicItem, i) => {
      comicItem.z_index = i
      newComicItems.push(comicItem)
    })
    this.setState({
      comicItems: newComicItems
    })

    console.log('Layers reordered');
  }

  createNewComicItem() {
    let newComicItems = this.state.comicItems
    let newComicItem = {
      active: true,
      background_color: "#D8D8D8",
      border_color: "#795548",
      border_radius: null,
      border_width: 9,
      comic_id: this.props.comic_id,
      height: 300,
      width: 300,
      x: 300,
      y: 300,
      z_index: 100
    }
    newComicItems.push(newComicItem)
    this.setState({
      activeComicItem: this.state.comicItems.length - 1,
      comicItems: newComicItems
    })

    let comicItem = this.state.comicItems[this.state.comicItems.length - 1]
    // var _this = this

    $.ajax( {
        dataType: "json",
        method: "POST",
        url: "/comics/" + this.props.comic_id + "/figures",
        context: this,
        data: {
          comic_id: this.props.comic_id,
          figure: comicItem
        }
      })
      .done(function(data) {
        console.log("success: comicItem " + data.figure_id + " created")

        let newComicItems = this.state.comicItems
        newComicItems[newComicItems.length - 1]['id'] = data.figure_id
        this.setState({
          comicItems: newComicItems
        })
      })
      .fail(function() {
        console.log("error")
      })
      .always(function() {
        console.log("complete")
    })
  }

  saveLayersOrder() {
    // comicItem Index = Z_Index !!!!

    let data = new Object()
    let comicItemsIndexes = new Object()
    this.state.comicItems.map((comicItem, i) => {
      comicItemsIndexes[comicItem.id] = i
    })

    data['comic_id'] = this.props.comic_id
    data['figuresIndexes'] = comicItemsIndexes

    $.ajax( {
        dataType: "json",
        method: "POST",
        url: "/comics_on_react/saveLayersOrder",
        data: { data }
      })
      .done(function() {
        console.log("success: saveLayersOrder")
      })
      .fail(function() {
        console.log("error")
      })
      .always(function() {
        console.log("complete")
    })
  }

  deleteComicItem() {
    let activeComicItem = this.state.comicItems[this.state.activeComicItem]
    let newComicItems = this.state.comicItems.filter(item => item !== activeComicItem)
    let comicItem_id = activeComicItem.id

    this.setState({
      comicItems: newComicItems
    })

    $.ajax( {
        dataType: "json",
        method: "POST",
        url: "/comics_on_react/destroy",
        context: this,
        data: {
          comic_id: this.props.comic_id,
          figure_id: comicItem_id
        }
      })
      .done(function(data) {
        console.log("success: deleteComicItem")
      })
      .fail(function() {
        console.log("error")
      })
      .always(function() {
        console.log("complete")
    })

    this.setState({
      activeComicItem: null
    })
  }

  putComicItemDown() {
    if (this.state.activeComicItem > 0) {
      let activeComicItem = this.state.comicItems[this.state.activeComicItem]
      let newComicsItems = this.state.comicItems.filter(item => item !== activeComicItem)
      newComicsItems.splice(this.state.activeComicItem - 1, 0, activeComicItem)
      this.setState({
        comicItems: newComicsItems,
        activeComicItem: this.state.activeComicItem - 1
        },
        () => {this.saveLayersOrder()}
      )
    }
  }

  putComicItemUp() {
    if (this.state.activeComicItem < this.state.comicItems.length - 1) {
      let activeComicItem = this.state.comicItems[this.state.activeComicItem]
      let newComicsItems = this.state.comicItems.filter(item => item !== activeComicItem)
      newComicsItems.splice(this.state.activeComicItem + 1, 0, activeComicItem)
      this.setState({
        comicItems: newComicsItems,
        activeComicItem: this.state.activeComicItem + 1
        },
        () => {this.saveLayersOrder()}
      )
    }
  }

  handleKeyPress = (event) => {
    if (event.key == 'q') {
      this.deleteComicItem()
    }
    if (event.key == 'd') {
      this.putComicItemDown()
    }
    if (event.key == 'u') {
      this.putComicItemUp()
    }
  }

  updateColor(color) {
    let newComicItems = this.state.comicItems
    newComicItems[this.state.activeComicItem].background_color = color.hex
    this.setState({
      comicItems: newComicItems
      }
    )
  }

  changeComicItemData(paramName, paramValue) {
    let newComicItems = this.state.comicItems
    // console.log(newComicItems[this.state.activeComicItem][paramName])
    newComicItems[this.state.activeComicItem][paramName] = paramValue
    this.setState({
      comicItems: newComicItems
      }
    )
    this.tuneComicItem(this.state.activeComicItem)
    console.log('changeComicItemData: [', paramName, ':', paramValue, ']');
  }

  render() {
    let comicItems = []

    this.state.comicItems.map((comicItem, i) => {
      comicItems.push(comicItem)
      comicItems.layer_index = i
    })

    return(
      <div className="T_ComicsEditorContainer"
        tabIndex="0"
        onKeyPress={this.handleKeyPress}
      >
        <O_Sidebar
          comicItems={ comicItems }

          activeComicItem={ this.state.activeComicItem }

          setActiveComicItem={ this.setActiveComicItem }
          reorderLayers={ this.reorderLayers }
          updateColor={ this.updateColor }
          tuneComicItem={ this.tuneComicItem }
          changeComicItemData={this.changeComicItemData}
          putComicItemUp={this.putComicItemUp}
          putComicItemDown={this.putComicItemDown}
          deleteComicItem={this.deleteComicItem}
        />

        <O_ComicsArtboard
          comicItems={ comicItems }

          setDraggingComicItem={ this.setDraggingComicItem }
          setResizingComicItem={ this.setResizingComicItem }
          setDraggingResizingNone={ this.setDraggingResizingNone }
          setActiveNone={ this.setActiveNone }
          setCoursorPosition={ this.setCoursorPosition }

          createNewComicItem={this.createNewComicItem}
        />
      </div>
    )
  }
}
