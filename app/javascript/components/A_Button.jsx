import _ from 'lodash'

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'


export default class A_Button extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      color: this.props.color
    }
    _.bindAll(
      this,
      'handleClick'
    )
  }

  handleClick() {
    console.log("yooo");
    this.setState({
      color: "yellow"
    })
  }

  render() {
    const styles = {
      backgroundColor: this.state.color
    }

    return(
      <div
        onClick={ this.handleClick }

        className="A_Button"
        style={ styles }
      >
        {this.props.text}
      </div>
    )
  }
}
