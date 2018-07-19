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
import { getScoreFromRanking, decimalToPercentage } from '../../../utils'

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
  leftFactsTop: {
    padding: '0px 15px 16px 0px'
  },
  rightFactsTop: {
    padding: '0px 30px 16px 15px'
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
    const { school, student, demographics, rankings } = college

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
          value: demographics.percentageRaceEthnicity['black'] || '--',
          unit: '%'
        },
        {
          label: 'Asian American',
          value: demographics.percentageRaceEthnicity['asian'] || '--',
          unit: '%'
        },
        {
          label: 'Hispanic',
          value: demographics.percentageRaceEthnicity['hisp'] || '--',
          unit: '%'
        },
        {
          label: 'International (Non-Citizen)',
          value: demographics.percentageRaceEthnicity['nra'] || '--',
          unit: '%'
        },
        {
          label: 'Multiracial',
          value: demographics.percentageRaceEthnicity['2mor'] || '--',
          unit: '%'
        },
        {
          label: 'Native American',
          value: demographics.percentageRaceEthnicity['aian'] || '--',
          unit: '%'
        },
        {
          label: 'Pacific Islander',
          value: demographics.percentageRaceEthnicity['nhpi'] || '--',
          unit: '%'
        },
        {
          label: 'Unknown',
          value: demographics.percentageRaceEthnicity['unkn'] || '--',
          unit: '%'
        },
        {
          label: 'White',
          value: demographics.percentageRaceEthnicity['white'] || '--',
          unit: '%'
        }
      ]
    }

    const gradeLevel = {
      label: 'Professors',
      value: getScoreFromRanking(rankings.bestCollegeProfessors),
      description:
        'Based on faculty accomplishments, salary, student reviews, and additional factors.'
    }

    const undergradGender = [
      {
        label: 'Female Undergrads',
        value: demographics.women
          ? decimalToPercentage(demographics.women)
          : '--'
      },
      {
        label: 'Male Undergrads',
        value: demographics.men ? decimalToPercentage(demographics.men) : '--'
      }
    ]

    const studentPrimaryResidenceChart = {
      header: 'Student Primary Residence',
      total: 100,
      items: [
        {
          label: 'In-State',
          value: '--',
          unit: '%'
        },
        {
          label: 'Out-of-State',
          value: '--',
          unit: '%'
        },
        {
          label: 'International',
          value: '--',
          unit: '%'
        },
        {
          label: 'Unknown',
          value: '--',
          unit: '%'
        }
      ]
    }

    const studentAgeChart = {
      header: 'Student Age',
      total: 100,
      items: [
        {
          label: 'Under 18',
          value: '--',
          unit: '%'
        },
        {
          label: '18-19',
          value: '--',
          unit: '%'
        },
        {
          label: '20-21',
          value: '--',
          unit: '%'
        },
        {
          label: '22-24',
          value: '--',
          unit: '%'
        },
        {
          label: 'Over 25',
          value: '--',
          unit: '%'
        }
      ]
    }

    const { shareIncome } = student

    const householdIncomeLevelsChart = {
      header: 'Household Income Levels',
      total: 100,
      items: [
        {
          label: '<$30k',
          value: shareIncome['range0To30000']
            ? Math.floor(shareIncome['range0To30000'] * 100)
            : '--',
          unit: '%'
        },
        {
          label: '$30k-$48k',
          value: shareIncome['range30001To48000']
            ? Math.floor(shareIncome['range30001To48000'] * 100)
            : '--',
          unit: '%'
        },
        {
          label: '$48k-$75k',
          value: shareIncome['range48001To75000']
            ? Math.floor(shareIncome['range48001To75000'] * 100)
            : '--',
          unit: '%'
        },
        {
          label: '$75k-$110k',
          value: shareIncome['range75001To110000']
            ? Math.floor(shareIncome['range75001To110000'] * 100)
            : '--',
          unit: '%'
        },
        {
          label: '$110k+',
          value: shareIncome['range110000Plus']
            ? Math.floor(shareIncome['range110000Plus'] * 100)
            : '--',
          unit: '%'
        }
      ]
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
              About the Students
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.leftFactsTop}>
              <BarGraph {...studentPrimaryResidenceChart} />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.rightFactsTop}>
              <ListFacts items={undergradGender} />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.leftFacts}>
              <BarGraph {...studentAgeChart} />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.rightFacts}>
              <BarGraph {...householdIncomeLevelsChart} />
            </div>
          </Grid>
        </Grid>
      </Paper>
    )
  }
}

export default withStyles(styles)(EthnicDiversity)
