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
import ListItems from '../../../components/ListItems'

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

export class ClubsAndActivities extends React.PureComponent<Props> {
  render() {
    const { classes } = this.props

    const cardHeader = 'Clubs & Activities'

    const clubsOfferedList = {
      label: 'Clubs Offered',
      items: []
    }

    const musicList = {
      label: 'Music',
      items: []
    }

    return (
      <InformationCard header={cardHeader}>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <div className={classes.leftFacts}>
              <ListItems {...clubsOfferedList} />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.leftFacts}>
              <ListItems {...musicList} />
            </div>
          </Grid>
        </Grid>
      </InformationCard>
    )
  }
}

export default withStyles(styles)(ClubsAndActivities)
