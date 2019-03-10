import _ from 'lodash'
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import reactCSS from 'reactcss'

import { SketchPicker } from 'react-color'

export default class M_ColorPicker extends React.Component {
  constructor(props, context) {
    super(props, context)

    let color = '#D8D8D8'
    // color = this.props.color

    this.state = {
      color: color,
      displayColorPicker: false
    }
    _.bindAll(
      this,
      'handleChange',
      'handleChangeComplete'
    )
  }

  handleClick = () => {
   this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };


  handleChange(color, event) {
    this.setState({ color: color.rgb })
    this.props.updateColor(color)
  }

  handleChangeComplete = (color) => {
    this.props.tuneComicItem(this.props.activeComicItem)
  }

  render() {
    const styles = reactCSS({
      'default': {
        color: {
          width: '56',
          height: '16px',
          borderRadius: '2px',
          background: this.props.activeComicItemColor
        },
        swatch: {
          width: '64px',
          height: '24px',
          padding: '3px',
          background: '#232537',
          border: '1px solid',
          borderColor: '#212333',
          borderRadius: '2px',
          display: 'inline-block',
          cursor: 'pointer',
        },
        popover: {
          position: 'absolute',
          zIndex: '2',
          marginTop: '5px',
          left: '0px'
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
      },
    })

    return (
      <div>
        <div style={ styles.swatch } onClick={ this.handleClick }>
          <div style={ styles.color } />
        </div>
        { this.state.displayColorPicker ? <div style={ styles.popover }>
          <div style={ styles.cover } onClick={ this.handleClose }/>
          <SketchPicker
            width={ '220px' }
            color={ this.props.activeComicItemColor}
            onChange={ this.handleChange }
            onChangeComplete={ this.handleChangeComplete }
          />
        </div> : null }
      </div>
    )
  }
}
