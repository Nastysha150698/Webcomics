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
          <A_ResizeHandler handlerType={ "nw" } setResizingComicItem={this.props.setResizingComicItem} index={this.props.index} />
          <A_ResizeHandler handlerType={ "n" }  setResizingComicItem={this.props.setResizingComicItem} index={this.props.index} />
          <A_ResizeHandler handlerType={ "ne" } setResizingComicItem={this.props.setResizingComicItem} index={this.props.index} />
          <A_ResizeHandler handlerType={ "w" }  setResizingComicItem={this.props.setResizingComicItem} index={this.props.index} />
          <A_ResizeHandler handlerType={ "e" }  setResizingComicItem={this.props.setResizingComicItem} index={this.props.index} />
          <A_ResizeHandler handlerType={ "sw" } setResizingComicItem={this.props.setResizingComicItem} index={this.props.index} />
          <A_ResizeHandler handlerType={ "s" }  setResizingComicItem={this.props.setResizingComicItem} index={this.props.index} />
          <A_ResizeHandler handlerType={ "se" } setResizingComicItem={this.props.setResizingComicItem} index={this.props.index} />
        </div>
    )
  }
}
