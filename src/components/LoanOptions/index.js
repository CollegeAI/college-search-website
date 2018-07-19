// @flow

import React from 'react'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import classnames from 'classnames'

// Material ui colors
import green from '@material-ui/core/colors/green'
import blue from '@material-ui/core/colors/blue'

import { withStyles } from '@material-ui/core/styles'

// Import Sections
type Props = {
  classes: Object,
  onExternalLinkClick: Function
}

const styles = theme => ({
  loanOptionItem: {
    display: 'inline-flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    textAlign: 'left',
    padding: '10px 0px'
  },
  loanOptionItemBorder: {
    borderTop: '1px solid #dddddd'
  },
  loanOptionName: {
    textAlign: 'left',
    width: 160
  },
  loanOptionReasons: {
    margin: 0
  }
})

export class LoanOptions extends React.PureComponent<Props> {
  render() {
    const { classes, onExternalLinkClick } = this.props

    const loanOption = [
      {
        name: 'Common Bond',
        reasons: [
          'Simple, straightforward student loans with an easy application',
          'Flexible repayment options, and strong borrower protections'
        ],
        link:
          'https://payforcollege.commonbond.co/?utm_source=collegesearchwebsite'
      },
      {
        name: 'College Ave Student Loans',
        reasons: [
          'Apply online in just 3 minutes',
          'No origination, application and processing fees, no fees for early repayment'
        ],
        link:
          'https://www.collegeavestudentloans.com/application/?utm_source=collegesearchwebsite'
      }
    ]

    return (
      <div className={classes.studentLoadOptions}>
        <div className={classes.studentLoadOptionsTitle}>
          <Typography
            variant="title"
            component="p"
            style={{ textAlign: 'left' }}
          >
            Student Loan Options from Lenders
          </Typography>
        </div>

        <div className={classes.loanOptionContainer}>
          {loanOption.map(({ imgSrc, name, reasons, link }, ind) => (
            <Grid
              container
              key={ind}
              className={classnames(classes.loanOptionItem, {
                [classes.loanOptionItemBorder]: ind !== 0
              })}
            >
              <Grid item xs={2}>
                <Typography
                  variant="subheading"
                  className={classes.loanOptionName}
                >
                  {name}
                </Typography>
              </Grid>
              <Grid item xs={7}>
                <ul key={ind} className={classes.loanOptionReasons}>
                  {reasons.map((r, rInd) => (
                    <li key={rInd} style={{ color: '#464646', fontSize: 12 }}>
                      {r}
                    </li>
                  ))}
                </ul>
              </Grid>
              <Grid item xs={2}>
                <Button variant="raised" onClick={onExternalLinkClick(link)}>
                  Learn More
                </Button>
              </Grid>
            </Grid>
          ))}
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(LoanOptions)
