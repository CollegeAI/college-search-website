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
import InformationCard from '../../../components/InformationCard'
import { formatNumber, decimalToPercentage } from '../../../utils'

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

const MAX_MAJORS_DISPLAY = 10

export class AboutTheClasses extends React.PureComponent<Props> {
  render() {
    const { classes, college } = this.props
    const name = college.name
    const { majors, classSize } = college.academics

    const displayMajors = Object.keys(majors).map(name => ({
      label: name
        .slice(19)
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, function(str) {
          return str.toUpperCase()
        }),
      value: `${majors[name]} Graduates`,
      count: majors[name]
    }))

    displayMajors.sort((a, b) => b.count - a.count)
    const items = displayMajors.slice(
      0,
      Math.min(MAX_MAJORS_DISPLAY, displayMajors.length)
    )

    const mostPopularMajors = {
      heading: 'Most Popular Majors',
      items: items,
      expand: {
        show: 5
      },
      itemLabelStyle: {
        maxWidth: 220,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }

    const academicGrade = 93

    const classSizesChart = {
      header: 'Class Size Breakdown',
      total: 100,
      items: [
        {
          label: '2-9 students',
          value: classSize['range2To9'],
          unit: '%'
        },
        {
          label: '10-19',
          value: classSize['range10To19'],
          unit: '%'
        },
        {
          label: '20-29',
          value: classSize['range20To29'],
          unit: '%'
        },
        {
          label: '30-39',
          value: classSize['range30To39'],
          unit: '%'
        },
        {
          label: '40-49',
          value: classSize['range40To49'],
          unit: '%'
        },
        {
          label: '50-99',
          value: classSize['range50To99'],
          unit: '%'
        },
        {
          label: '100+',
          value: classSize['rangeOver100'],
          unit: '%'
        }
      ]
    }

    const cardHeader = 'About the Classes'
    return (
      <InformationCard header={cardHeader}>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <div className={classes.leftFactsTop} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.rightFactsTop} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.leftFacts}>
              <BarGraph {...classSizesChart} />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.rightFacts}>
              <ListFacts {...mostPopularMajors} />
            </div>
          </Grid>
        </Grid>
      </InformationCard>
    )
  }
}

export default withStyles(styles)(AboutTheClasses)
