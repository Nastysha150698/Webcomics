import _ from 'lodash'
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export default class M_LayerListItem extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    return(
      <div
        className="M_LayerListItem"
      >
        {this.props.index }  |  Layer Name { this.props.figure.id}
      </div>
    )
  }
}
