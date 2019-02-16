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

  }

  render() {
    return(
      <div className="T_ComicsEditorContainer">
        <O_Sidebar
          figures={ this.state.figures }
        />

        <O_ComicsArtboard
          figures={ this.state.figures }
        />
      </div>
    )
  }
}
