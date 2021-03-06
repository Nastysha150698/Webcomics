import _ from 'lodash'
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import M_DataEditorItem from '../components/M_DataEditorItem'
import M_ColorPicker from '../components/M_ColorPicker'
import A_Input from '../components/A_Input'
import A_Button from '../components/A_Button'
import A_UploadButton from '../components/A_UploadButton'


export default class O_DataEditor extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    let activeComicItemWidth = ''
    if (this.props.activeComicItem) {
      activeComicItemWidth = this.props.comicItems[this.props.activeComicItem].width
    }

    let activeComicItemHeight = ''
    if (this.props.activeComicItem) {
      activeComicItemHeight = this.props.comicItems[this.props.activeComicItem].height
    }

    let activeComicItemX = ''
    if (this.props.activeComicItem) {
      activeComicItemX = this.props.comicItems[this.props.activeComicItem].x
    }

    let activeComicItemY = ''
    if (this.props.activeComicItem) {
      activeComicItemY = this.props.comicItems[this.props.activeComicItem].y
    }

    let activeComicItemType = ''
    if (this.props.activeComicItem) {
      activeComicItemType = this.props.comicItems[this.props.activeComicItem].type
    }

    let activeComicItemBackgroundColor = '#232537'
    if (activeComicItemType == 'figure') {
      activeComicItemBackgroundColor = this.props.comicItems[this.props.activeComicItem].background_color
    }

    let activeComicItemFont_size = 8
    let activeComicItemColor = ''
    if (activeComicItemType == 'speech') {
      activeComicItemFont_size = this.props.comicItems[this.props.activeComicItem].font_size
      activeComicItemColor = this.props.comicItems[this.props.activeComicItem].color
    }
    return(
      <div
        className={'DataEditor'}
      >
        <div className={'DataEditorHeader'}>Transformation</div>
        <M_DataEditorItem
          dataEditorItemName={'Size'}
          changeComicItemData={this.props.changeComicItemData}
        >
          <A_Input
            value={activeComicItemWidth}
            inputType={'W'}
            paramName={ 'width' }
            changeComicItemData={this.props.changeComicItemData}
          />
          <A_Input
            value={activeComicItemHeight}
            inputType={'H'}
            paramName={ 'height' }
            changeComicItemData={this.props.changeComicItemData}
          />
        </M_DataEditorItem>

        <M_DataEditorItem
          dataEditorItemName={'Position'}
          changeComicItemData={this.props.changeComicItemData}
        >
          <A_Input
            value={activeComicItemX}
            inputType={'X'}
            paramName={ 'x' }
            changeComicItemData={this.props.changeComicItemData}
          />
          <A_Input
            value={activeComicItemY}
            inputType={'Y'}
            paramName={ 'y' }
            changeComicItemData={this.props.changeComicItemData}
          />
        </M_DataEditorItem>

        <M_DataEditorItem
          dataEditorItemName={'Layer'}
          changeComicItemData={this.props.changeComicItemData}
        >
          <A_Button
            content={'Down'}
            backgroundColor={'#232537'}
            color={'white'}
            width={'64px'}
            height={'24px'}
            function={this.props.putComicItemDown}
          />
          <A_Button
            content={'Up'}
            backgroundColor={'#232537'}
            color={'white'}
            width={'64px'}
            height={'24px'}
            function={this.props.putComicItemUp}
          />
        </M_DataEditorItem>

        <M_DataEditorItem
          dataEditorItemName={'Object'}
          changeComicItemData={this.props.changeComicItemData}
        >
          <A_Button
            content={'Delete'}
            backgroundColor={'#232537'}
            color={'white'}
            width={'64px'}
            height={'24px'}
            function={this.props.deleteComicItem}
          />
        </M_DataEditorItem>

        {
          activeComicItemType == 'figure' &&
          <M_DataEditorItem
            dataEditorItemName={'Fill'}
            changeComicItemData={this.props.changeComicItemData}
          >
            <M_ColorPicker
              activeComicItem={ this.props.activeComicItem }
              activeComicItemColor={ activeComicItemBackgroundColor }

              updateColor={this.props.updateColor}
              tuneComicItem={ this.props.tuneComicItem }
            />
          </M_DataEditorItem>
        }

        {
          activeComicItemType == 'speech' &&
          <M_DataEditorItem
            dataEditorItemName={'Font'}
            changeComicItemData={this.props.changeComicItemData}
          >
            <A_Input
              value={activeComicItemFont_size}
              inputType={'S'}
              paramName={ 'font_size' }
              changeComicItemData={this.props.changeComicItemData}
            />
            <M_ColorPicker
              activeComicItem={ this.props.activeComicItem }
              activeComicItemColor={ activeComicItemColor }

              updateColor={this.props.updateColor}
              tuneComicItem={ this.props.tuneComicItem }
            />
          </M_DataEditorItem>
        }
        {
          activeComicItemType == 'image' &&
          <M_DataEditorItem
            dataEditorItemName={'Image'}
            changeComicItemData={this.props.changeComicItemData}
          >
            <A_UploadButton
              updateImage={ this.props.updateImage }
            />
          </M_DataEditorItem>
        }
      </div>
    )
  }
}
