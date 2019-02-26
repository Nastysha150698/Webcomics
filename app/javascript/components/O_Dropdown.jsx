import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import M_DropdownListItem from '../components/M_DropdownListItem'

export default class O_Dropdown extends React.Component {
  constructor(props, context) {
    super(props, context)
  }


  render() {

    let elements = []

    this.props.data.map((item, i) => {
      elements.push(
        <M_DropdownListItem
          text={ item }
          key={ i }
        />
      )
    })

    return(
      <div
        className="O_Dropdown"
      >
      { this.props.active && elements }

      </div>

    )
  }
}
