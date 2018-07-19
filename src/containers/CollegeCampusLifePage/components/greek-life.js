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
import LargeFact from '../../../components/LargeFact'

type Props = {
  classes: Object
}

const styles = theme => ({
  leftFacts: {
    paddingRight: 15
  },
  rightFacts: {
    paddingLeft: 15
  }
})

export class GreekLife extends React.PureComponent<Props> {
  render() {
    const { classes, college } = this.props
    const { student: { fraternities, sororities } } = college
    const cardHeader = 'Greek Life'

    const menInFraternities = {
      label: 'Men in Fraternities',
      primary: fraternities.percentParticipation
        ? `${fraternities.percentParticipation}%`
        : '--'
    }

    const womenInSororities = {
      label: 'Women in Sororities',
      primary: fraternities.percentParticipation
        ? `${fraternities.percentParticipation}%`
        : '--'
    }

    return (
      <InformationCard header={cardHeader}>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <div className={classes.leftFacts}>
              <LargeFact {...menInFraternities} />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.rightFacts}>
              <LargeFact {...womenInSororities} />
            </div>
          </Grid>
        </Grid>
      </InformationCard>
    )
  }
}

export default withStyles(styles)(GreekLife)
