import _ from 'lodash'

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export default class A_ResizeHandler extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      dragging: false
    }
    _.bindAll(
      this,
      'handleMouseDown',
      'handleMouseMove',
      'handleMouseUp'
    )
  }

  handleMouseDown() {
    this.props.setResizingFigure(this.props.figure_id, this.props.handlerType)

    // this.setState({
    //   dragging: true
    // })
  }

  handleMouseMove(e) {
    // if (this.state.dragging) {
    //   e.preventDefault()
    //   var coursorX = event.pageX
    //   var coursorY = event.pageY
    //
    //   if (this.props.handlerType == 'nw') {
    //     var top = coursorY - 5
    //     var left = coursorX - 5 - 240
    //     var width = this.props.left + this.props.width - left
    //     var height = this.props.top + this.props.height - top
    //     this.props.figureResizing(top, left, width, height)
    //   }
    //   if (this.props.handlerType == 'n') {
    //     var top = coursorY - 5
    //     var left = this.props.left
    //     var width = this.props.width
    //     var height = this.props.top + this.props.height - top
    //     this.props.figureResizing(top, left, width, height)
    //   }
    //   if (this.props.handlerType == 'ne') {
    //     var top = coursorY - 5
    //     var left = this.props.left
    //     var width = coursorX + 5 - 240 - this.props.left
    //     var height = this.props.top + this.props.height - top
    //     this.props.figureResizing(top, left, width, height)
    //   }
    //   if (this.props.handlerType == 'e') {
    //     var top = this.props.top
    //     var left = this.props.left
    //     var width = coursorX + 5 - 240 - this.props.left
    //     var height = this.props.top + this.props.height - top
    //     this.props.figureResizing(top, left, width, height)
    //   }
    //   if (this.props.handlerType == 'se') {
    //     var top = this.props.top
    //     var left = this.props.left
    //     var width = coursorX + 5 - 240 - this.props.left
    //     var height = coursorY + 5 - this.props.top
    //     this.props.figureResizing(top, left, width, height)
    //   }
    //   if (this.props.handlerType == 's') {
    //     var top = this.props.top
    //     var left = this.props.left
    //     var width = this.props.width
    //     var height = coursorY + 5 - this.props.top
    //     this.props.figureResizing(top, left, width, height)
    //   }
    //   if (this.props.handlerType == 'sw') {
    //     var top = this.props.top
    //     var left = coursorX - 5 - 240
    //     var width = this.props.left + this.props.width - left
    //     var height = coursorY + 5 - this.props.top
    //     this.props.figureResizing(top, left, width, height)
    //   }
    //   if (this.props.handlerType == 'w') {
    //     var top = this.props.top
    //     var left = coursorX - 5 - 240
    //     var width = this.props.left + this.props.width - left
    //     var height = this.props.height
    //     this.props.figureResizing(top, left, width, height)
    //   }
    //   console.log(coursorY, coursorX)
    // }
  }

  handleMouseUp() {
    this.props.setResizingFigure(0, '')

    // this.setState({
    //   dragging: false
    // })
  }

  render() {
    var classes = 'resize ' + this.props.handlerType

    return(
      <div
        onMouseDown={ this.handleMouseDown }
        onMouseMove={ this.handleMouseMove }
        onMouseUp={ this.handleMouseUp }
        className={ classes }>
      </div>
    )
  }
}
