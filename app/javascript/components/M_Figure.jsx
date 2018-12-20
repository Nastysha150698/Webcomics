import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export default class M_Figure extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    const {
      x, y,
      width, height,
      border_width, border_color, border_radius,
      background_color,
      z_index
    } = this.props.figure

    const styles = {
      top: y,
      left: x,
      width: width,
      height: height,
      borderWidth: border_width,
      borderColor: border_color,
      borderRadius: border_radius,
      backgroundColor: background_color,
      zIndex: z_index
    }

    return(
      <div className="M_Figure" style={ styles }>
        {this.props.figure.id}
      </div>
    )
  }
}
