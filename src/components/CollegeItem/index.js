// @flow

import * as React from 'react'
import Typography from '@material-ui/core/Typography'
import classnames from 'classnames'

// Material ui colors
import blue from '@material-ui/core/colors/blue'

import { withStyles } from '@material-ui/core/styles'

// Import Sections
import LetterGrade from '../LetterGrade'
import Rating from '../Rating'

const styles = theme => ({
  collegeName: {
    fontWeight: 500
  },
  nameRef: {
    color: blue[400],
    cursor: 'pointer'
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
  hidden: {
    display: 'none'
  },
  dot: {
    padding: '0px 2px'
  }
})

type SecondaryProps = {
  classes: Object,
  type?: string,
  location?: string,
  rating?: number,
  reviews?: string
}

export class Secondary extends React.PureComponent<SecondaryProps> {
  render() {
    const { classes, type, location, rating, reviews } = this.props
    const fields = {
      type,
      location,
      rating,
      reviews
    }
    const displayFieldNames = Object.keys(fields).filter(f =>
      Boolean(fields[f])
    )

    const elements: Array<React.Node> = displayFieldNames.map(
      (fieldName: string, ind: number) => {
        const El: React.Node =
          fieldName === 'rating' ? (
            <Rating key={ind} rating={rating} />
          ) : (
            <span key={ind}>{fields[fieldName]}</span>
          )

        if (ind === displayFieldNames.length - 1) {
          return [El]
        } else {
          return [
            El,
            <span key={displayFieldNames.length + ind} className={classes.dot}>
              &middot;
            </span>
          ]
        }
      }
    )

    return elements
  }
}

type Props = {
  classes: Object,
  name: string,
  pushRoute?: Function,
  value?: number,
  type?: string,
  location?: string,
  rating?: number,
  reviews?: string,
  hidden?: boolean
}
export class CollegeItem extends React.PureComponent<Props> {
  onClick = () => {
    const { pushRoute, id } = this.props
    if (pushRoute && id) {
      pushRoute(`/colleges/${id}`)
    }
  }
  render() {
    const {
      classes,
      name,
      pushRoute,
      value,
      type,
      location,
      rating,
      reviews,
      hidden = false
    } = this.props
    const secondary = {
      type,
      location,
      rating,
      reviews
    }
    return (
      <div
        className={classnames(classes.collegeContainer, {
          [classes.hiddenColleges]: hidden
        })}
      >
        <div>
          <LetterGrade val={value} size="mini" />
        </div>
        <div>
          <Typography
            variant="subheading"
            onClick={this.onClick}
            className={classnames(classes.collegeName, {
              [classes.nameRef]: Boolean(pushRoute)
            })}
          >
            {name}
          </Typography>
          {Object.keys(secondary).some(k => Boolean(secondary[k])) ? (
            <div className={classes.collegeInfo}>
              <Secondary {...secondary} classes={classes} />
            </div>
          ) : null}
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(CollegeItem)
