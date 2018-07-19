// @flow

import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import classnames from 'classnames'

// Material ui colors
import green from '@material-ui/core/colors/green'
import blue from '@material-ui/core/colors/blue'
import grey from '@material-ui/core/colors/grey'

import { withStyles } from '@material-ui/core/styles'

// Import Sections
import Rating from '../Rating'
import LetterGrade from '../LetterGrade'
import BarGraph from '../BarGraph'
import LargeFact from '../LargeFact'
import ListFacts from '../ListFacts'
import styles from './styles'

type Props = {
  classes: Object,
  review: {
    raing: number,
    text: string,
    date: string,
    tags?: Array<{ name: string, id: string }>,
    role:
      | 'Alum'
      | 'Freshmen'
      | 'Sophomore'
      | 'Junior'
      | 'Senior'
      | 'Graduate Student'
      | 'CSW User'
      | 'College Freshmen'
      | 'College Sophomore'
      | 'College Junior'
      | 'College Senior'
  }
}

type State = {
  expanded: Boolean
}

// The number of characters in a review text before the "showmore"
const CHARACTER_COUNT_HIDE = 160

export class CollegeReview extends React.Component<Props, State> {
  state = {
    expanded: false
  }

  handleReviewExpandClick = () => {
    this.setState({
      expanded: !this.state.expanded
    })
  }

  render() {
    const { classes, review } = this.props

    const showLayover =
      this.state.expanded || review.text.length < CHARACTER_COUNT_HIDE

    return (
      <div>
        <div
          className={classnames(classes.reviewItem, {
            [classes.reviewItemExpanded]: showLayover
          })}
        >
          <Rating rating={review.rating} style={{ color: green[500] }} />
          <Typography className={classes.reviewText}>{review.text}</Typography>
          <div
            className={classnames(classes.moreReview, {
              [classes.moreReviewExpanded]: showLayover
            })}
            onClick={this.handleReviewExpandClick}
          >
            More
          </div>
        </div>
        <div className={classes.reviewCredentials}>
          <span>{review.role}</span>
          <span className={classes.dot}>&middot;</span>
          <span>{review.date}</span>
          <span className={classes.dot}>&middot;</span>
          {(review.tags || []).map((t, ind) => {
            if (ind === review.tags.length - 1) {
              return [<span key={ind}>{t.name}</span>]
            } else {
              return [
                <span key={ind}>{t.name}</span>,
                <span key={review.tags.length + ind} className={classes.dot}>
                  &middot;
                </span>
              ]
            }
          })}
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(CollegeReview)
