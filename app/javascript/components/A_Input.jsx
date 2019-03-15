import _ from 'lodash'
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export default class A_Input extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      value: ''
    }
    _.bindAll(
      this,
      'handleFocus',
      'handleBlur',
      'handleChange',
      'handleSubmit'
    )
  }

  handleFocus(e) {
    e.preventDefault()
    this.setState({
      active: true
    })
  }

  handleBlur() {
    this.setState({
      active: false
    })
  }

  handleChange(event) {
    // this.setState({
    //   value: event.target.value
    // })
    // console.log('handleChange')
    this.props.changeComicItemData(this.props.paramName, Number(event.target.value))
  }

  handleSubmit(event) {
    // event.preventDefault()
    // this.props.changeComicItemData(this.props.paramName, Number(event.target.value))
  }

  render() {
    // if (!this.state.active) {
      this.state = {
        value: this.props.value
      }
    // }
    const styles = {
      width: 64,
      height: 24
    }
    return (
      <label
        className={'valueInput'}
        onFocus={this.handleFocus}
      >
        <input
          style={ styles }

          type="number"
          value={this.state.value}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <div className={'inputType'}>
          {this.props.inputType}
        </div>
      </label>
    );
  }
}
