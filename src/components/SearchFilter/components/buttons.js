// @flow

import React from 'react'

import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import Slider from '@material-ui/lab/Slider'

import classnames from 'classnames'
import styles from '../styles'

type Props = {
  classes?: Object,
  header: string,
  value: {
    sat: { value?: number },
    act: { value?: number }
  }
}

export class Buttons extends React.PureComponent<Props> {
  onButtonPress = (id: string) => {
    return () => {
      const { setFilter, filterKey, value } = this.props
      const updatedValue = {
        ...value,
        [id]: !value[id]
      }
      setFilter(filterKey, updatedValue)
    }
  }

  render() {
    const { classes = {}, header, value, options } = this.props

    return (
      <div>
        <Typography
          variant="subheading"
          className={classes.filterCategoryHeading}
        >
          {header}
        </Typography>
        <div className={classes.filterContent}>
          <div className={classes.studentBodySizeButtonContainer}>
            {options.map((option, ind) => (
              <Button
                style={{ height: 20 }}
                onClick={this.onButtonPress(option.id)}
                size="small"
                variant={option.value ? 'contained' : 'outlined'}
                color="primary"
                key={ind}
              >
                {option.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Buttons)
