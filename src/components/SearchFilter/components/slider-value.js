// @flow

import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'
import Slider from '@material-ui/lab/Slider'
import styles from '../styles'

type Props = {
  classes?: Object,
  header: string,
  value: {
    sat: { value?: number },
    act: { value?: number }
  }
}

export class SliderValue extends React.PureComponent<Props> {
  onChange = (option: any) => {
    const { setFilter, filterKey, value } = this.props
    return (event, val) => {
      const updatedValue = {
        ...value,
        [option.id]: {
          value: val
        }
      }
      setFilter(filterKey, updatedValue)
    }
  }

  render() {
    const { classes = {}, header, type, filterKey, value, options } = this.props
    return (
      <div>
        <Typography
          variant="subheading"
          className={classes.filterCategoryHeading}
        >
          {header}
        </Typography>
        <div className={classes.filterContent}>
          {options.map((option, ind) => (
            <div key={ind}>
              {option.format && (
                <Typography className={classes.testLabel}>
                  {option.format}
                </Typography>
              )}
              <Slider
                value={option.value || 0}
                min={option.min}
                max={option.max}
                step={option.step}
                onChange={this.onChange(option)}
              />
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(SliderValue)
