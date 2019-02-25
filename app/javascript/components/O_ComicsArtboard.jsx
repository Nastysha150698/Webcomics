import _ from 'lodash'
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import M_Figure from '../components/M_Figure'
import A_Button from '../components/A_Button'

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

    return(
      <div className="O_ComicsArtbord"
        onMouseMove={ this.handleMouseMove }
        onMouseUp={ this.handleMouseUp}
        onClick={ this.handleClick}
      >
      <A_Button
        content={'New Figure'}
        backgroundColor={'#292C3F'}
        color={'white'}
        width={'150px'}
        height={'50px'}
        function={this.props.createNewFigure}
      />
        { elements }
      </div>
    )
  }
}
