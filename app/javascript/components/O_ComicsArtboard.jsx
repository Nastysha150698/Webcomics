import _ from 'lodash'
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import $ from 'jquery'

import M_Figure from '../components/M_Figure'
import M_Image from '../components/M_Image'
import M_Speech from '../components/M_Speech'
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

  handleMouseMove() {
    var coursorX = event.pageX - $('#O_ComicsArtbordZone').offset().left;
    var coursorY = event.pageY - $('#O_ComicsArtbordZone').offset().top;

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
      if (comicItem.type == 'figure') {
        elements.push(
          <M_Figure
            type={ comicItem.type }
            comicItem={ comicItem }
            key={ i }
            index={i}
            setDraggingComicItem={this.props.setDraggingComicItem}
            setResizingComicItem={this.props.setResizingComicItem}
          />
        )
      }
      if (comicItem.type == 'image') {
        elements.push(
          <M_Image
            type={ comicItem.type }
            comicItem={ comicItem }
            key={ i }
            index={i}
            setDraggingComicItem={this.props.setDraggingComicItem}
            setResizingComicItem={this.props.setResizingComicItem}
          />
        )
      }
      if (comicItem.type == 'speech') {
        elements.push(
          <M_Speech
            type={ comicItem.type }
            comicItem={ comicItem }
            key={ i }
            index={i}
            setDraggingComicItem={this.props.setDraggingComicItem}
            setResizingComicItem={this.props.setResizingComicItem}
            changeComicItemData={this.props.changeComicItemData}
          />
        )
      }
    })

    const styles = {
      position: 'fixed',
      top: '20px',
      left: '260px',
    }
    const data = [
      {text: 'Figure', function: this.props.createNewComicItem, type: 'figure'},
      {text: 'Speech', function: this.props.createNewComicItem, type: 'speech'},
      {text: 'Image', function: this.props.createNewComicItem, type: 'image'}
    ]

    let buttonStyles = {
      position: 'fixed',
      right: '20px',
      top: '20px',
    }

    return(
      <div className="O_ComicsArtbord"
        onMouseMove={ this.handleMouseMove }
        onMouseUp={ this.handleMouseUp}
        onClick={ this.handleClick}
      >
        {this.props.sidebarOn &&
          <A_DropdownButton
            color={"#292c3f"}
            text={ "Add" }
            data={ data }
          />
        }
        <A_Button
          content={'Show'}
          backgroundColor={'#232537'}
          color={'white'}
          width={'50px'}
          height={'50px'}
          styles={ buttonStyles }
          function={this.props.hideSidebar}
        />
        <div id="O_ComicsArtbordZone">
          { elements }
        </div>
      </div>
    )
  }
}
