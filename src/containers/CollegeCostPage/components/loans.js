// @flow

import React from "react"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import classnames from "classnames"

// Material ui colors
import green from "@material-ui/core/colors/green"
import blue from "@material-ui/core/colors/blue"

import { withStyles } from "@material-ui/core/styles"

// Import Sections
import ListFacts from "../../../components/ListFacts"
import LargeFact from "../../../components/LargeFact"
import LoanOptions from "../../../components/LoanOptions"
import { formatNumber, decimalToPercentage } from "../../../utils"

type Props = {
  classes: Object,
  college: Object
}

const styles = theme => ({
  root: {
    width: "100%",
    marginBottom: 32,
    display: "inline-flex",
    flexDirection: "column",
    padding: "30px 30px 10px",
    boxSizing: "border-box"
  },
  title: {
    textAlign: "left",
    color: blue[500],
    paddingBottom: 30
  },
  acceptanceRate: {
    textAlign: "left"
  },
  acceptanceRateValue: {
    fontSize: 48,
    marginBottom: 32
  },
  leftFacts: {
    padding: "0px 15px 40px 0px"
  },
  rightFacts: {
    padding: "0px 30px 40px 15px"
  }
})

export class Loans extends React.PureComponent<Props> {
  onExternalLinkClick = (link: string) => {
    return () => {
      console.log(`Go To External link: ${link}`)
    }
  }

  render() {
    const { classes, college } = this.props
    const { aid } = college
    const studentsTakingOutLoans = {
      label: "Students Taking Out Loans",
      primary: decimalToPercentage(aid.studentsWithAnyLoan)
    }

    const loanAmount = {
      label: "Average Loan Amount",
      primary: `$${formatNumber(aid.loanPrincipal)}`,
      unit: " / year",
      secondary: "National $6,768"
    }

    return (
      <Paper className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <Typography
              className={classes.title}
              variant="display1"
              component="p"
            >
              Loans
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.leftFacts}>
              <LargeFact {...studentsTakingOutLoans} />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.rightFacts}>
              <LargeFact {...loanAmount} />
            </div>
          </Grid>
          <Grid item xs={12}>
            {/* <LoanOptions onExternalLinkClick={this.onExternalLinkClick} /> */}
          </Grid>
        </Grid>
      </Paper>
    )
  }
}

export default withStyles(styles)(Loans)
