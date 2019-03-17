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

      // borderWidth: this.state.borderWidth,
      borderWidth: 0,

      borderColor: this.props.comicItem['border_color'],
      borderRadius: this.props.comicItem['border_radius'],
      backgroundColor: this.props.comicItem['background_color'],
      zIndex: this.props.comicItem['layer_index'],
      outline: focusFrame,
      // backgroundImage: "url(" + this.props.comicItem.image.url + ")"
    }

    if (this.props.comicItem.image) {
      styles.backgroundImage = "url(" + this.props.comicItem.image.url + ")"
    }

    return(
      <div
        onMouseDown={ this.handleMouseDown }
        onMouseUp={ this.handleMouseUp }
        onClick={ this.handleClick}
        className="M_Figure"
        style={ styles }
      >
        { this.props.comicItem['active'] &&
          <A_ResizeHandlers
            setResizingComicItem={this.props.setResizingComicItem}
            index={this.props.index}
          /> }
      </div>
    )
  }
}
