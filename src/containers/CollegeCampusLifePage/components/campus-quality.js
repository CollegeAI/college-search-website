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

export class CampusQuality extends React.PureComponent<Props> {
  render() {
    const { classes, college } = this.props
    const { rankings } = college
    const cardHeader = 'Campus Quality'

    const campusQualityGradeLabel = {
      label: 'Campus Quality',
      value: getScoreFromRanking(rankings.bestCollegeCampuses),
      description:
        'Based on quality of housing, food services, student reviews, and additional factors.'
    }

    const studentLifeGradeLabel = {
      label: 'Student Life',
      value: getScoreFromRanking(rankings.bestStudentLife),
      description:
        'Based on campus diversity, social scene, student reviews, and additional factors.'
    }

    return (
      <InformationCard header={cardHeader}>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <div className={classes.leftFacts}>
              <GradeLabel {...campusQualityGradeLabel} />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.leftFacts}>
              <GradeLabel {...studentLifeGradeLabel} />
            </div>
          </Grid>
        </Grid>
      </InformationCard>
    )
  }
}

export default withStyles(styles)(CampusQuality)
