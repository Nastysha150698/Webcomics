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
          <A_ResizeHandler handlerType={ "nw" } setResizingFigure={this.props.setResizingFigure} figureResizing={ this.props.figureResizing} figure_id={this.props.figure_id} top={this.props.top} left={this.props.left} width={this.props.width} height={this.props.height}/>
          <A_ResizeHandler handlerType={ "n" }  setResizingFigure={this.props.setResizingFigure} figureResizing={ this.props.figureResizing} figure_id={this.props.figure_id} top={this.props.top} left={this.props.left} width={this.props.width} height={this.props.height}/>
          <A_ResizeHandler handlerType={ "ne" } setResizingFigure={this.props.setResizingFigure} figureResizing={ this.props.figureResizing} figure_id={this.props.figure_id} top={this.props.top} left={this.props.left} width={this.props.width} height={this.props.height}/>
          <A_ResizeHandler handlerType={ "w" }  setResizingFigure={this.props.setResizingFigure} figureResizing={ this.props.figureResizing} figure_id={this.props.figure_id} top={this.props.top} left={this.props.left} width={this.props.width} height={this.props.height}/>
          <A_ResizeHandler handlerType={ "e" }  setResizingFigure={this.props.setResizingFigure} figureResizing={ this.props.figureResizing} figure_id={this.props.figure_id} top={this.props.top} left={this.props.left} width={this.props.width} height={this.props.height}/>
          <A_ResizeHandler handlerType={ "sw" } setResizingFigure={this.props.setResizingFigure} figureResizing={ this.props.figureResizing} figure_id={this.props.figure_id} top={this.props.top} left={this.props.left} width={this.props.width} height={this.props.height}/>
          <A_ResizeHandler handlerType={ "s" }  setResizingFigure={this.props.setResizingFigure} figureResizing={ this.props.figureResizing} figure_id={this.props.figure_id} top={this.props.top} left={this.props.left} width={this.props.width} height={this.props.height}/>
          <A_ResizeHandler handlerType={ "se" } setResizingFigure={this.props.setResizingFigure} figureResizing={ this.props.figureResizing} figure_id={this.props.figure_id} top={this.props.top} left={this.props.left} width={this.props.width} height={this.props.height}/>
        </div>
    )
  }
}
