import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import M_Figure from '../components/M_Figure'

export default class O_ComicsArtbord extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    let elements = []

    this.props.figures.map((figure, i) => {
      elements.push(
        <M_Figure figure={ figure } key={ i } />
      )
    })

    return(
      <div className="O_ComicsArtbord">
        { elements }
      </div>
    )
  }
}
