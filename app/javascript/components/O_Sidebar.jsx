import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

// import M_LayerListItem from '../components/M_LayerListItem'

export default class O_Sidebar extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      figures: this.props.figures
    }
    _.bindAll(
      this,
      'onDragStart',
      'onDragOver',
      'onDragEnd'
    )
  }

  onDragStart = (e, index) => {
    this.draggedItem = this.state.figures[index];

    console.log(this.draggedItem.id);

    e.dataTransfer.effectAllowed = "uninitialized";
    // e.dataTransfer.setData("text/html", e.target.parentNode);
    // e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
  };

  onDragOver = index => {
    const draggedOverItem = this.state.figures[index];

    // if the item is dragged over itself, ignore
    if (this.draggedItem === draggedOverItem) {
      return;
    } else {

      // filter out the currently dragged item
      let newFigures = this.state.figures.filter(item => item !== this.draggedItem);

      // add the dragged item after the dragged over item
      newFigures.splice(index, 0, this.draggedItem);

      this.setState({
        figures: newFigures
      })

    }
  };

  onDragEnd = () => {
    this.draggedIdx = null;
    this.props.reorderLayers(this.state.figures)
  };

  render() {
    // let elements = []
    //
    // this.props.figures.map((figure, i) => {
    //   elements.push(
    //     <M_LayerListItem
    //
    //       figure={ figure }
    //       key={ i }
    //       index={ i }
    //
    //       setActiveFigure={ this.props.setActiveFigure }
    //     />
    //   )
    // })

    return(
      <div
        className="O_Sidebar"
      >
        <ul>
            {this.state.figures.map((figure, idx) => (
              <li key={idx} onDragOver={() => this.onDragOver(idx)}>
                <div
                  className="M_LayerListItem"
                  draggable
                  onDragStart={e => this.onDragStart(e, idx)}
                  onDragEnd={this.onDragEnd}
                >
                  Figure {figure.id}
                </div>
              </li>
            ))}
        </ul>
      </div>
    )
  }
}
