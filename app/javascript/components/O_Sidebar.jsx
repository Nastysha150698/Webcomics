import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import M_LayerListItem from '../components/M_LayerListItem'

export default class O_Sidebar extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    let elements = []

    this.props.figures.map((figure, i) => {
      elements.push(
        <M_LayerListItem
          figure={ figure }
          key={ i }
          index={ i }

          setActiveFigure={ this.props.setActiveFigure }
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
