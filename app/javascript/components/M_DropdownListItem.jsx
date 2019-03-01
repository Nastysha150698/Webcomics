import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export default class M_DropdownListItem extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {

    return(
      <div
        className="M_DropdownListItem"
      >
      { this.props.text }
      </div>
    )
  }
}
