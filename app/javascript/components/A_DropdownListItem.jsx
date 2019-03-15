import _ from 'lodash'
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export default class A_DropdownListItem extends React.Component {
  constructor(props, context) {
    super(props, context)
    _.bindAll(
      this,
      'handleClick'
    )
  }

  handleClick(e) {
    // e.stopPropagation()
    this.props.function()
  }


  render() {
    const styles = {
      backgroundColor: this.props.backgroundColor
    }

    return(
      <div
        className="A_DropdownListItem"
        onClick={ this.handleClick}
        style={ styles }
      >
      { this.props.text }
      </div>
    )
  }
}
