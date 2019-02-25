import _ from 'lodash'
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import $ from 'jquery'

import O_Sidebar from '../components/O_Sidebar'
// import Layers from '../components/Layers'
import O_ComicsArtboard from '../components/O_ComicsArtboard'

export default class T_ComicsEditorContainer extends React.Component {
  constructor(props, context) {
    super(props, context)

    let figures = []

    this.props.figures.map((figure, i) => {
      figure.z_index = i
      figures.push(figure)
    })

    this.state = {
      figures: figures,

      draggingFigure: 0,
      resizingFigure: 0,
      activeFigure: 0,
      handlerType: '',
      clickX: 0,
      clickY: 0,
    }
    _.bindAll(
      this,
      'setDraggingFigure',
      'setResizingFigure',
      'setActiveFigure',
      'setDraggingResizingNone',
      'setActiveNone',
      'setCoursorPosition',
      'reorderLayers',
      'createNewFigure'
    )
  }

  setDraggingFigure(figure_id) {
    if (figure_id != 0) {
      let newFigures = this.state.figures
      this.state.figures.map((figure, i) => {
        if (i == figure_id) {
          newFigures[i]['active'] = true
          // console.log(i, this.state.figures[i]['active']);
        } else {
          if (newFigures[i]['active']) {
            this.tuneFigure(this.state.figures[i])
          }
          newFigures[i]['active'] = false
        }
      })

      this.setState({
        draggingFigure: figure_id,
        activeFigure: figure_id,
        clickX: event.pageX - this.state.figures[figure_id]['x'],
        clickY: event.pageY - this.state.figures[figure_id]['y'],
        figures: newFigures
      })

      // console.log('Figure', figure_id, 'active:', this.state.figures[figure_id]['active']);

    } else {
      this.setState({
        draggingFigure: 0
      })
    }
  }

  setResizingFigure(figure_id, handlerType) {
    let newFigures = this.state.figures
    if (figure_id == 0) {
      newFigures[this.state.draggingFigure]['active'] = false
    } else {
      newFigures[this.state.draggingFigure]['active'] = true
    }

    this.setState({
      resizingFigure: figure_id,
      handlerType: handlerType,
      clickX: event.pageX - this.state.figures[figure_id]['x'],
      clickY: event.pageY - this.state.figures[figure_id]['y'],

      figures: newFigures
    })
  }

  setActiveFigure(figure_id) {
    let newFigures = this.state.figures
    this.state.figures.map((figure, i) => {
      if (i == figure_id) {
        newFigures[i]['active'] = true
      } else {
        newFigures[i]['active'] = false
      }
    })

    this.setState({
      activeFigure: figure_id,
      figures: newFigures
    })
  }

  setCoursorPosition(coursorX, coursorY) {
    if ((this.state.draggingFigure != 0) && (this.state.resizingFigure == 0)) {
      let newFigures = this.state.figures
      newFigures[this.state.draggingFigure]['y'] = (coursorY - this.state.clickY)
      newFigures[this.state.draggingFigure]['x'] = (coursorX - this.state.clickX)

      this.setState({
        figures: newFigures
      })
    }

    if (this.state.resizingFigure != 0) {
      let newFigures = this.state.figures
      let currentFigure = newFigures[this.state.resizingFigure]

      let top
      let left
      let width
      let height

      if (this.state.handlerType == 'nw') {
        top = coursorY
        left = coursorX - 240
        width = currentFigure['x'] + currentFigure['width'] - left
        height = currentFigure['y'] + currentFigure['height'] - top
      }
      if (this.state.handlerType == 'n') {
        top = coursorY
        left = currentFigure['x']
        width = currentFigure['width']
        height = currentFigure['y'] + currentFigure['height'] - top
      }
      if (this.state.handlerType == 'ne') {
        top = coursorY
        left = currentFigure['x']
        width = coursorX - 240 - currentFigure['x']
        height = currentFigure['y'] + currentFigure['height'] - top
      }
      if (this.state.handlerType == 'e') {
        top = currentFigure['y']
        left = currentFigure['x']
        width = coursorX - 240 - currentFigure['x']
        height = currentFigure['y'] + currentFigure['height'] - top
      }
      if (this.state.handlerType == 'se') {
        top = currentFigure['y']
        left = currentFigure['x']
        width = coursorX - 240 - currentFigure['x']
        height = coursorY - currentFigure['y']
      }
      if (this.state.handlerType == 's') {
        top = currentFigure['y']
        left = currentFigure['x']
        width = currentFigure['width']
        height = coursorY - currentFigure['y']
      }
      if (this.state.handlerType == 'sw') {
        top = currentFigure['y']
        left = coursorX - 240
        width = currentFigure['x'] + currentFigure['width'] - left
        height = coursorY - currentFigure['y']
      }
      if (this.state.handlerType == 'w') {
        top = currentFigure['y']
        left = coursorX - 240
        width = currentFigure['x'] + currentFigure['width'] - left
        height = currentFigure['height']
      }

      newFigures[this.state.resizingFigure]['y'] = top
      newFigures[this.state.resizingFigure]['x'] = left
      newFigures[this.state.resizingFigure]['width'] = width
      newFigures[this.state.resizingFigure]['height'] = height

      this.setState({
        figures: newFigures
      })
    }
  }

