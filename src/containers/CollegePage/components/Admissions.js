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

import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

// Import Sections
import CollegeItem from "../../../components/CollegeItem"
import ListFacts from "../../../components/ListFacts"
import FactFooter from "./FactFooter"

type Props = {
  classes: Object,
  onPushRoute: Function
}

type State = {
  expanded: boolean
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
  },
  admissionFactContainer: {
    display: "inline-flex",
    justifyContent: "space-between",
    width: "100%",
    borderBottom: "1px solid #dddddd",
    padding: "10px 0px"
  },
  admissionFactLabel: {},
  admissionFactValue: {
    fontWeight: 700
  },
  applicationWebsiteContainer: {
    display: "inline-flex",
    justifyContent: "space-between",
    width: "100%",
    borderTop: "1px solid #dddddd",
    padding: "10px 0px",
    textAlign: "left"
  },
  applicationWebsite: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    paddingLeft: 16,
    fontWeight: 700,
    color: blue[400]
  },
  studentApplied: {
    color: "#464646",
    fontWeight: 700
  },
  similarCollegeItem: {
    borderTop: "1px solid #dddddd",
    display: "inline-flex",
    justifyContent: "flex-start",
    alignItems: "center",
    textAlign: "left",
    width: "100%"
  },
  showMoreColleges: {
    padding: "10px 0px",
    borderTop: "1px solid #dddddd",
    borderBottom: "1px solid #dddddd",
    textAlign: "left",
    width: "100%"
  },
  showMoreCollegesButton: {
    display: "inline-flex",
    justifyContent: "flex-start",
    alignItems: "center",
    textAlign: "left",
    color: blue[400],
    cursor: "pointer"
  },
  similarCollegesContainer: {
    height: 159,
    overflowY: "hidden",
    transition: `height ${theme.transitions.duration.shortest}ms`
  },
  similarCollegesContainerExpanded: {
    height: 422
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
    fontWeight: 700,
    cursor: "pointer"
  }
})

export class Admissions extends React.Component<Props, State> {
  state = { expanded: false }

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded })
  }

  onSimilarCollegeClick = () => {
    const { pushRoute, college } = this.props
    pushRoute(`/colleges/${college.id}`)
  }

  onImproveTestPrepClick = () => {
    const testPrepUrl = "https://sat.magoosh.com/"
    const win = window.open(testPrepUrl, "_blank")
    win.focus()
  }

  render() {
    const { classes, college, onPushRoute, pushRoute } = this.props

    const footerLabel = "Read More About Admissions"
    const name = college.name
    const acceptanceRate = `${(college.admissions.acceptanceRate * 100).toFixed(
      1
    )}%`
    const applicationDeadline = "--"
    const applicationWebsite = college.links.applicationSite

    const { sat, act } = college.admissions

    const addmissionsFacts = [
      {
        label: `SAT Range`,
        value: `${sat.math.percentile25 + sat.reading.percentile25} - ${sat.math
          .percentile75 + sat.reading.percentile75}`
      },
      {
        label: `ACT Range`,
        value: `${act.cumulative.percentile25} - ${act.cumulative.percentile75}`
      },
      {
        label: `Application Fee`,
        value: "--"
      },
      {
        label: `SAT/ACT`,
        value: "--"
      },
      {
        label: `High School GPA`,
        value: college.admissions.hsGPARequirement.replace(/^\w/, c =>
          c.toUpperCase()
        )
      },
      {
        label: `Early Decision/Early Action`,
        value: "--"
      }
    ]

    const similarColleges = college.similarColleges || []

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
                Admissions
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className={classes.leftFacts}>
                <div className={classes.acceptanceRate}>
                  <Typography variant="title" component="p">
                    Acceptance Rate
                  </Typography>
                  <Typography
                    className={classes.acceptanceRateValue}
                    variant="display1"
                    component="p"
                  >
                    {acceptanceRate}
                  </Typography>
                </div>
                <div className={classes.admissionFacts}>
                  <ListFacts items={addmissionsFacts} />
                  <div className={classes.admissionFactContainer}>
                    <div className={classes.admissionFactLabel}>
                      {/* <a
                        className={classes.improveTestPrep}
                        onClick={this.onImproveTestPrepClick}
                      >
                        Improve Your SAT/ACT Scores with Test Prep
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className={classes.rightFacts}>
                <div className={classes.acceptanceRate}>
                  <Typography variant="title" component="p">
                    Application Deadline
                  </Typography>
                  <Typography
                    className={classes.acceptanceRateValue}
                    variant="display1"
                    component="p"
                  >
                    {applicationDeadline}
                  </Typography>
                </div>
                <div className={classes.admissionFacts}>
                  <div className={classes.applicationWebsiteContainer}>
                    <div className={classes.admissionFactLabel}>
                      Application Website
                    </div>
                    <div className={classes.applicationWebsite}>
                      {applicationWebsite}
                    </div>
                  </div>
                  {similarColleges.length > 0 && [
                    <div className={classes.applicationWebsiteContainer}>
                      <div className={classes.studentApplied}>
                        Students also applied to ...
                      </div>
                    </div>,
                    <div
                      className={classnames(classes.similarCollegesContainer, {
                        [classes.similarCollegesContainerExpanded]: this.state
                          .expanded
                      })}
                    >
                      {similarColleges.map(({ name, value, id }, ind) => (
                        <div key={ind} className={classes.similarCollegeItem}>
                          <CollegeItem
                            name={name}
                            value={value}
                            pushRoute={pushRoute}
                            id={id}
                          />
                        </div>
                      ))}
                    </div>,
                    <div
                      className={classes.showMoreColleges}
                      onClick={this.handleExpandClick}
                    >
                      <div className={classes.showMoreCollegesButton}>
                        {this.state.expanded ? "Hide" : "More"}
                        <ExpandMoreIcon
                          className={classnames(classes.expand, {
                            [classes.expandOpen]: this.state.expanded
                          })}
                          aria-expanded={this.state.expanded}
                          aria-label="Show more"
                        />
                      </div>
                    </div>
                  ]}
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
        <FactFooter label={footerLabel} onClickCTA={onPushRoute} />
      </Paper>
    )
  }
}

export default withStyles(styles)(Admissions)
