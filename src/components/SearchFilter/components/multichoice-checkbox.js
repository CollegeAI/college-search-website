// @flow

import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import InputAdornment from '@material-ui/core/InputAdornment'

import Checkbox from '@material-ui/core/Checkbox'

import SearchIcon from '@material-ui/icons/Search'

import styles from '../styles'

type Props = {
  classes?: Object
}

export class MultiChoiceCheckbox extends React.PureComponent<Props> {
  onSetFilter = (id: string) => {
    const { setFilter, filterKey, value } = this.props
    return event => {
      const updatedValue = {
        ...value,
        [id]: event.target.checked
      }
      setFilter(filterKey, updatedValue)
    }
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
          {options.map(({ label, id }, ind) => (
            <div key={ind} className={classes.checkboxContainer}>
              <Checkbox
                checked={value[id]}
                className={classes.checkbox}
                color="primary"
                onChange={this.onSetFilter(id)}
              />
              <Typography variant="subheading" style={{ paddingBottom: 4 }}>
                {label}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(MultiChoiceCheckbox)
