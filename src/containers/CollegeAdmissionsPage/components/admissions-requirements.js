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

type Props = {
  classes: Object,
  college: Object
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
  admissionsRequirementsTitle: {
    textAlign: 'left',
    paddingBottom: 8
  },
  admissionsRequirements: {
    marginBottom: 24
  }
})

export class AdmissionsRequirements extends React.PureComponent<Props> {
  render() {
    const { classes, college } = this.props

    const admissionsRequirements = [
      {
        label: 'High School GPA',
        value: '--'
      },
      {
        label: 'High School Rank',
        value: '--'
      },
      {
        label: 'High School Transcript',
        value: '--'
      },
      {
        label: 'College Prep Courses',
        value: '--'
      },
      {
        label: 'SAT/ACT',
        value: '--'
      },
      {
        label: 'Recommendations',
        value: '--'
      }
    ]

    return (
      <Paper className={classes.root}>
        <div>
          <Typography
            className={classes.title}
            variant="display1"
            component="p"
          >
            Admissions Requirements
          </Typography>
        </div>
        <div>
          <div className={classes.admissionsRequirementsTitle}>
            <Typography variant="title">
              What Really Matters When Applying
            </Typography>
          </div>
          <div className={classes.admissionsRequirements}>
            <ListFacts items={admissionsRequirements} />
          </div>
        </div>
      </Paper>
    )
  }
}

export default withStyles(styles)(AdmissionsRequirements)
