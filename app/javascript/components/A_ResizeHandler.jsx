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
      'handleMouseDown'
    )
  }

  handleMouseDown() {
    this.props.setResizingComicItem(this.props.index, this.props.handlerType)
  }

  render() {
    var classes = 'resize ' + this.props.handlerType

    return(
      <div
        onMouseDown={ this.handleMouseDown }
        className={ classes }>
      </div>
    )
  }
}
