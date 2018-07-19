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
import LetterGrade from '../../../components/LetterGrade'
import ListFacts from '../../../components/ListFacts'
import FactFooter from './FactFooter'
import { getScoreFromRanking } from '../../../utils'

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
  professorGradeContainer: {
    display: 'inline-flex',
    alignItems: 'center',
    width: '100%',
    color: '#464646'
  },
  netPriceValue: {
    fontSize: 48,
    color: '#464646'
  },
  netPriceYear: {
    color: '#464646'
  },
  leftFacts: {
    padding: '0px 15px 40px 0px',
    textAlign: 'left'
  },
  rightFacts: {
    padding: '0px 30px 40px 15px'
  },
  largeAcademicFactItem: {}
})

export class Academics extends React.PureComponent<Props> {
  render() {
    const { classes, college, onPushRoute } = this.props

    const professorValue = getScoreFromRanking(
      (college.rankings.bestCollegeProfessors || {}).value
    )
    const footerLabel = 'Read More About Academics'
    const academicFacts = [
      {
        label: 'Student Faculty Ratio',
        value: college.school.studentFacultyRatio
          ? `${college.school.studentFacultyRatio}:1`
          : '--'
      }
      // {
      //   label: 'Evening Degree Programs',
      //   value: 'Yes'
      // }
    ]

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
                Academics
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className={classes.leftFacts}>
                <div className={classes.largeAcademicFactItem}>
                  <Typography variant="subheading" component="p">
                    Professors
                  </Typography>
                  <div className={classes.professorGradeContainer}>
                    <LetterGrade val={professorValue} />
                    <Typography component="p">
                      Based on faculty accomplishments, salary, student reviews,
                      and additional factors.
                    </Typography>
                  </div>
                </div>
                <ListFacts items={academicFacts} />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className={classes.rightFacts} />
            </Grid>
          </Grid>
        </div>
        <FactFooter label={footerLabel} onClickCTA={onPushRoute} />
      </Paper>
    )
  }
}

export default withStyles(styles)(Academics)
