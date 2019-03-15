import _ from 'lodash'
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
    this.props.setDraggingComicItem(this.props.index)
  }

  handleMouseUp() {
    this.props.setDraggingComicItem(0)
  }

  handleClick(e) {
    e.stopPropagation()
  }

  render() {
    var focusFrame
    if (this.props.comicItem['active']) {
      focusFrame = '2px solid blue'
    } else {
      focusFrame = 0
    }
    const styles = {
      top: this.props.comicItem['y'],
      left: this.props.comicItem['x'],
      width: this.props.comicItem['width'],
      height: this.props.comicItem['height'],

      backgroundImage: "url(" + this.props.comicItem.image.url + ")",
      backgroundColor: '#fafafa',


      zIndex: this.props.comicItem['layer_index'],
      outline: focusFrame,
    }

    return(
      <div
        onMouseDown={ this.handleMouseDown }
        onMouseUp={ this.handleMouseUp }
        onClick={ this.handleClick}
        className="M_Image"
        style={ styles }
      >
        { this.props.comicItem.id }<br/>
        { this.props.comicItem['active'] &&
          <A_ResizeHandlers
            setResizingComicItem={this.props.setResizingComicItem}
            index={this.props.index}
          /> }
      </div>
    )
  }
}
