import _ from 'lodash'
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import M_Figure from '../components/M_Figure'
import A_Button from '../components/A_Button'
import A_DropdownButton from '../components/A_DropdownButton'

export default class O_ComicsArtbord extends React.Component {
  constructor(props, context) {
    super(props, context)
    _.bindAll(
      this,
      'handleMouseMove',
      'handleMouseUp',
      'handleClick'
    )
  }

  handleMouseMove(e) {
    var coursorX = event.pageX
    var coursorY = event.pageY
    this.props.setCoursorPosition(coursorX, coursorY)
  }

  handleMouseUp() {
    this.props.setDraggingResizingNone()
  }

  handleClick() {
    this.props.setActiveNone()
  }

  render() {
    let elements = []

    this.props.comicItems.map((comicItem, i) => {
      elements.push(
        <M_Figure
          comicItem={ comicItem }
          key={ i }
          index={i}
          setDraggingComicItem={this.props.setDraggingComicItem}
          setResizingComicItem={this.props.setResizingComicItem}
        />
      )
    })

    const styles = {
      position: 'fixed',
      top: '20px',
      left: '260px',
    }
    const data = [{text: 'figure', function: this.props.createNewComicItem}]

    return(
      <div className="O_ComicsArtbord"
        onMouseMove={ this.handleMouseMove }
        onMouseUp={ this.handleMouseUp}
        onClick={ this.handleClick}
      >
        <A_DropdownButton
          color={"#292c3f"}
          text={ "Add" }
          data={ data }
        />
        { elements }
      </div>
    )
  }
}
