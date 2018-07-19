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
import LargeFact from '../../../components/LargeFact'
import ListFacts from '../../../components/ListFacts'
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

  professorGradeContainer: {
    display: 'inline-flex',
    alignItems: 'flex-end',
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
  academicFactItem: {
    display: 'inline-flex',
    width: '100%',
    justifyContent: 'space-between',
    borderBottom: '1px solid #dddddd',
    padding: '10px 0px'
  },
  admissionFactContainer: {
    display: 'inline-flex',
    justifyContent: 'space-between',
    width: '100%',
    borderBottom: '1px solid #dddddd',
    padding: '10px 0px'
  },
  admissionFactLabel: {},
  admissionFactValue: {
    fontWeight: 700
  },
  netPriceContainer: {
    width: '100%',
    borderBottom: '1px solid #dddddd',
    padding: '10px 0px',
    textAlign: 'left'
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shorter
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  netPriceItem: {
    display: 'inline-flex',
    justifyContent: 'space-between',
    padding: '8px 0px',
    width: '100%',
    borderBottom: '1px solid #dddddd'
  },
  improveTestPrep: {
    color: blue[400],
    fontWeight: 700
  },
  netPriceDescription: {
    textAlign: 'left',
    borderTop: '1px solid #dddddd',
    marginTop: 10,
    paddingTop: 10
  },
  loanOptionitem: {
    display: 'inline-flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    textAlign: 'left',
    padding: '10px 0px'
  },
  loanOptionitemBorder: {
    borderTop: '1px solid #dddddd'
  },
  loanOptionName: {
    textAlign: 'left',
    width: 160
  },
  loanOptionReasons: {
    margin: 0
  },
  largeAcademicFactItem: {
    borderBottom: '1px solid #dddddd'
  }
})

export class AfterCollege extends React.PureComponent<Props> {
  render() {
    const { classes, college, onPushRoute } = this.props

    const graduationRate = college.afterCollege.graduationRate
    const medianEarnings6YearsAfterGraduation =
      college.earnings.median.sixYrsAfterEntry

    const afterCollegeFacts = [
      {
        label: 'Graduation Rate',
        value: graduationRate,
        secondary: 'Natl. 49%'
      }
      // {
      //   label: 'Employed 2 Years After Graduation',
      //   value: '91%',
      //   secondary: 'Natl. 83%'
      // }
    ]

    const largeFact = {
      label: 'Median Earnings 6 Years After Graduation',
      primary: medianEarnings6YearsAfterGraduation
        ? `$${formatNumber(medianEarnings6YearsAfterGraduation)}`
        : '--',
      unit: '/ year',
      secondary: 'National $33,028'
    }
    const footerLabel = 'Read More About Life After Graduation'

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
                After College
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className={classes.leftFacts}>
                <LargeFact {...largeFact} />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className={classes.rightFacts}>
                <ListFacts items={afterCollegeFacts} />
              </div>
            </Grid>
          </Grid>
        </div>
        <FactFooter onClickCTA={onPushRoute} label={footerLabel} />
      </Paper>
    )
  }
}

export default withStyles(styles)(AfterCollege)
