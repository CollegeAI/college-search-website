// @flow

import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import NestedMultichoice from './nested-multichoice'
import Select from './select'
import Multichoice from './multichoice-checkbox'
import SliderValue from './slider-value'
import Buttons from './buttons'

type Props = {
  type: string
}

export class FilterSection extends React.PureComponent<Props> {
  render() {
    const { type } = this.props

    switch (type) {
      case 'nested-multichoice': {
        return <NestedMultichoice {...this.props} />
      }
      case 'multichoice': {
        return <Multichoice {...this.props} />
      }
      case 'select': {
        return <Select {...this.props} />
      }
      case 'slider-value': {
        return <SliderValue {...this.props} />
      }
      case 'buttons': {
        return <Buttons {...this.props} />
      }
      default: {
        return null
      }
    }
  }
}

export default FilterSection
