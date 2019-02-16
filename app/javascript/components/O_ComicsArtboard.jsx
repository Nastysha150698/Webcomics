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
      activeFigure: 0,
      handlerType: '',
      clickX: 0,
      clickY: 0,
      figures: this.props.figures
    }
    _.bindAll(
      this,
      'handleMouseMove',
      'handleMouseUp',
      'handleClick'
    )
  }

  handleMouseMove(e) {
    var coursorX = event.pageX
    var coursorY = event.pageY
    this.props.setCoursorPosition(coursorX, coursorY)
  }

  handleMouseUp() {
    this.props.setDraggingResizingNone()
  }

  handleClick() {
    this.props.setActiveNone()
  }

  render() {
    let elements = []

    this.state.figures.map((figure, i) => {
      elements.push(
        <M_Figure
          figure={ figure }
          key={ i }
          figure_id={i}
          setDraggingFigure={this.props.setDraggingFigure}
          setResizingFigure={this.props.setResizingFigure}
        />
      )
    })

    return(
      <div className="O_ComicsArtbord"
        onMouseMove={ this.handleMouseMove }
        onMouseUp={ this.handleMouseUp}
        onClick={ this.handleClick}
      >
        { elements }
      </div>
    )
  }
}
