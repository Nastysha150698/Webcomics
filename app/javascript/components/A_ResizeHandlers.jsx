import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import A_ResizeHandler from '../components/A_ResizeHandler'

export default class A_ResizeHandlers extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    return(
        <div>
          <A_ResizeHandler handlerType={ "nw" } figureResizing={ this.props.figureResizing} top={this.props.top} left={this.props.left} width={this.props.width} height={this.props.height}/>
          <A_ResizeHandler handlerType={ "n" }  figureResizing={ this.props.figureResizing} top={this.props.top} left={this.props.left} width={this.props.width} height={this.props.height}/>
          <A_ResizeHandler handlerType={ "ne" } figureResizing={ this.props.figureResizing} top={this.props.top} left={this.props.left} width={this.props.width} height={this.props.height}/>
          <A_ResizeHandler handlerType={ "w" }  figureResizing={ this.props.figureResizing} top={this.props.top} left={this.props.left} width={this.props.width} height={this.props.height}/>
          <A_ResizeHandler handlerType={ "e" }  figureResizing={ this.props.figureResizing} top={this.props.top} left={this.props.left} width={this.props.width} height={this.props.height}/>
          <A_ResizeHandler handlerType={ "sw" } figureResizing={ this.props.figureResizing} top={this.props.top} left={this.props.left} width={this.props.width} height={this.props.height}/>
          <A_ResizeHandler handlerType={ "s" }  figureResizing={ this.props.figureResizing} top={this.props.top} left={this.props.left} width={this.props.width} height={this.props.height}/>
          <A_ResizeHandler handlerType={ "se" } figureResizing={ this.props.figureResizing} top={this.props.top} left={this.props.left} width={this.props.width} height={this.props.height}/>
        </div>
    )
  }
}
