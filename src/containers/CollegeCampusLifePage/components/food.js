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

export class Food extends React.PureComponent<Props> {
  render() {
    const { classes, college } = this.props
    const { rankings } = college
    const cardHeader = 'Food'

    const campusFoodGradeLabel = {
      label: 'Campus Food',
      value: getScoreFromRanking(rankings.bestCollegeFood),
      description: 'C+Based on meal plan cost and student reviews on the food.'
    }

    const foodFactsList = {
      items: [
        {
          label: 'Meal Plan Available',
          value: '--'
        },
        {
          label: 'Average Meal Plan Cost',
          value: '--/ year'
        }
      ]
    }

    return (
      <InformationCard header={cardHeader}>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <div className={classes.leftFacts}>
              <GradeLabel {...campusFoodGradeLabel} />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.leftFacts}>
              <ListFacts {...foodFactsList} />
            </div>
          </Grid>
        </Grid>
      </InformationCard>
    )
  }
}

export default withStyles(styles)(Food)
