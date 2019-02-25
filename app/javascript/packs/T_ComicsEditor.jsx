import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import T_ComicsEditorContainer from '../containers/T_ComicsEditorContainer'

const T_ComicsEditor = props => (
  <div className="T_ComicsEditor">
    <T_ComicsEditorContainer {...props} />
  </div>
)

// T_ComicsEditor.defaultProps = {
//   name: 'David'
// }
//
// T_ComicsEditor.propTypes = {
//   name: PropTypes.string
// }

document.addEventListener('DOMContentLoaded', () => {
  let figures = JSON.parse(document.body.dataset.figures)

  ReactDOM.render(
    <T_ComicsEditor figures={ figures } comic_id={1}/>,
    document.body.appendChild(document.createElement('div'))
  )
})
