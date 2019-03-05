import _ from 'lodash'
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export default class M_DropdownListItem extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      color: this.props.backgroundColor
    }

    _.bindAll(
      this,
      'mouseOver',
      'mouseOut'
    )
  }

  mouseOver() {
    this.setState({
      color: "green"
    })

    console.log("Mouse over items")
  }

  mouseOut() {
    this.setState({
      color: this.props.color
    })

    console.log("Mouse out items")
  }

  render() {

    return(
      <div
        onMouseOver={ this.mouseOver }
        onMouseOut={ this.mouseOut }

        className="M_DropdownListItem"
      >
      { this.props.text }
      </div>
    )
  }
}
