import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import O_DataEditor from '../components/O_DataEditor'
import M_LayerList from '../components/M_LayerList'
import M_LayerListItem from '../components/M_LayerListItem'

export default class O_Sidebar extends React.Component {
  constructor(props, context) {
    super(props, context)

    let comicItems = []
    this.props.comicItems.map((comicItem, i) => {
      comicItem.type = 'figure'
      comicItems.push(comicItem)
    })

    this.state = {
      comicItems: comicItems
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
    this.props.comicItems.map((comicItem, i) => {
      elements.push(
        <M_LayerListItem

          comicItem={ comicItem }
          key={ i }
          index={ i }

          setActiveComicItem={ this.props.setActiveComicItem }
          setDraggedItem={ this.setDraggedItem }
          setNewComicItemsOrder={ this.setNewComicItemsOrder }
        />
      )
    })
    elements.reverse()

    let activeComicItemColor = '#232537'
    if (this.props.activeComicItem) {
      activeComicItemColor = this.props.comicItems[this.props.activeComicItem].background_color
    }

    return(
      <div
        className="O_Sidebar"
      >
        <O_DataEditor
          comicItems={ this.props.comicItems }
          activeComicItem={ this.props.activeComicItem }
          activeComicItemColor={ activeComicItemColor }

          updateColor={this.props.updateColor}
          changeComicItemData={this.props.changeComicItemData}
          tuneComicItem={ this.props.tuneComicItem }
        />

        <M_LayerList>
          { elements }
        </M_LayerList>
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
