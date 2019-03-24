import _ from 'lodash'

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'


export default class A_Button extends React.Component {
  constructor(props, context) {
    super(props, context)
    _.bindAll(
      this,
      'handleClick'
    )
  }

  handleClick(e) {
    e.stopPropagation()
    this.props.function()
  }

  render() {
    let localStyles = {
      backgroundColor: this.props.backgroundColor,
      color: this.props.color,
      width: this.props.width,
      height: this.props.height
    }

    let styles = Object.assign(localStyles, this.props.styles)


    return(
      <div
        style={styles}
        onClick={ this.handleClick }
        className="A_Button"
      >
        <span>{this.props.content}</span>
      </div>
    )
  }
}
