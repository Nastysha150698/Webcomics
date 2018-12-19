import _ from 'lodash'
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export default class M_LayerListItem extends React.Component {
  constructor(props, context) {
    super(props, context)

    _.bindAll(
      this,
      'handleDragStart',
      'handleDragOver',
      'handleDrop'
    )
  }

  handleDragStart() {
    this.props.handleDragStart(this.props.figure.id)
  }

  handleDragOver(e) {
    e.preventDefault()
  }

  handleDrop() {
    this.props.handleDrop(this.props.figure.id)
  }

  render() {
    // console.log('M_LayerListItem', this.props.figure)

    return(
      <div
        className="M_LayerListItem"
        onClick={ this.handleFigureClick }
        draggable
        onDragStart={ this.handleDragStart }
        onDragOver={ (e)=>this.handleDragOver(e) }
        onDrop={ this.handleDrop }
      >
        {this.props.index }  |  Layer Name { this.props.figure.id}
      </div>
    )
  }
}
