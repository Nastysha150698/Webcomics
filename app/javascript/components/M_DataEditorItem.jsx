import _ from 'lodash'
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export default class M_DataEditorItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={'dataEditorItem'}>
        <div className={'dataEditorItemName'}>{this.props.dataEditorItemName}</div>
        <div className={'dataEditorItemInputs'}>{this.props.children}</div>
      </div>
    )
  }
}
