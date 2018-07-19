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
import GradeLabel from '../../../components/GradeLabel'
import LetterGrade from '../../../components/LetterGrade'
import ListFacts from '../../../components/ListFacts'
import LargeFact from '../../../components/LargeFact'
import BarGraph from '../../../components/BarGraph'
import { getScoreFromRanking } from '../../../utils'

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
  leftFacts: {
    padding: '0px 15px 40px 0px'
  },
  rightFacts: {
    padding: '0px 30px 40px 15px'
  }
})

export class EthnicDiversity extends React.PureComponent<Props> {
  render() {
    const { classes, college } = this.props
    const { school, rankings } = college

    const professorFacts = {
      items: [
        {
          label: 'Student Faculty Ratio',
          value: school.studentFacultyRatio
            ? `${school.studentFacultyRatio}:1`
            : '--'
        },
        {
          label: 'Female Professors',
          value: '--'
        },
        {
          label: 'Male Professors',
          value: '--'
        },
        {
          label: 'Average Professor Salary',
          value: '--'
        }
      ]
    }

    const racialDiversityChart = {
      header: 'Racial Diversity',
      total: 100,
      items: [
        {
          label: 'African American',
          value: '--',
          unit: '%'
        },
        {
          label: 'Asian American',
          value: '--',
          unit: '%'
        },
        {
          label: 'Hispanic',
          value: '--',
          unit: '%'
        },
        {
          label: 'International (Non-Citizen)',
          value: '--',
          unit: '%'
        },
        {
          label: 'Multiracial',
          value: '--',
          unit: '%'
        },
        {
          label: 'Native American',
          value: '--',
          unit: '%'
        },
        {
          label: 'Pacific Islander',
          value: '--',
          unit: '%'
        },
        {
          label: 'Unknown',
          value: '--',
          unit: '%'
        },
        {
          label: 'White',
          value: '--',
          unit: '%'
        }
      ]
    }

    const gradeLevel = {
      label: 'Professors',
      value: rankings.bestCollegeProfessors
        ? getScoreFromRanking(rankings.bestCollegeProfessors)
        : '--',
      description:
        'Based on faculty accomplishments, salary, student reviews, and additional factors.'
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
              Ethnic Diversity
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.leftFacts}>
              <GradeLabel {...gradeLevel} />
              <ListFacts {...professorFacts} />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.rightFacts}>
              <BarGraph {...racialDiversityChart} />
            </div>
          </Grid>
        </Grid>
      </Paper>
    )
  }
}

export default withStyles(styles)(EthnicDiversity)
