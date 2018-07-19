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

export class AdmissionsDeadline extends React.PureComponent<Props> {
  onImproveSATTestPrepClick = () => {
    console.log('onImproveTestPrepClick')
  }

  onImproveACTTestPrepClick = () => {
    console.log('onImproveTestPrepClick')
  }

  onApplicationWebsiteClick = () => {
    const { college: { links } } = this.props
    const win = window.open(links.applicationSite, '_blank')
    win.focus()
  }

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
        value: `${sat.reading.percentile25}-${sat.reading.percentile75}`
      }
    ]

    const applicationDeadline = '—'

    const deadlineFacts = [
      {
        label: 'Early Decision Deadline',
        value: '--'
      },
      {
        label: 'Early Action Deadline',
        value: '—'
      },
      {
        label: 'Offers Early Decision',
        value: '--'
      },
      {
        label: 'Offers Early Action',
        value: '--'
      }
    ]

    const applicationFee = '--'
    const applicationFacts = [
      {
        label: 'Application Website',
        value: 'admissions.rpi.edu/undergraduate/admission/index.html',
        onClick: this.onApplicationWebsiteClick
      },
      {
        label: 'Accepts Common App',
        value: '--'
      },
      {
        label: 'Accepts Coalition App',
        value: '--'
      }
    ]
    return (
      <Paper className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <Typography
              className={classes.title}
              variant="display1"
              component="p"
            >
              Admissions Deadlines
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.leftFacts}>
              <LargeFact
                label="Application Dealine"
                primary={applicationDeadline}
              />
              <ListFacts items={deadlineFacts} />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.rightFacts}>
              <LargeFact label="Application Fee" primary={applicationFee} />
              <ListFacts items={applicationFacts} />
            </div>
          </Grid>
        </Grid>
      </Paper>
    )
  }
}

export default withStyles(styles)(AdmissionsDeadline)
