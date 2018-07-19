// @flow

import React from 'react'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import classnames from 'classnames'

// Material ui colors
import green from '@material-ui/core/colors/green'
import blue from '@material-ui/core/colors/blue'

import { withStyles } from '@material-ui/core/styles'

// Import Sections
import LetterGrade from '../../../components/LetterGrade'
import ListFacts from '../../../components/ListFacts'
import LargeFact from '../../../components/LargeFact'
import FactFooter from './FactFooter'
import { formatNumber } from '../../../utils'

type Props = {
  classes: Object,
  onPushRoute: Function
}

const styles = theme => ({
  root: {
    width: '100%',
    marginBottom: 32,
    display: 'inline-flex',
    flexDirection: 'column'
  },
  cardContent: {
    padding: '30px 30px 10px'
  },
  title: {
    textAlign: 'left',
    color: blue[500],
    paddingBottom: 30
  },
  leftFacts: {
    padding: '0px 15px 40px 0px',
    textAlign: 'left'
  },
  rightFacts: {
    padding: '0px 30px 40px 15px'
  }
})

export class Students extends React.PureComponent<Props> {
  render() {
    const { classes, college, onPushRoute } = this.props

    const fullTimeUndergrads = formatNumber(college.school.size)
    const over25 = `${(college.demographics.share25Older * 100).toFixed(1)}%`

    const academicFacts = [
      ...(over25
        ? {
            label: 'Undergrads Over 25',
            value: over25
          }
        : {}),
      {
        label: 'Pell Grant',
        value: '--'
      },
      {
        label: 'Varsity Athletes',
        value: '--'
      }
    ]

    const largeFact = {
      label: 'Full-Time Enrollment',
      primary: fullTimeUndergrads,
      unit: 'Undergrads'
    }
    const footerLabel = 'Read More About the Students'

    return (
      <Paper className={classes.root}>
        <div className={classes.cardContent}>
          <Grid container>
            <Grid item xs={12}>
              <Typography
                className={classes.title}
                variant="display1"
                component="p"
              >
                Students
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <div className={classes.leftFacts}>
                <LargeFact {...largeFact} />
                <ListFacts items={academicFacts} />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className={classes.rightFacts} />
            </Grid>
          </Grid>
        </div>
        <FactFooter onClickCTA={onPushRoute} label={footerLabel} />
      </Paper>
    )
  }
}

export default withStyles(styles)(Students)
