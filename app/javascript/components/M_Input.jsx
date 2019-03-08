import _ from 'lodash'
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export default class M_Input extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
    _.bindAll(
      this,
      'handleChange',
    )
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  render() {
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

          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <div className={'inputType'}>w</div>
      </label>
    );
  }
}
