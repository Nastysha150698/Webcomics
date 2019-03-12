import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import A_ResizeHandlers from '../components/A_ResizeHandlers'

export default class M_Image extends React.Component {
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
    this.props.setDraggingImage(this.props.image_id)
  }

  handleMouseUp() {
    this.props.setDraggingImage(0)
  }

  handleClick(e) {
    e.stopPropagation()
  }


  render() {
    var focusFrame
    if (this.props.image['active']) {
      focusFrame = '2px solid blue'
    } else {
      focusFrame = 0
    }
    const styles = {
      top: this.props.image['y'],
      left: this.props.image['x'],
      width: this.props.image['width'],
      height: this.props.image['height'],
      
      backgroundImage: this.props.image['background_image: url()'],
      zIndex: this.props.image['z_index'],
      outline: focusFrame
    }

    return(
      <div
        onMouseDown={ this.handleMouseDown }
        onMouseUp={ this.handleMouseUp }
        onClick={ this.handleClick}
        className="M_Image"
        style={ styles }
      >
      RailsId: { this.props.image.id }<br/>
      ReactId: { this.props.image_id }
      { this.props.image['active'] &&
        <A_ResizeHandlers
          setResizingImage={this.props.setResizingImage}
          image_id={this.props.image_id}
        /> }
      // { this.props.image }
      </div>
    )
  }
}
