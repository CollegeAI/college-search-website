// @flow

import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'

import Checkbox from '@material-ui/core/Checkbox'
import Slider from '@material-ui/lab/Slider'

import styles from '../styles'

type Props = {
  classes?: Object,
  header: string,
  filterKey: string,
  choices: Array<{
    id: string,
    label: string,
    options: Array<{
      label: string,
      id: string
    }>
  }>
}

export class CollegeType extends React.PureComponent<Props> {
  onUpdateFilter = (ids: Array<string>) => {
    const { setFilter, filterKey, value } = this.props
    return event => {
      const updatedValue = {
        ...value
      }
      if (ids.length >= 2) {
        let setBool = ids.some(id => Boolean(value[id]))
        ids.forEach(id => (updatedValue[id] = !setBool))
      } else {
        const [id] = ids
        updatedValue[id] = event.target.checked
        if (
          updatedValue['private'] === false &&
          updatedValue['public'] === false
        ) {
          updatedValue['fouryear'] = false
        }
      }
      setFilter(filterKey, updatedValue)
    }
  }

  render() {
    const { classes = {}, header, choices, value } = this.props
    return (
      <div>
        <Typography
          variant="subheading"
          className={classes.filterCategoryHeading}
        >
          {header}
        </Typography>
        <div className={classes.filterContent}>
          {choices.map((choice, ind) => (
            <div key={ind}>
              <div className={classes.checkboxContainer}>
                <Checkbox
                  checked={
                    (choice.options &&
                      choice.options.some(option => value[option.id])) ||
                    value[choice.id]
                  }
                  className={classes.checkbox}
                  color="primary"
                  onChange={this.onUpdateFilter(
                    (choice.options
                      ? choice.options.map(o => o.id)
                      : []
                    ).concat([choice.id])
                  )}
                />
                <Typography variant="subheading" style={{ paddingBottom: 4 }}>
                  {choice.label}
                </Typography>
              </div>
              {choice.options && (
                <div className={classes.collegeTypeSubFields}>
                  {choice.options.map((option, optionInd) => (
                    <div key={optionInd} className={classes.checkboxContainer}>
                      <Checkbox
                        checked={value[option.id]}
                        className={classes.checkbox}
                        color="primary"
                        onChange={this.onUpdateFilter([option.id])}
                      />
                      <Typography
                        variant="subheading"
                        style={{ paddingBottom: 4 }}
                      >
                        {option.label}
                      </Typography>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(CollegeType)
