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
import ListFacts from '../../../components/ListFacts'
import {
  formatNumber,
  decimalToPercentage,
  getScoreFromRanking
} from '../../../utils'

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

export class Housing extends React.PureComponent<Props> {
  render() {
    const { classes, college } = this.props
    const { rankings } = college
    const cardHeader = 'Housing'

    const dormGradeLevel = {
      label: 'Dorms',
      value: -1,
      description:
        'Based on housing cost, capacity, student reviews and additional factors.'
    }

    const housingList = [
      {
        label: 'On-Campus Housing Available',
        value: '--'
      },
      {
        label: 'Freshmen Required to Live on Campus',
        value: '--'
      },
      {
        label: 'Freshmen Live On-Campus',
        value: '--'
      },
      {
        label: 'Undergrads in College Housing',
        value: '--'
      },
      {
        label: 'Average Housing Costs',
        value: '--'
      }
    ]

    return (
      <InformationCard header={cardHeader}>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <div className={classes.leftFacts}>
              <GradeLabel {...dormGradeLevel} />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.rightFacts}>
              <ListFacts items={housingList} />
            </div>
          </Grid>
        </Grid>
      </InformationCard>
    )
  }
}

export default withStyles(styles)(Housing)
