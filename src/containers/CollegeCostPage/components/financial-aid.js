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
  classes: Object
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
  acceptanceRate: {
    textAlign: 'left'
  },
  acceptanceRateValue: {
    fontSize: 48,
    marginBottom: 32
  },
  leftFactsTop: {
    padding: '0px 15px 8px 0px'
  },
  rightFactsTop: {
    padding: '0px 30px 8px 15px'
  },
  leftFacts: {
    padding: '0px 15px 40px 0px'
  },
  rightFacts: {
    padding: '0px 30px 40px 15px'
  },
  listTitle: {
    textAlign: 'left',
    width: '100%',
    marginBottom: 4
  }
})

export class FinancialAid extends React.PureComponent<Props> {
  render() {
    const { classes, college } = this.props
    const { aid } = college

    const anyFinancialAid = {
      label: 'Any Financial Aid',
      primary: decimalToPercentage(aid.studentsWithAnyLoan)
    }
    const aidFactsTitle = 'Students Receiving Aid'
    const aidFacts = [
      {
        label: 'Federal Grant Aid',
        value: decimalToPercentage(aid.federalLoanRate)
      },
      {
        label: 'State Grant Aid',
        value: '--'
      },
      {
        label: 'Institution Grant Aid',
        value: '--'
      },
      {
        label: 'Pell Grant',
        value: '--'
      }
    ]

    const avgTotalAid = {
      label: 'Average Total Aid Awarded',
      primary: '--',
      unit: ' / year',
      secondary: 'National $7,535'
    }

    const avgAidTitle = 'Average Aid Awarded'

    const avgAidAwarded = [
      {
        label: 'Federal Grant Aid',
        value: '--'
      },
      {
        label: 'State Grant Aid',
        value: '--'
      },
      {
        label: 'Institution Grant Aid',
        value: '--'
      },
      {
        label: 'Pell Grant Amount',
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
              Financial Aid
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.leftFactsTop}>
              <LargeFact {...anyFinancialAid} />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.rightFactsTop}>
              <LargeFact {...avgTotalAid} />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.leftFacts}>
              <Typography variant="subheading" className={classes.listTitle}>
                {aidFactsTitle}
              </Typography>
              <ListFacts items={aidFacts} />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.rightFacts}>
              <Typography variant="subheading" className={classes.listTitle}>
                {avgAidTitle}
              </Typography>
              <ListFacts items={avgAidAwarded} />
            </div>
          </Grid>
        </Grid>
      </Paper>
    )
  }
}

export default withStyles(styles)(FinancialAid)
