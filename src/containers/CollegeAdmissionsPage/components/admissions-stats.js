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

type Props = {
  classes: Object
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
  acceptanceRate: {
    textAlign: 'left'
  },
  acceptanceRateValue: {
    fontSize: 48,
    marginBottom: 32
  },
  leftFacts: {
    padding: '0px 15px 40px 0px'
  },
  rightFacts: {
    padding: '0px 30px 40px 15px'
  },
  improveTestPrep: {
    color: blue[400],
    fontWeight: 700,
    padding: '10px 0px',
    textAlign: 'left',
    borderBottom: '1px solid #dddddd'
  }
})

export class AdmissionsStats extends React.PureComponent<Props> {
  render() {
    const { classes, college } = this.props
    const name = college.name

    const acceptanceRate = `${(college.admissions.acceptanceRate * 100).toFixed(
      1
    )}%`

    const { sat, act } = college.admissions

    const SATFacts = [
      {
        label: 'SAT Reading',
        value: sat.reading.percentile25
          ? `${sat.reading.percentile25}-${sat.reading.percentile75}`
          : '--'
      },
      {
        label: 'SAT Math',
        value: sat.math.percentile25
          ? `${sat.math.percentile25}-${sat.math.percentile75}`
          : '--'
      },
      {
        label: 'Students Submitting SAT',
        value: '--'
      }
    ]

    const ACTFacts = [
      {
        label: 'ACT English',
        value: act.english.percentile25
          ? `${act.english.percentile25}-${act.english.percentile75}`
          : '--'
      },
      {
        label: 'ACT Math',
        value: act.math.percentile25
          ? `${act.math.percentile25}-${act.math.percentile75}`
          : '--'
      },
      {
        label: 'ACT Writing',
        value: act.writing.percentile25
          ? `${act.writing.percentile25}-${act.writing.percentile75}`
          : '--'
      },
      {
        label: 'ACT Science',
        value: act.science.percentile25
          ? `${act.science.percentile25}-${act.science.percentile75}`
          : '--'
      },
      {
        label: 'Students Submitting ACT',
        value: '37%'
      }
    ]

    const applicationFacts = [
      {
        label: 'Early Decision Acceptance Rate',
        value: '--'
      },
      {
        label: 'Total Applicants',
        value: '--'
      }
    ]

    const satRange = `${sat.math.percentile25 + sat.reading.percentile25}-${sat
      .math.percentile75 + sat.reading.percentile75}`
    const actRange = `${act.cumulative.percentile25}-${
      act.cumulative.percentile75
    }`

    return (
      <Paper className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <Typography
              className={classes.title}
              variant="display1"
              component="p"
            >
              Admissions Statistics
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.leftFacts}>
              <LargeFact label="Acceptance Rate" primary={acceptanceRate} />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.rightFacts}>
              <ListFacts items={applicationFacts} />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.leftFacts}>
              <LargeFact label="SAT Range" primary={satRange} />
              <ListFacts items={SATFacts} />
              <div className={classes.improveTestPrep}>
                <a onClick={this.onImproveSATTestPrepClick}>
                  Improve Your SAT Scores with Test Prep
                </a>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.rightFacts}>
              <LargeFact label="ACT Range" primary={actRange} />
              <ListFacts items={ACTFacts} />
              <div className={classes.improveTestPrep}>
                <a onClick={this.onImproveACTTestPrepClick}>
                  Improve Your ACT Scores with Test Prep
                </a>
              </div>
            </div>
          </Grid>
        </Grid>
      </Paper>
    )
  }
}

export default withStyles(styles)(AdmissionsStats)
