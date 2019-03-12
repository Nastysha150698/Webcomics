import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import A_ResizeHandlers from '../components/A_ResizeHandlers'

export default class M_Speech extends React.Component {
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
      top: this.props.speech['y'],
      left: this.props.speech['x'],
      width: this.props.speech['width'],
      height: this.props.speech['height'],
      fontFamily: this.props.speech['font_title'],
      fontSize: this.props.speech['font_size'],
      lineHeight: this.props.speech['line_height'],

      color: this.props.speech['color'],
      outline: focusFrame
    }

    return(
      <div
        onMouseDown={ this.handleMouseDown }
        onMouseUp={ this.handleMouseUp }
        onClick={ this.handleClick}
        className="M_Speech"
        style={ styles }
      >
      RailsId: { this.props.speech.id }<br/>
      ReactId: { this.props.speech_id }
      { this.props.speech['active'] &&
        <A_ResizeHandlers
          setResizingSpeech={this.props.setResizingSpeech}
          speech_id={this.props.speech_id}
        /> }
      // { this.props.speech }
      </div>
    )
  }
}
