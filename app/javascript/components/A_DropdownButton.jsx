import _ from 'lodash'
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

// import onClickOutside from "react-onclickoutside"

import A_Dropdown from '../components/A_Dropdown'

export default class A_Button extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      color: this.props.color,
      active: false
    }
    _.bindAll(
      this,
      'handleClick',
    )
  }

  handleClick() {
    this.setState({
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
        // onClickOutside={ this.handleClickOutside }

        className="A_DropdownButton"
        style={ styles }
      >
        { this.state.active &&
          <A_Dropdown
            active={ this.state.active }
            data={ this.props.data }
            // backgroundColor={ "blue" }
          />
        }
        {this.props.text}
      </div>
    )
  }
}
