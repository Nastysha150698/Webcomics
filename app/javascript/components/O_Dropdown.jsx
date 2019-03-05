import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import M_DropdownListItem from '../components/M_DropdownListItem'

export default class O_Dropdown extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      backgroundColor: this.props.backgroundColor
    }
  }


  render() {
    const styles = {
      backgroundColor: this.state.backgroundColor
    }

    let elements = []

    this.props.data.map((item, i) => {
      elements.push(
        <M_DropdownListItem
          text={ item }
          key={ i }
          backgroundColor={ "yellow" }
        />
      )
    })

    return(
      <div
        className="O_Dropdown"
        style={ styles }
      >
      { elements }

      </div>

    )
  }
}
