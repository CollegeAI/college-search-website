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
import InformationCard from '../../../components/InformationCard'
import { decimalToPercentage } from '../../../utils'

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
  leftFactsTop: {
    padding: '0px 15px 8px 0px'
  },
  rightFactsTop: {
    padding: '0px 30px 8px 15px'
  },
  leftFacts: {
    padding: '0px 15px 40px 0px'
  },
  rightFacts: {
    padding: '0px 30px 40px 15px'
  },
  academicGrade: {
    display: 'inline-flex'
  },
  listHeader: {
    textAlign: 'left',
    fontWeight: 600,
    paddingBottom: 4
  }
})

export class AcademicStats extends React.PureComponent<Props> {
  render() {
    const { classes, college } = this.props
    const name = college.name

    const { afterCollege } = college

    const gradeLevel = {
      label: 'Academics',
      value: 96,
      description:
        'Based on acceptance rate, quality of professors, student reviews, and additional factors.'
    }

    const graduationRate = {
      label: 'Graduation Rate',
      primary: afterCollege.graduationRate,
      secondary: 'National 49%'
    }

    const programFactsTitle = 'Non-traditional Learning'
    const programFacts = [
      {
        label: 'Evening Degree Programs',
        value: '--'
      },
      {
        label: 'Teacher Certification',
        value: '--'
      },
      {
        label: 'Distance Education',
        value: '--'
      },
      {
        label: 'Study Abroad',
        value: '--'
      }
    ]

    const academicFacts = [
      {
        label: 'Full-Time Retention Rate ',
        value: '--'
      },
      {
        label: 'Part-Time Retention Rate ',
        value: '--'
      },
      {
        label: 'Academic Calendar',
        value: '--'
      },
      {
        label: 'Research Funding per Student',
        value: '--'
      }
    ]

    const academicGrade = 93

    const cardHeader = 'Academic Statistics'
    return (
      <InformationCard header={cardHeader}>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <div className={classes.leftFactsTop}>
              <GradeLabel {...gradeLevel} />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.rightFactsTop}>
              <LargeFact {...graduationRate} />
            </div>
          </Grid>
          {/*  Next Section */}
          <Grid item xs={12} sm={6}>
            <div className={classes.leftFacts}>
              <ListFacts items={programFacts} />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.rightFacts}>
              <ListFacts heading={programFactsTitle} items={academicFacts} />
            </div>
          </Grid>
        </Grid>
      </InformationCard>
    )
  }
}

export default withStyles(styles)(AcademicStats)
