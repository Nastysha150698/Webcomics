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
      'handleClick'
    )
  }

  handleClick() {
    this.props.setActiveFigure(this.props.index)
  }

  render() {
    // if (this.props.figure.active) {
    //   this.setState({
    //     id: 'YO'
    //   })
    // }
    let className = "M_LayerListItem"
    if (this.props.figure.active) {
      className += ' selected';
    }

    return(
      <div
        className={ className }

        onClick={ this.handleClick}
      >
        {this.props.index }  |  Layer Name { this.state.id } { this.props.figure.active && 'YO'}
      </div>
    )
  }
}
