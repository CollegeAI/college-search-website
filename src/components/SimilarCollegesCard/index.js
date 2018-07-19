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

import AddIcon from '@material-ui/icons/Add'

import { withStyles } from '@material-ui/core/styles'

// Import Sections
import LetterGrade from '../LetterGrade'
import CollegeItem from '../CollegeItem'
import Rating from '../Rating'

type Props = {
  classes: Object,
  title?: string,
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
    flexDirection: 'column'
  },
  cardContent: {
    padding: '30px 30px 10px',
    display: 'inline-flex',
    flexDirection: 'column'
  },
  title: {
    textAlign: 'left',
    paddingBottom: 16
  },
  collegeName: {
    color: blue[400],
    fontWeight: 500
  },
  collegeContainer: {
    display: 'inline-flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    textAlign: 'left',
    width: '100%',
    opacity: 1
  },
  hiddenColleges: {
    display: 'none',
    opacity: 0
  },
  collegeInfo: {
    display: 'inline-flex',
    alignItems: 'flex-end',
    fontSize: '0.82rem',
    color: '#919191'
  },
  more: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 10,
    marginBottom: 16,
    color: green[500],
    cursor: 'pointer'
  },
  hidden: {
    display: 'none'
  },
  collegesContainer: {
    marginBottom: 16
  }
})

export class SimilarColleges extends React.Component<Props, State> {
  state = { expanded: false }

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded })
  }

  render() {
    const {
      classes,
      pushRoute,
      title,
      college: { name, similarColleges }
    } = this.props

    if (!similarColleges) {
      return null
    }

    const displayTitle = title || `Colleges like ${name}`

    const hideCollegeIndex = this.state.expanded
      ? similarColleges.length
      : Math.min(similarColleges.length, 4)

    return (
      <Paper className={classes.root}>
        <div className={classes.cardContent}>
          <div>
            <Typography
              className={classes.title}
              variant="headline"
              component="h3"
            >
              {displayTitle}
            </Typography>
          </div>
          <Grid container className={classes.collegesContainer}>
            {similarColleges.map((c, ind) => (
              <Grid item xs={12} md={6} key={ind}>
                <CollegeItem
                  {...c}
                  pushRoute={pushRoute}
                  key={ind}
                  hidden={hideCollegeIndex <= ind}
                />
              </Grid>
            ))}
          </Grid>
          <div
            onClick={this.handleExpandClick}
            className={classnames(classes.more, {
              [classes.hidden]: this.state.expanded
            })}
          >
            <AddIcon style={{ fontSize: 16 }} /> More
          </div>
        </div>
      </Paper>
    )
  }
}

export default withStyles(styles)(SimilarColleges)
