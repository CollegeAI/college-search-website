// @flow

import React from "react"
import { withStyles } from "@material-ui/core/styles"
import classnames from "classnames"
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper"
import Divider from "@material-ui/core/Divider"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"

import StarIcon from "@material-ui/icons/Star"
import StarHalfIcon from "@material-ui/icons/StarHalf"
import StarBorderIcon from "@material-ui/icons/StarBorder"

import FavoriteIcon from "@material-ui/icons/Favorite"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import { formatNumber } from "../../utils"

// Import Other Components
import Rating from "../Rating"
import LetterGrade from "../LetterGrade"
import styles from "./styles"

type Props = {
  classes?: Object,
  college: Object,
  isAdded: boolean,
  onToggleAddCollege: Function
}

export class CollegeCard extends React.PureComponent<Props> {
  goToCollegePage = () => {
    const { goToCollegePage, college } = this.props
    goToCollegePage(college.collegeId)
  }

  onToggleAddCollege = () => {
    const { onToggleAddCollege, college, isAdded } = this.props
    onToggleAddCollege(college.collegeId)
  }

  render() {
    const {
      classes = {},
      college,
      reviews = {},
      sortOrder,
      isAdded = false
    } = this.props
    const { value, rating, numberReviews } = reviews
    let order =
      college.rankings[sortOrder.collegeKey] &&
      college.rankings[sortOrder.collegeKey].value
    let description
    if (sortOrder.collegeKey === "bestColleges") {
      description = order ? `#${order} Best Colleges in America` : ""
    } else {
      description = order ? `#${order} ${sortOrder.name} in America` : ""
    }
    const acceptanceRate = `${(college.admissions.acceptanceRate * 100).toFixed(
      1
    )}%`
    const netPrice = college.cost.avgNetPrice
      ? `$${formatNumber(college.cost.avgNetPrice)}`
      : ""
    const { math: satMath, reading: satReading } = college.admissions.sat
    const satRange = `${satMath.percentile25 +
      satReading.percentile25} - ${satMath.percentile75 +
      satReading.percentile75}`

    return (
      <Paper>
        <div
          className={classes.cardContentContainer}
          onClick={this.goToCollegePage}
        >
          {description && (
            <Typography className={classes.description}>
              {description}
            </Typography>
          )}
          <Typography variant="title" className={classes.collegeName}>
            {college.name}
          </Typography>
          <div className={classes.tagline}>
            <span>{college.type.year}</span>
            <span className={classes.dot}> &middot; </span>
            <span>
              {college.address.city}, {college.address.state.abbr}
            </span>
            {rating && [
              <span className={classes.dot}> &middot; </span>,
              <span>
                <Rating rating={rating} />
              </span>
            ]}
            {numberReviews && <span>{numberReviews}</span>}
          </div>
          <div className={classes.quickStats}>
            {value &&
              ((
                <span style={{ display: "inline-flex", alignItems: "center" }}>
                  <LetterGrade
                    val={value}
                    style={{
                      width: 18,
                      height: 18,
                      margin: 2
                    }}
                  />
                  Overall Grade
                </span>
              ),
              (
                <span key={1} className={classes.dot}>
                  &middot;
                </span>
              ))}
            {acceptanceRate && [
              <span key={2}>Acceptance Rate {acceptanceRate}</span>
            ]}
            {netPrice && [
              <span key={1} className={classes.dot}>
                &middot;
              </span>,
              <span key={2}>Net Price {netPrice}</span>
            ]}
            {satRange && [
              <span key={1} className={classes.dot}>
                &middot;
              </span>,
              <span key={2}>SAT Range {satRange}</span>
            ]}
          </div>
        </div>
        <div className={classes.bottomActionsContainer}>
          <Grid container>
            <Grid item xs={9}>
              <div className={classes.getIn}>
                <a
                  className={classes.willYouGetIn}
                  href={`https://collegeai.com/chanceme/${college.collegeId}`}
                >
                  Will you get in?
                </a>
              </div>
            </Grid>
            <Grid item xs={3}>
              <div
                className={classnames(classes.favorite, {
                  [classes.favoriteWrapperAdded]: isAdded
                })}
                onClick={this.onToggleAddCollege}
              >
                <FavoriteIcon
                  className={classnames(classes.favoriteIcon, {
                    [classes.favoriteIconAdded]: isAdded
                  })}
                />
                <Typography
                  className={classnames(classes.favoriteText, {
                    [classes.favoriteTextAdded]: isAdded
                  })}
                  variant="subheading"
                  style={{ marginLeft: 8 }}
                >
                  {isAdded ? "Added" : "Add To List"}
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </Paper>
    )
  }
}

export default withStyles(styles)(CollegeCard)
