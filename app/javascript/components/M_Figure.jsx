import _ from 'lodash'
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import A_ResizeHandlers from '../components/A_ResizeHandlers'



export default class M_Figure extends React.Component {
  constructor(props, context) {
    super(props, context)
    _.bindAll(
      this,
      'handleMouseDown',
      'handleMouseUp',
      'handleClick'
    )
  }

  handleMouseDown() {
    this.props.setDraggingFigure(this.props.figure_id)
  }

  handleMouseUp() {
    this.props.setDraggingFigure(0)
  }

  handleClick(e) {
    e.stopPropagation()
  }

  render() {
    var focusFrame
    if (this.props.figure['active']) {
      focusFrame = '2px solid blue'
    } else {
      focusFrame = 0
    }
    const styles = {
      top: this.props.figure['y'],
      left: this.props.figure['x'],
      width: this.props.figure['width'],
      height: this.props.figure['height'],

      // borderWidth: this.state.borderWidth,
      borderWidth: 0,

      borderColor: this.props.figure['border_color'],
      borderRadius: this.props.figure['border_radius'],
      backgroundColor: this.props.figure['background_color'],
      zIndex: this.props.figure['z_index'],
      outline: focusFrame
    }

    return(
      <div
        onMouseDown={ this.handleMouseDown }
        onMouseUp={ this.handleMouseUp }
        onClick={ this.handleClick}
        className="M_Figure"
        style={ styles }
      >
        RailsId: { this.props.figure.id }<br/>
        ReactId: { this.props.figure_id }
        { this.props.figure['active'] &&
          <A_ResizeHandlers
            setResizingFigure={this.props.setResizingFigure}
            figure_id={this.props.figure_id}
          /> }
      </div>
    )
  }
}
