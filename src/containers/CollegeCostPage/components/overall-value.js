// @flow

import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import classnames from 'classnames'

// Material ui colors
import green from '@material-ui/core/colors/green'
import blue from '@material-ui/core/colors/blue'

import { withStyles } from '@material-ui/core/styles'

// Import Sections
import ListFacts from '../../../components/ListFacts'
import LargeFact from '../../../components/LargeFact'
import LetterGrade from '../../../components/LetterGrade'
import GradeLabel from '../../../components/GradeLabel'
import {
  getScoreFromRanking,
  formatNumber,
  decimalToPercentage
} from '../../../utils'

type Props = {
  classes: Object
}

type State = {
  expanded: boolean
}

const styles = theme => ({
  root: {
    width: '100%',
    marginBottom: 32,
    display: 'inline-flex',
    flexDirection: 'column',
    padding: '30px 30px 10px',
    boxSizing: 'border-box'
  },
  title: {
    textAlign: 'left',
    color: blue[500],
    paddingBottom: 30
  },
  leftFacts: {
    padding: '0px 15px 24px 0px'
  },
  rightFacts: {
    padding: '0px 30px 24px 15px'
  }
})

export class OverallValue extends React.PureComponent<Props> {
  render() {
    const { classes, college } = this.props

    const { afterCollege, rankings } = college

    const graduationRate = {
      label: 'Graduation Rate',
      primary: afterCollege['graduationRate'],
      secondary: 'National 49%'
    }

    const gradeLevel = {
      label: 'Value',
      value: getScoreFromRanking(rankings.bestValueColleges),
      description:
        'Based on average net price, earnings potential, student and alumni reviews, and additional factors.'
    }

    return (
      <Paper className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <Typography
              className={classes.title}
              variant="display1"
              component="p"
            >
              Overall Value
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <GradeLabel {...gradeLevel} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.leftFacts}>
              <LargeFact {...graduationRate} />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.rightFacts}>
              <LargeFact {...graduationRate} />
            </div>
          </Grid>
        </Grid>
      </Paper>
    )
  }
}

export default withStyles(styles)(OverallValue)
