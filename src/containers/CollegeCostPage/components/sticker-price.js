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
import ListFacts from '../../../components/ListFacts'
import LargeFact from '../../../components/LargeFact'
import { formatNumber, decimalToPercentage } from '../../../utils'

type Props = {
  classes: Object,
  college: Object
}

type State = {
  expanded: boolean
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
  leftFacts: {
    padding: '0px 15px 40px 0px'
  },
  rightFacts: {
    padding: '0px 30px 40px 15px'
  }
})

export class FinancialAid extends React.PureComponent<Props> {
  render() {
    const { classes, college } = this.props
    const { cost } = college
    const inStateTuition = {
      label: 'In-State Tuition',
      unit: ' / year',
      primary: `$${formatNumber(cost.tuition.inState)}`
    }

    const outOfStateTuition = {
      label: 'Out-of-State Tuition',
      unit: ' / year',
      primary: `$${formatNumber(cost.tuition.outOfState)}`
    }

    const costsFacts = [
      {
        label: 'Average Housing Costs',
        value: '-- / year'
      },
      {
        label: 'Average Meal Plan Cost',
        value: '-- / year'
      },
      {
        label: 'Books & Supplies',
        value: '-- / year'
      }
    ]

    const planFacts = [
      {
        label: 'Tuition Guarantee Plan',
        value: '--'
      },
      {
        label: 'Tuition Payment Plan',
        value: '--'
      },
      {
        label: 'Prepaid Tuition Plan',
        value: '--'
      }
    ]

    return (
      <Paper className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <Typography
              className={classes.title}
              variant="display1"
              component="p"
            >
              Sticker Price
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.leftFacts}>
              <LargeFact {...inStateTuition} />
              <ListFacts items={costsFacts} />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.rightFacts}>
              <LargeFact {...outOfStateTuition} />
              <ListFacts items={planFacts} />
            </div>
          </Grid>
        </Grid>
      </Paper>
    )
  }
}

export default withStyles(styles)(FinancialAid)
