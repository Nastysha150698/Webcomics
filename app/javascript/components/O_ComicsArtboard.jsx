import _ from 'lodash'
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import M_Figure from '../components/M_Figure'
import M_Speech from '../components/M_Speech'
import M_Speech from '../components/M_Image'
import A_Button from '../components/A_Button'
import O_Dropdown from '../components/O_Dropdown'
import M_DropdownListItem from '../components/M_DropdownListItem'

export default class O_ComicsArtbord extends React.Component {
  constructor(props, context) {
    super(props, context)
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

    this.props.figures.map((figure, i) => {
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


    const data = ["text", "figure", "shape"]

    return(
      <div className="O_ComicsArtbord"
        onMouseMove={ this.handleMouseMove }
        onMouseUp={ this.handleMouseUp}
        onClick={ this.handleClick}
      >
        { elements }
        <A_Button
          color={"#292c3f"}
          text={ "Add" }
          data={ data }
        />
      </div>

    )
  }
}
