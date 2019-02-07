import _ from 'lodash'
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import M_Figure from '../components/M_Figure'

export default class O_ComicsArtbord extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      draggingFigure: 0,
      resizingFigure: 0,
      handlerType: '',
      clickX: 0,
      clickY: 0,
      figures: this.props.figures
    }
    _.bindAll(
      this,
      'setDraggingFigure',
      'setResizingFigure',
      'handleMouseMove',
      'handleMouseUp'
    )
  }

  setDraggingFigure(figure_id) {
    var newFigures = this.state.figures
    newFigures[this.state.draggingFigure]['active'] = true

    this.setState({
      draggingFigure: figure_id,
      clickX: event.pageX - this.state.figures[figure_id]['x'],
      clickY: event.pageY - this.state.figures[figure_id]['y'],
      figures: newFigures
    })
  }

  setResizingFigure(figure_id, handlerType) {
    var newFigures = this.state.figures
    newFigures[this.state.resizingFigure]['active'] = true

    this.setState({
      resizingFigure: figure_id,
      handlerType: handlerType,
      clickX: event.pageX - this.state.figures[figure_id]['x'],
      clickY: event.pageY - this.state.figures[figure_id]['y'],

      figures: newFigures
    })
  }

  handleMouseMove(e) {
    if ((this.state.draggingFigure != 0) && (this.state.resizingFigure == 0)) {
      e.preventDefault()
      var coursorX = event.pageX
      var coursorY = event.pageY
      var newFigures = this.state.figures
      newFigures[this.state.draggingFigure]['y'] = (coursorY - this.state.clickY)
      newFigures[this.state.draggingFigure]['x'] = (coursorX - this.state.clickX)

      this.setState({
        figures: newFigures
      })
    }

    if (this.state.resizingFigure != 0) {
      e.preventDefault()
      var coursorX = event.pageX
      var coursorY = event.pageY
      var newFigures = this.state.figures
      var currentFigure = newFigures[this.state.resizingFigure]

      var top
      var left
      var width
      var height

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

  handleMouseUp() {
    this.setState({
      draggingFigure: 0,
      resizingFigure: 0
    })
  }



  render() {
    let elements = []

    this.state.figures.map((figure, i) => {
      // figure.focusFrame = 0
      elements.push(
        <M_Figure figure={ figure } key={ i } figure_id={i} setDraggingFigure={this.setDraggingFigure} setResizingFigure={this.setResizingFigure}/>
      )
    })

    return(
      <div className="O_ComicsArtbord"
        onMouseMove={ this.handleMouseMove }
        onMouseUp={ this.handleMouseUp}
      >
        { elements }
      </div>
    )
  }
}
