// @flow

import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import classnames from 'classnames'

// Material ui colors
import green from '@material-ui/core/colors/green'
import blue from '@material-ui/core/colors/blue'

import { withStyles } from '@material-ui/core/styles'

// Import Sections
import InformationCard from '../../../components/InformationCard'
import GradeLabel from '../../../components/GradeLabel'
import LargeFact from '../../../components/LargeFact'
import ListFacts from '../../../components/ListFacts'
import { formatNumber } from '../../../utils'

type Props = {
  classes: Object
}

const styles = theme => ({
  leftFacts: {
    paddingRight: 15,
    marginBottom: 32
  },
  rightFacts: {
    paddingLeft: 15,
    marginBottom: 32
  }
})

export class Earnings extends React.PureComponent<Props> {
  render() {
    const { classes, college } = this.props
    const { earnings } = college
    const { median } = earnings
    const cardHeader = 'Earnings'
    const twoYearsLargeFact = {
      label: 'Median Earnings 2 Years After Graduation',
      primary: median.sixYrsAfterEntry
        ? `$${formatNumber(median.sixYrsAfterEntry)}`
        : '--',
      unit: ' /  year',
      secondary: 'National $26,913'
    }

    const twoYearsAfterGrad = {
      label: '2 Years After Graduation',
      items: [
        {
          label: '25% Earn Less Than',
          value: '--/ year'
        },
        {
          label: '25% Earn More Than',
          value: '--/ year'
        }
      ]
    }

    const sixYearsLargeFact = {
      label: 'Median Earnings 6 Years After Graduation',
      primary: median.tenYrsAfterEntry
        ? `$${formatNumber(median.tenYrsAfterEntry)}`
        : '--',
      unit: ' /  year',
      secondary: 'National $33,028'
    }

    const sixYearsAfterGrad = {
      label: '6 Years After Graduation',
      items: [
        {
          label: '25% Earn Less Than',
          value: '--/ year'
        },
        {
          label: '25% Earn More Than',
          value: '--/ year'
        }
      ]
    }

    return (
      <InformationCard header={cardHeader}>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <div className={classes.leftFacts}>
              <LargeFact {...twoYearsLargeFact} />
              <ListFacts {...twoYearsAfterGrad} />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.rightFacts}>
              <LargeFact {...sixYearsLargeFact} />
              <ListFacts {...sixYearsAfterGrad} />
            </div>
          </Grid>
        </Grid>
      </InformationCard>
    )
  }
}

export default withStyles(styles)(Earnings)
