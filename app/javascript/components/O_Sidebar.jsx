import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import M_LayerListItem from '../components/M_LayerListItem'
import M_LayerListItemDevider from '../components/M_LayerListItemDevider'


export default class O_Sidebar extends React.Component {
  constructor(props, context) {
    super(props, context)

    let items = []
    this.props.figures.map((item, i) => {
      item.type = 'figure'
      items.push(item)
    })

    this.state = {
      items: items
    }
    _.bindAll(
      this,
      'setDraggedItem',
      'onDragStart',
      'onDragOver',
      'setNewFiguresOrder',
      'onDragEnd'
    )
  }

  onDragStart = (e, index) => {
    // this.draggedItem = this.state.figures[index];
    // e.dataTransfer.effectAllowed = "uninitialized";
  };

  setDraggedItem(index) {
    this.setState({
      draggedItemIndex: index
    })
  }

  setNewFiguresOrder(draggedOverItemId, draggedOverItemIndex) {
    const draggedItem = this.state.items[this.state.draggedItemIndex]
    const draggedOverItem = this.state.items[draggedOverItemIndex]

    if (draggedItem['id'] === draggedOverItemId) {
      return;
    } else {

      console.log('draggedOverItem:', draggedOverItemIndex, draggedOverItem.id, 'draggedItem:', this.state.draggedItemIndex, draggedItem.id)

      let newFigures = this.state.items.filter(item => item !== draggedItem)
      newFigures.splice(draggedOverItemIndex, 0, draggedItem)

      this.setState({
        figures: newFigures
      })

      console.log('draggedOverItem:', draggedOverItemIndex, draggedOverItem.id, 'draggedItem:', this.state.draggedItemIndex, draggedItem.id)

      console.log('figures reordered');
    }
  }

  onDragOver = index => {
    // const draggedOverItem = this.state.figures[index];
    //
    // if (this.draggedItem === draggedOverItem) {
    //   return;
    // } else {
    //   let newFigures = this.state.figures.filter(item => item !== this.draggedItem);
    //   newFigures.splice(index, 0, this.draggedItem);
    //   this.setState({
    //     figures: newFigures
    //   })
    // }
  }

  onDragEnd = () => {
    // this.draggedIdx = null;
    // this.props.reorderLayers(this.state.figures)
  };

  render() {
    let elements = []

    this.state.items.map((figure, i) => {
      elements.push(
        <M_LayerListItem

          figure={ figure }
          key={ i }
          index={ i }

          setActiveFigure={ this.props.setActiveFigure }
          setDraggedItem={ this.setDraggedItem }
          setNewFiguresOrder={ this.setNewFiguresOrder }
        />
      )
    })

    return(
      <div
        className="O_Sidebar"
      >
        { elements }
      </div>
    )
  }
}

// <ul>
//     {this.state.figures.map((figure, idx) => (
//       <li key={idx} onDragOver={() => this.onDragOver(idx)}>
//         <div
//           className="M_LayerListItem"
//           draggable
//           onDragStart={e => this.onDragStart(e, idx)}
//           onDragEnd={this.onDragEnd}
//         >
//           Figure {figure.id}
//         </div>
//       </li>
//     ))}
// </ul>
