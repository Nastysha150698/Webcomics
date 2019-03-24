import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import A_DropdownListItem from '../components/A_DropdownListItem'

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
        <A_DropdownListItem
          type={ item.type }
          text={ item.text }
          function={ item.function }
          key={ i }
        />
      )
    })

    return(
      <div
        className="A_Dropdown"
        style={ styles }
      >
      { elements }

      </div>

    )
  }
}
