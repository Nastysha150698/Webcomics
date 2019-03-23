import _ from 'lodash'

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Dropzone from 'react-dropzone'

export default class A_UploadButton2 extends React.Component {
  constructor(){
      super();
      _.bindAll(
        this,
        'handleDrop'
      )
  }

  handleDrop = (acceptedFiles) => {
    // console.log(acceptedFiles);
    this.props.updateImage(acceptedFiles)
  }

  render() {
    return (
      <div className="text-center mt-5">
        <Dropzone onDrop={this.handleDrop}>
          {({getRootProps, getInputProps}) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              Click me to upload a file!
            </div>
          )}
        </Dropzone>
      </div>
    );
  }
}
