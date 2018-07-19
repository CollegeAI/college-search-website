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

const styles = theme => ({})

export class PartyScene extends React.PureComponent<Props> {
  render() {
    const { classes, college } = this.props
    const { rankings } = college
    const cardHeader = 'Party Scene'

    const gradeLevel = {
      label: 'Party Scene',
      value: getScoreFromRanking(rankings.topPartySchools),
      description:
        'Based on access to bars and student reviews on the party scene.'
    }

    return (
      <InformationCard header={cardHeader}>
        <Grid container>
          <Grid item xs={12}>
            <GradeLabel {...gradeLevel} />
          </Grid>
        </Grid>
      </InformationCard>
    )
  }
}

export default withStyles(styles)(PartyScene)