  setDraggingResizingNone() {
    this.setState({
      draggingFigure: 0,
      resizingFigure: 0
    })
  }

  setActiveNone() {
    if (this.state.activeFigure != 0) {
      let newFigures = this.state.figures
      this.state.figures.map((figure, i) => {
        newFigures[i]['active'] = false
      })
      this.setState({
        activeFigure: 0,
        figures: newFigures
      })
    }

    this.tuneFigure(this.state.figures[this.state.activeFigure])
  }

  tuneFigure(figure) {
    $.ajax( {
        dataType: "json",
        method: "POST",
        url: "/comics_on_react/tune",
        data: {
          comic_id: figure.comic_id,
          figure_id: figure.id,
          width: figure.width,
          height: figure.height,
          x: figure.x,
          y: figure.y
        }
      })
      .done(function() {
        console.log("success: tuneFigure")
      })
      .fail(function() {
        console.log("error")
      })
      .always(function() {
        console.log("complete")
    })
  }

  reorderLayers(figures) {
    console.log('reordering Layers...');
    let newFigures = []
    figures.map((figure, i) => {
      figure.z_index = i
      // figure.figure_id = i
      newFigures.push(figure)
    })
    this.setState({
      figures: newFigures
    })

    console.log('Layers reordered');
  }

  createNewFigure() {
    let newFigures = this.state.figures
    let newFigure = {
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
    newFigures.push(newFigure)
    this.setState({
      figures: newFigures
    })

    let figure = this.state.figures[this.state.figures.length - 1]

    $.ajax( {
        dataType: "json",
        method: "POST",
        url: "/comics/" + this.props.comic_id + "/figures",
        data: {
          comic_id: this.props.comic_id,
          figure: figure
          // x: figure['x'],
          // y: figure['x'],
          // width: figure['width'],
          // height: figure['height'],
          // border_width: figure['border_width'],
          // border_color: figure['border_color'],
          // background_color: figure['background_color'],
          // border_radius: figure['border_radius']
        }
      })
      .done(function() {
        console.log("success: createNewFigure")
      })
      .fail(function() {
        console.log("error")
      })
      .always(function() {
        console.log("complete")
    })
  }

  render() {
    return(
      <div className="T_ComicsEditorContainer">
        <O_Sidebar
          figures={ this.state.figures }

          setActiveFigure={ this.setActiveFigure }
          reorderLayers={ this.reorderLayers }
        />

        <O_ComicsArtboard
          figures={ this.state.figures }

          setDraggingFigure={ this.setDraggingFigure }
          setResizingFigure={ this.setResizingFigure }
          setDraggingResizingNone={ this.setDraggingResizingNone }
          setActiveNone={ this.setActiveNone }
          setCoursorPosition={ this.setCoursorPosition }

          createNewFigure={this.createNewFigure}
        />
      </div>
    )
  }
}
