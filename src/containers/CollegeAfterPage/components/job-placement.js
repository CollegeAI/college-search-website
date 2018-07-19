// @flow

import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import { withStyles } from '@material-ui/core/styles'

// Import Sections
import InformationCard from '../../../components/InformationCard'
import GradeLabel from '../../../components/GradeLabel'
import LargeFact from '../../../components/LargeFact'
import ListFacts from '../../../components/ListFacts'

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

export class JobPlacement extends React.PureComponent<Props> {
  render() {
    const { classes } = this.props

    const cardHeader = 'Job Placement'

    const twoYearsLargeFact = {
      label: 'Employed 2 Years After Graduation',
      primary: '--'
    }

    const sixYearsLargeFact = {
      label: 'Employed 6 Years After Graduation',
      primary: '--'
    }

    return (
      <InformationCard header={cardHeader}>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <div className={classes.leftFacts}>
              <LargeFact {...twoYearsLargeFact} />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.rightFacts}>
              <LargeFact {...sixYearsLargeFact} />
            </div>
          </Grid>
        </Grid>
      </InformationCard>
    )
  }
}

export default withStyles(styles)(JobPlacement)
