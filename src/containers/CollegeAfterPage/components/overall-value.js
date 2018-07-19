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
import { getScoreFromRanking } from '../../../utils'

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

export class CampusQuality extends React.PureComponent<Props> {
  render() {
    const { classes, college: { afterCollege, rankings } } = this.props
    const { graduationRate: displayGradRate } = afterCollege
    const { bestValueColleges } = rankings
    const cardHeader = 'Overall Value'

    const graduationRate = {
      label: 'Graduation Rate',
      primary: displayGradRate,
      secondary: 'National 49%'
    }

    const valueGradeLabel = {
      label: 'Value',
      value: getScoreFromRanking(bestValueColleges),
      description:
        'Based on average net price, earnings potential, student and alumni reviews, and additional factors.'
    }

    return (
      <InformationCard header={cardHeader}>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <div className={classes.leftFacts}>
              <GradeLabel {...valueGradeLabel} />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.leftFacts}>
              <LargeFact {...graduationRate} />
            </div>
          </Grid>
        </Grid>
      </InformationCard>
    )
  }
}

export default withStyles(styles)(CampusQuality)
