import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export default class M_DropdownListItem extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {

    // const data =[{"title":"text"},{"title":"figure"}, {"title":"image"}, {"title":"frame"}];
    // const listItems = data.map((d) => <ul key={d.title}>{d.title}</ul>);

    return(
      <div
        className="M_DropdownListItem"
      >
      { this.props.text }
      </div>
    )
  }
}
