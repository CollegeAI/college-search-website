// @flow

import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'
import Checkbox from '@material-ui/core/Checkbox'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

import styles from '../styles'

type Props = {
  classes?: Object,
  header: string,
  value: string,
  options: Array<{ label: string, id: string }>
}

export class SelectFilter extends React.PureComponent<Props> {
  onSetFilter = (event: Event) => {
    const { setFilter, filterKey, value } = this.props
    const updatedValue = {
      value: event.target.value
    }
    setFilter(filterKey, updatedValue)
  }

  render() {
    const { classes = {}, header, options, value } = this.props

    return (
      <div>
        <Typography
          variant="subheading"
          className={classes.filterCategoryHeading}
        >
          {header}
        </Typography>
        <div className={classes.filterContent}>
          <Select
            value={value}
            onChange={this.onSetFilter}
            className={classes.select}
          >
            {options.map(({ value, label }, ind) => (
              <MenuItem key={ind} value={value}>
                {label}
              </MenuItem>
            ))}
          </Select>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(SelectFilter)
