// @flow

import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import classnames from 'classnames'

// Material ui colors
import grey from '@material-ui/core/colors/grey'
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
  leftFacts: {
    padding: '0px 15px 40px 0px'
  },
  rightFacts: {
    padding: '0px 30px 40px 15px'
  },
  netPriceContainer: {
    textAlign: 'left'
  },
  netPriceDescription: {
    color: grey[500],
    fontSize: '0.75rem'
  }
})

export class FinancialAid extends React.PureComponent<Props> {
  onNetPriceClick = () => {
    const { college: { links } } = this.props
    const win = window.open(links.fasite, '_blank')
    win.focus()
  }

  render() {
    const { classes, college } = this.props

    const netPriceRange = [
      {
        label: '<$30k',
        min: 0
      },
      {
        label: '$30-48k',
        min: 30001
      },
      {
        label: '$48-75k',
        min: 48001
      },
      {
        label: '$75-110k',
        min: 75001
      },
      {
        label: '$110k+',
        min: 110000
      }
    ].map(np => ({
      ...np,
      value: `$${formatNumber(
        college.cost.netPriceByIncomeLevel.find(
          npbi => npbi.range.min === np.min
        ).price
      )}`
    }))

    const netPrice = {
      label: 'Net Price',
      primary: `$${formatNumber(college.cost.avgNetPrice)}`,
      unit: ' / year',
      secondary: 'National $15,523'
    }

    const aidFactsTitle = 'Students Receiving Aid'
    const aidFacts = [
      {
        label: 'Net Price Calculator',
        value: college.links.fasite,
        onClick: this.onNetPriceClick
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
              Net Price
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.leftFacts}>
              <LargeFact {...netPrice} />
              <ListFacts items={aidFacts} />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.rightFacts}>
              <div className={classes.netPriceContainer}>
                <Typography
                  variant="title"
                  component="p"
                  className={classes.netPriceTitle}
                >
                  Net Price by Household Income
                </Typography>
              </div>
              <div>
                <ListFacts items={netPriceRange} />
              </div>
              <div className={classes.netPriceContainer}>
                <Typography className={classes.netPriceDescription}>
                  Net price is the average cost after financial aid for students
                  receiving grant or scholarship aid, as reported by the
                  college.
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </Paper>
    )
  }
}

export default withStyles(styles)(FinancialAid)
