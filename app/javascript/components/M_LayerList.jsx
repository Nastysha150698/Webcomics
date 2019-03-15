import _ from 'lodash'
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export default class M_LayerList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={'M_LayerList'}>
        <div className={'M_LayerListHeader'}>Layers</div>
        <div className={'M_LayerListScrolable'}>{this.props.children}</div>
      </div>
    )
  }
}
