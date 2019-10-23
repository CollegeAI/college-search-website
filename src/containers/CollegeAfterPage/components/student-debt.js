// @flow

import React from "react"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"

import { withStyles } from "@material-ui/core/styles"

// Import Sections
import InformationCard from "../../../components/InformationCard"
import GradeLabel from "../../../components/GradeLabel"
import LargeFact from "../../../components/LargeFact"
import ListFacts from "../../../components/ListFacts"
import LoanOptions from "../../../components/LoanOptions"
import { formatNumber } from "../../../utils"

type Props = {
  classes: Object,
  onExternalLinkClick: Function
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

export class StudentDebt extends React.PureComponent<Props> {
  render() {
    const { classes, college, onExternalLinkClick } = this.props
    const { aid } = college
    const cardHeader = "Student Debt"

    const avgloanLargeFact = {
      label: "Average Loan Amount",
      primary: aid.loanPrincipal ? `$${formatNumber(aid.loanPrincipal)}` : "--",
      unit: " / year",
      secondary: "National $6,768"
    }

    const defaultLoanRateLargeFact = {
      label: "Loan Default Rate",
      primary: "--",
      secondary: "National 11%"
    }

    return (
      <InformationCard header={cardHeader}>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <div className={classes.leftFacts}>
              <LargeFact {...avgloanLargeFact} />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.rightFacts}>
              <LargeFact {...defaultLoanRateLargeFact} />
            </div>
          </Grid>
          <Grid item xs={12}>
            {/* <LoanOptions onExternalLinkClick={onExternalLinkClick} /> */}
          </Grid>
        </Grid>
      </InformationCard>
    )
  }
}

export default withStyles(styles)(StudentDebt)
