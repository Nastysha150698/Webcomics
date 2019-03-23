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

      sidebarOn: true,

      draggingComicItem: 0,
      resizingComicItem: 0,
      activeComicItem: null,
      handlerType: '',
      clickX: 0,
      clickY: 0,
      handlerX: 0,
      handlerY: 0
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
      'tuneComicItem',
      'updateImage',
      'hideSidebar'
    )
  }

  setDraggingComicItem(comicsItemIndex) {
    if (this.state.sidebarOn) {
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
          clickX: event.pageX - $('#O_ComicsArtbordZone').offset().left - this.state.comicItems[comicsItemIndex]['x'],
          clickY: event.pageY - $('#O_ComicsArtbordZone').offset().top - this.state.comicItems[comicsItemIndex]['y'],
          comicItems: newComicItems
        })

      } else {
        this.tuneComicItem(this.state.activeComicItem)

        this.setState({
          draggingComicItem: 0
        })
      }
    }
  }

  setResizingComicItem(comicsItemIndex, handlerType, handlerX, handlerY) {
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
      handlerX: handlerX,
      handlerY: handlerY,

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

  setCoursorPosition(coursorX,coursorY) {
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
        left = coursorX
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
        width = coursorX - currentComicItem['x']
        height = currentComicItem['y'] + currentComicItem['height'] - top
      }
      if (this.state.handlerType == 'e') {
        top = currentComicItem['y']
        left = currentComicItem['x']
        width = coursorX - currentComicItem['x']
        height = currentComicItem['y'] + currentComicItem['height'] - top
      }
      if (this.state.handlerType == 'se') {
        top = currentComicItem['y']
        left = currentComicItem['x']
        width = coursorX - currentComicItem['x']
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
        left = coursorX
        width = currentComicItem['x'] + currentComicItem['width'] - left
        height = coursorY - currentComicItem['y']
      }
      if (this.state.handlerType == 'w') {
        top = currentComicItem['y']
        left = coursorX
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
    switch (comicItem.type) {
      case 'figure':
        this.tuneFigure(comicItem)
        break;
      case 'speech':
        this.tuneSpeech(comicItem)
        break;
      case 'image':
        this.tuneImage(comicItem)
        break;
      default:
    }
  }

  tuneFigure(comicItem) {
    $.ajax( {
        dataType: "json",
        method: "POST",
        url: "/comics_on_react/tuneFigure",
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
        console.log("success: tuneFigure")
      })
      .fail(function() {
        console.log("error: tuneFigure")
      })
      .always(function() {
        console.log("complete")
    })
  }

  tuneSpeech(comicItem) {
    $.ajax( {
        dataType: "json",
        method: "POST",
        url: "/comics_on_react/tuneSpeech",
        data: {
          comic_id: this.props.comic_id,
          speech_id: comicItem.id,
          width: comicItem.width,
          height: comicItem.height,
          x: comicItem.x,
          y: comicItem.y,
          text: comicItem.text,
          font_size: comicItem.font_size
        }
      })
      .done(function() {
        console.log("success: tuneSpeech")
      })
      .fail(function() {
        console.log("error: tuneSpeech")
      })
      .always(function() {
        console.log("complete")
    })
  }

  tuneImage(comicItem) {
    $.ajax( {
        dataType: "json",
        method: "POST",
        url: "/comics_on_react/tuneImage",
        data: {
          comic_id: this.props.comic_id,
          image_id: comicItem.id,
          width: comicItem.width,
          height: comicItem.height,
          x: comicItem.x,
          y: comicItem.y
        }
      })
      .done(function() {
        console.log("success: tuneImage")
      })
      .fail(function() {
        console.log("error: tuneImage")
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

  createNewComicItem(comicItemType) {
    switch (comicItemType) {
      case 'figure':
        this.createNewFigure()
        break;
      case 'speech':
        this.createNewSpeech()
        break;
      case 'image':
        this.createNewImage()
        break;
      default:
    }
  }

  createNewFigure() {
    let newComicItems = this.state.comicItems
    let newComicItem = {
      type: 'figure',
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
    console.log(comicItem)


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

  createNewSpeech() {
    let newComicItems = this.state.comicItems
    let newComicItem = {
      type: 'speech',
      active: true,
      comic_id: this.props.comic_id,
      height: 50,
      width: 300,
      x: 300,
      y: 300,
      text: 'New text',
      color: '#000000',
      font_size: 24,
      line_height: 36,
      z_index: 100
    }
    newComicItems.push(newComicItem)
    this.setState({
      activeComicItem: this.state.comicItems.length - 1,
      comicItems: newComicItems
    })

    let comicItem = this.state.comicItems[this.state.comicItems.length - 1]
    // var _this = this

    console.log(comicItem)

    $.ajax( {
        dataType: "json",
        method: "POST",
        url: "/comics/" + this.props.comic_id + "/speeches",
        context: this,
        data: {
          comic_id: this.props.comic_id,
          speech: comicItem
        }
      })
      .done(function(data) {
        console.log("success: comicItem " + data.speech_id + " created")

        let newComicItems = this.state.comicItems
        newComicItems[newComicItems.length - 1]['id'] = data.speech_id
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

  createNewImage() {
    let newComicItems = this.state.comicItems
    let newComicItem = {
      type: 'image',
      active: true,
      comic_id: this.props.comic_id,
      image: '',
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

    console.log(comicItem)

    $.ajax( {
        dataType: "json",
        method: "POST",
        url: "/comics/" + this.props.comic_id + "/images",
        context: this,
        data: {
          comic_id: this.props.comic_id,
          image: comicItem
        }
      })
      .done(function(data) {
        console.log("success: comicItem " + data.image_id + " created")

        let newComicItems = this.state.comicItems
        newComicItems[newComicItems.length - 1]['id'] = data.image_id
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
    let figuresIndexes = new Object()
    let speechesIndexes = new Object()
    let imagesIndexes = new Object()

    this.state.comicItems.map((comicItem, i) => {
      switch (comicItem.type) {
        case 'figure':
          figuresIndexes[comicItem.id] = i
          break;
        case 'speech':
          speechesIndexes[comicItem.id] = i
          break;
        case 'image':
          imagesIndexes[comicItem.id] = i
          break;
        default:
      }
    })

    data['comic_id'] = this.props.comic_id
    data['figuresIndexes'] = figuresIndexes
    data['speechesIndexes'] = speechesIndexes
    data['imagesIndexes'] = imagesIndexes

    // console.log(data)

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
        console.log("error: saveLayersOrder")
      })
      .always(function() {
        console.log("complete")
    })
  }


  deleteComicItem() {
    let activeComicItem = this.state.comicItems[this.state.activeComicItem]
    let newComicItems = this.state.comicItems.filter(item => item !== activeComicItem)
    let comicItem_id = activeComicItem.id
    let comicItem_type = activeComicItem.type

    this.setState({
      comicItems: newComicItems
    })

    switch (comicItem_type) {
      case 'figure':
        this.deleteFigure(comicItem_id)
        break;
      case 'speech':
        this.deleteSpeech(comicItem_id)
        break;
      case 'image':
        this.deleteImage(comicItem_id)
        break;
      default:
    }

    this.setState({
      activeComicItem: null
    })
  }

  deleteFigure(comicItem_id) {
    $.ajax( {
        dataType: "json",
        method: "POST",
        url: "/comics_on_react/destroyFigure",
        context: this,
        data: {
          comic_id: this.props.comic_id,
          figure_id: comicItem_id
        }
      })
      .done(function(data) {
        console.log("success: deleteFigure")
      })
      .fail(function() {
        console.log("error: deleteFigure")
      })
      .always(function() {
        console.log("complete")
    })
  }

  deleteSpeech(comicItem_id) {
    $.ajax( {
        dataType: "json",
        method: "POST",
        url: "/comics_on_react/destroySpeech",
        context: this,
        data: {
          comic_id: this.props.comic_id,
          speech_id: comicItem_id
        }
      })
      .done(function(data) {
        console.log("success: deleteSpeech")
      })
      .fail(function() {
        console.log("error: deleteSpeech")
      })
      .always(function() {
        console.log("complete")
    })
  }

  deleteImage(comicItem_id) {
    $.ajax( {
        dataType: "json",
        method: "POST",
        url: "/comics_on_react/destroyImage",
        context: this,
        data: {
          comic_id: this.props.comic_id,
          image_id: comicItem_id
        }
      })
      .done(function(data) {
        console.log("success: deleteImage")
      })
      .fail(function() {
        console.log("error: deleteImage")
      })
      .always(function() {
        console.log("complete")
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
    newComicItems[this.state.activeComicItem].color = color.hex
    this.setState({
      comicItems: newComicItems
      }
    )
  }

  changeComicItemData(paramName, paramValue) {
    if (this.state.sidebarOn) {
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
  }

  updateImage(file) {
    // var formData = new FormData()
    // formData.append('image', file)
    // formData.append('comic_id', this.props.comic_id)
    // formData.append('image_id', this.state.comicItems[this.state.activeComicItem].id)
    // console.log(formData.get('image'), formData.get('comic_id'))

    $.ajax( {
        dataType: "json",
        // contentType: 'false',
        // processData: false,
        method: "POST",
        url: "/comics_on_react/updateImage",
        data: {
          comic_id: this.props.comic_id,
          image_id: this.state.comicItems[this.state.activeComicItem].id,
          file: file
        }
      })
      .done(function() {
        console.log("success: updateImage")
      })
      .fail(function() {
        console.log("error: updateImage")
      })
      .always(function() {
        console.log("complete")
    })
  }

  hideSidebar() {
    this.setState({
      sidebarOn: !this.state.sidebarOn
    })
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
        {this.state.sidebarOn &&
          <O_Sidebar
            comicItems={ comicItems }

            activeComicItem={ this.state.activeComicItem }

            setActiveComicItem={ this.setActiveComicItem }
            reorderLayers={ this.reorderLayers }
            updateColor={ this.updateColor }
            updateImage={ this.updateImage }
            tuneComicItem={ this.tuneComicItem }
            changeComicItemData={this.changeComicItemData}
            putComicItemUp={this.putComicItemUp}
            putComicItemDown={this.putComicItemDown}
            deleteComicItem={this.deleteComicItem}
          />
        }

        <O_ComicsArtboard
          comicItems={ comicItems }

          setDraggingComicItem={ this.setDraggingComicItem }
          setResizingComicItem={ this.setResizingComicItem }
          setDraggingResizingNone={ this.setDraggingResizingNone }
          setActiveNone={ this.setActiveNone }
          setCoursorPosition={ this.setCoursorPosition }

          createNewComicItem={this.createNewComicItem}
          changeComicItemData={this.changeComicItemData}

          hideSidebar={this.hideSidebar}
          sidebarOn={ this.state.sidebarOn }
        />
      </div>
    )
  }
}
