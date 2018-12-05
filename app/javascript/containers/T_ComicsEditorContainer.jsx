import _ from 'lodash'
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import O_Sidebar from '../components/O_Sidebar'
import O_ComicsArtboard from '../components/O_ComicsArtboard'

export default class T_ComicsEditorContainer extends React.Component {
  constructor(props, context) {
    super(props, context)

    let figures = []

    this.props.figures.map((figure, i) => {
      figure.z_index = i
      figures.push(figure)
    })

    this.state = {
      figures: figures
    }

    _.bindAll(
      this,
      'handleFigureClick',
      'handleDrop',
      'handleDragOver',
      'handleDragStart'
    )
  }

  handleFigureClick(id) {
    console.log('T_ComicsEditorContainer', 'click', id)

    const { figures } = this.state
    let nextFigures = []

    figures.map((figure) => {
      if (id === figure.id) {
        console.log('Figure removed')
      } else {
        nextFigures.push(figure)
      }
    })

    this.setState({
      figures: nextFigures
    })
  }

  handleDrop(id) {
    const { currentDraggableId } = this.state
    let currentDropzoneId = id
    let { figures } = this.state
    let movingElementIndex
    let dropzoneElementIndex

    figures.map((figure, i) => {
      if (figure.id === currentDraggableId) {
        movingElementIndex = i
      } else if (figure.id === currentDropzoneId) {
        dropzoneElementIndex = i
      }
    })

    const movingElement = figures[movingElementIndex]

    if (dropzoneElementIndex > movingElementIndex) {
      dropzoneElementIndex = movingElementIndex - 1
    }

    figures.splice(movingElementIndex - 1, 1)
    figures.splice(dropzoneElementIndex, 0, movingElement)
    figures = this.setZIndexOnElements(figures)

    this.setState({
      figures: figures
    })
  }

  setZIndexOnElements(items) {
    items.forEach(
      function(item, index) {
        index += 1
        item.z_index = index
      }
    )

    return items
  }

  handleDragOver(e) {
    console.log('drag over')
    e.preventDefault()
  }

  handleDragStart(id) {
    console.log('drag started', id)

    this.setState({
      currentDraggableId: id
    })
  }

  render() {
    return(
      <div className="T_ComicsEditorContainer">
        <O_Sidebar
          figures={ this.state.figures }
          handleFigureClick={ this.handleFigureClick }
          handleDrop={ this.handleDrop }
          handleDragOver={ this.handleDragOver }
          handleDragStart={ this.handleDragStart }
        />

        <O_ComicsArtboard
          figures={ this.state.figures }
        />
      </div>
    )
  }
}
