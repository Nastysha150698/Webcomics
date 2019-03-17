import _ from 'lodash'
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
      'handleClick',
      'handleFocus',
      'handleBlur',
      'handleChange'
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

  handleFocus(e) {
    e.preventDefault()
    this.setState({
      active: true
    })
  }

  handleBlur() {
    this.setState({
      active: false
    })
  }

  handleChange(event) {
    this.props.changeComicItemData('text', String(event.target.value))
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
      zIndex: this.props.comicItem['layer_index'],
      outline: focusFrame,
    }

    const textareaStyles = {
      fontSize: this.props.comicItem.font_size,
      color: this.props.comicItem.color
    }

    this.state = {
      text: this.props.comicItem.text
    }

    return(
      <div
        onMouseDown={ this.handleMouseDown }
        onMouseUp={ this.handleMouseUp }
        onClick={ this.handleClick}
        className="M_Speech"
        style={ styles }
      >
        { this.props.comicItem.id }<br/>
        <textarea
          type="text"
          value={this.state.text}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onChange={this.handleChange}

          style={ textareaStyles }
        />
        { this.props.comicItem['active'] &&
          <A_ResizeHandlers
            setResizingComicItem={this.props.setResizingComicItem}
            index={this.props.index}
          /> }
      </div>
    )
  }
}
