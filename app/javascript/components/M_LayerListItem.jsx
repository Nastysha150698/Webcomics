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
      'handleDragOver',
      // 'onDragOver',
      // 'onDragEnd',
      'handleClick'
    )
  }

  handleDragStart = (e, index) => {
    console.log('dragStart', this.props.index, this.state.id)
    this.props.setDraggedItem(this.props.index)
    // this.draggedItem = this.state.figures[index];
    e.dataTransfer.effectAllowed = "uninitialized";
  }

  handleDragOver = index => {
    console.log('dragover', this.props.index, this.state.id);

    this.props.setNewFiguresOrder(this.state.id, this.props.index)
  }

  handleClick() {
    this.props.setActiveFigure(this.props.index)
  }

  render() {
    // var focusFrame
    let color, backgroundColor
    if (this.props.figure.active) {
      // focusFrame = '2px solid blue'
      color = '#00BF88'
      backgroundColor = 'rgba(255, 255, 255, .05)'
    } else {
      // focusFrame = 0
      color = '#FFFFFF'
      backgroundColor = 'rgba(255, 255, 255, 0)'
    }
    const styles = {
      // outline: focusFrame,
      color: color,
      backgroundColor: backgroundColor
    }

    return(
      <div
        style={ styles }

        className="M_LayerListItem"
        draggable
        onDragStart={e => this.handleDragStart(e)}
        onDragOver={this.handleDragOver}
        onDragEnd={this.onDragEnd}

        onClick={ this.handleClick}
      >
        {this.props.index }  |  Layer Name { this.props.figure.id } { this.props.figure.active && 'YO'}
      </div>
    )
  }
}
