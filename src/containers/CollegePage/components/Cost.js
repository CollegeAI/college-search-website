// @flow

import React from "react"
import Button from "@material-ui/core/Button"
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
import FactFooter from "./FactFooter"

import LoanOptions from "../../../components/LoanOptions"
import { formatNumber } from "../../../utils"

type Props = {
  classes: Object,
  onPushRoute: Function
}

const styles = theme => ({
  root: {
    width: "100%",
    marginBottom: 32,
    display: "inline-flex",
    flexDirection: "column"
  },
  cardContent: {
    padding: "30px 30px 10px"
  },
  title: {
    textAlign: "left",
    color: blue[500],
    paddingBottom: 30
  },
  leftFacts: {
    padding: "0px 15px 40px 0px"
  },
  rightFacts: {
    padding: "0px 30px 40px 15px"
  },
  admissionFactLabel: {},
  admissionFactValue: {
    fontWeight: 700
  },
  netPriceContainer: {
    width: "100%",
    padding: "10px 0px",
    textAlign: "left"
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shorter
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  improveTestPrep: {
    color: blue[400],
    fontWeight: 700
  },
  netPriceDescription: {
    textAlign: "left",
    borderTop: "1px solid #dddddd",
    marginTop: 10,
    paddingTop: 10,
    color: "#464646",
    fontSize: "0.75rem"
  }
})

export class Cost extends React.PureComponent<Props> {
  onExternalLinkClick = (link: string) => {
    return () => {
      const win = window.open(link, "_blank")
      win.focus()
    }
  }

  render() {
    const { classes, college, onPushRoute } = this.props
    const name = college.name

    const footerLabel = "Tuition & Financial Aid Breakdowns"
    const netPrice = `$${formatNumber(college.cost.avgNetPrice)}`
    const netPriceRange = [
      {
        label: "<$30k",
        min: 0
      },
      {
        label: "$30-48k",
        min: 30001
      },
      {
        label: "$48-75k",
        min: 48001
      },
      {
        label: "$75-110k",
        min: 75001
      },
      {
        label: "$110k+",
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

    const largeFact = {
      label: "Net Price",
      primary: netPrice,
      unit: "/ year"
    }

    return (
      <Paper className={classes.root}>
        <div className={classes.cardContent}>
          <Grid container>
            <Grid item xs={12}>
              <Typography
                className={classes.title}
                variant="display1"
                component="p"
              >
                Cost
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className={classes.leftFacts}>
                <LargeFact {...largeFact} />
                <div>
                  <Typography className={classes.netPriceDescription}>
                    Average cost after financial aid for students receiving
                    grant or scholarship aid, as reported by the college.
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className={classes.rightFacts}>
                <div className={classes.admissionFacts}>
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
                </div>
              </div>
            </Grid>
            <Grid item xs={12}>
              {/* <LoanOptions onExternalLinkClick={this.onExternalLinkClick} /> */}
            </Grid>
          </Grid>
        </div>
        <FactFooter label={footerLabel} onClickCTA={onPushRoute} />
      </Paper>
    )
  }
}

export default withStyles(styles)(Cost)
