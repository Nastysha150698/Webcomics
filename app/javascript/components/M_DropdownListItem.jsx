import _ from 'lodash'
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export default class M_DropdownListItem extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      backgroundColor: this.props.backgroundColor
    }

    _.bindAll(
      this,
      'mouseOver',
      'mouseOut'
    )
  }

  mouseOver() {
    this.setState({
      backgroundColor: "#3F4253"
    })

    console.log("Mouse over items")
  }

  mouseOut() {
    this.setState({
      backgroundColor: this.state.color
    })

    console.log("Mouse out items")
  }

  render() {
    const styles = {
      backgroundColor: this.state.backgroundColor
    }

    return(
      <div
        onMouseOver={ this.mouseOver }
        onMouseOut={ this.mouseOut }

        className="M_DropdownListItem"
        style={ styles }
      >
      { this.props.text }
      </div>
    )
  }
}
