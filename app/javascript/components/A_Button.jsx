import _ from 'lodash'
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

// import onClickOutside from "react-onclickoutside"

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
      'handleClick',
      // 'handleClickOutside',
      'mouseOver',
      'mouseOut'
    )
  }

  handleClick() {
    this.setState({
      active: !this.state.active
    })
  }

  // handleClickOutside() {
  //   this.setState({
  //     active: false
  //   })
  // }

  mouseOver() {
    this.setState({
      color: "red"
    })

    console.log("Mouse over")
  }

  mouseOut() {
    this.setState({
      color: this.props.color
    })

    console.log("Mouse out")
  }

  render() {
    const styles = {
      backgroundColor: this.state.color
    }

    return(
      <div
        onClick={ this.handleClick }
        onMouseOver={ this.mouseOver }
        onMouseOut={ this.mouseOut }
        // onClickOutside={ this.handleClickOutside }

        className="A_Button"
        style={ styles }
      >
        { this.state.active &&
          <O_Dropdown
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
