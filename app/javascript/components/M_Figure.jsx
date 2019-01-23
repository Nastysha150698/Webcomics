import _ from 'lodash'
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import A_ResizeHandlers from '../components/A_ResizeHandlers'


export default class M_Figure extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      dragging: false,
      resizing: false,

      top: this.props.figure['y'],
      left: this.props.figure['x'],
      width: this.props.figure['width'],
      height: this.props.figure['height'],
      borderWidth: this.props.figure['border_width'],
      borderColor: this.props.figure['border_color'],
      borderRadius: this.props.figure['border_radius'],
      backgroundColor: this.props.figure['background_color'],
      zIndex: this.props.figure['z_index'],
      clickX: 0,
      clickY: 0,
      focusFrame: 0
    }
    _.bindAll(
      this,
      'handleMouseDown',
      'handleMouseUp',
      'handleMouseOut',
      'handleMouseMove',
      'figureResizing'
    )
  }

  handleMouseDown() {
    this.setState({
      // dragging: true,
      resizing: true,
      clickX: event.pageX - this.state.left,
      clickY: event.pageY - this.state.top,
      focusFrame: "2px solid blue"
    });
  }

  handleMouseUp() {
    this.setState({
      dragging: false,
    });
  }

  handleMouseOut() {
    this.setState({
      // resizing: false,
      focusFrame: "0"
    });
  }

  handleMouseMove(e) {
    if (this.state.dragging) {
      e.preventDefault()
      var coursorX = event.pageX
      var coursorY = event.pageY

      this.setState({
        left: coursorX - this.state.clickX,
        top: coursorY - this.state.clickY
      })

      console.log("dragging", coursorX, coursorY)
    }
  }

  figureResizing(top, left, width, height) {
    this.setState({
      top: top,
      left: left,
      width: width,
      height: height
    })

    console.log("resizing", top, left, width, height)
  }

  render() {
    const styles = {
      top: this.state.top,
      left: this.state.left,
      width: this.state.width,
      height: this.state.height,

      borderWidth: this.state.borderWidth,
      // borderWidth: 0,

      borderColor: this.state.borderColor,
      borderRadius: this.state.borderRadius,
      backgroundColor: this.state.backgroundColor,
      zIndex: this.state.zIndex,
      outline: this.state.focusFrame
    }

    return(
      <div
        onMouseDown={ this.handleMouseDown }
        onMouseUp={ this.handleMouseUp }
        onMouseOut={ this.handleMouseOut }
        onMouseMove={ this.handleMouseMove }
        className="M_Figure"
        style={ styles }
      >
        { this.props.figure.id }
        { (this.state.resizing || this.state.dragging) &&
          <A_ResizeHandlers
            figureResizing={this.figureResizing}
            top={this.state.top}
            left={this.state.left}
            width={this.state.width}
            height={this.state.height}
          /> }
      </div>
    )
  }
}
