import _ from 'lodash'
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export default class M_LayerListItem extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      id: this.props.figure.id
    }
    _.bindAll(
      this,
      'handleDragStart',
      'handleClick'
    )
  }

  handleDragStart = e => {
    e.dataTransfer.effectAllowed = "move";
    // e.dataTransfer.setData("text/html", e.target.parentNode);
    // e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
  };

  handleClick() {
    this.props.setActiveFigure(this.props.index)
  }

  render() {
    let className = "M_LayerListItem"
    if (this.props.figure.active) {
      className += ' selected';
    }

    return(
      <div
        className={ className }

        draggable={true}
        onDragStart={e => this.handleDragStart(e, idx)}

        onClick={ this.handleClick}
      >
        {this.props.index }  |  Layer Name { this.state.id } { this.props.figure.active && 'YO'}
      </div>
    )
  }
}
