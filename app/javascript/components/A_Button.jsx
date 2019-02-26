import _ from 'lodash'
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import O_Dropdown from '../components/O_Dropdown'

export default class A_Button extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      color: this.props.color,
      active: false
    }
    _.bindAll(
      this,
      'handleClick'
    )
  }

  handleClick() {
    this.setState({
      // color: "violet"
      active: !this.state.active
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
        <O_Dropdown
          active={ this.state.active }
          data={ this.props.data }
        />
        {this.props.text}
      </div>
    )
  }
}
