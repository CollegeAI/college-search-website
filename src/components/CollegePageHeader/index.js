// @flow

import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { Helmet } from 'react-helmet'
import classnames from 'classnames'

import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'

// Material ui colors
import grey from '@material-ui/core/colors/grey'
import blue from '@material-ui/core/colors/blue'
import green from '@material-ui/core/colors/green'
import lightGreen from '@material-ui/core/colors/lightGreen'

import { withStyles } from '@material-ui/core/styles'

// Import Sections
import CenteredContent from '../CenteredContent'
import Rating from '../Rating'

const styles = theme => ({
  header: {
    height: 400,
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-end',
    color: '#fff',
    maxWidth: 1400,
    padding: '0 20px 65px',
    margin: '0px auto'
  },
  headerContent: {
    display: 'inline-flex'
  },
  profileHeader: {
    maxWidth: 985,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'baseline',
    flexWrap: 'wrap',
    width: '100%'
  },
  profileHeaderButton: {
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    height: '100%'
  },
  schoolName: {
    textAlign: 'left',
    color: '#fff'
  },
  favoriteWrapperAdded: {
    backgroundColor: blue[500]
  },
  favoriteIcon: {
    color: blue[500]
  },
  favoriteIconAdded: {
    color: '#fff'
  },
  favoriteText: {
    color: blue[500],
    fontWeight: 500
  },
  favoriteTextAdded: {
    color: '#fff'
  },
  favorite: {
    textAlign: 'center',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all .1s ease-in',
    '&:hover': {
      backgroundColor: blue[500]
    },
    '&:hover $favoriteIcon': {
      color: '#fff'
    },
    '&:hover $favoriteText': {
      color: '#fff'
    }
  }
})

type Props = {
  classes: Object,
  isAdded: boolean,
  college: Object,
  onAddCollegeToList: Function,
  onRemoveCollegeFromList: Function
}

export class CollegePageHeader extends React.PureComponent<Props> {
  onToggleAddToList = () => {
    const {
      isAdded,
      college,
      onAddCollegeToList,
      onRemoveCollegeFromList
    } = this.props
    if (isAdded) {
      onRemoveCollegeFromList({ college: { id: college.id } })
    } else {
      onAddCollegeToList({ college: { id: college.id } })
    }
  }
  render() {
    const { classes, isAdded = false, college } = this.props

    const collegeRating = college.reviews && college.reviews.rating

    return (
      <div className={classes.header}>
        <div style={{ width: '100%' }}>
          <CenteredContent>
            <Grid container>
              <Grid item xs={9}>
                <div className={classes.profileHeader}>
                  <Typography variant="display3" className={classes.schoolName}>
                    {college.name}
                  </Typography>
                  {collegeRating && (
                    <div>
                      <span>
                        <Rating rating={collegeRating} />
                      </span>
                      {'  '}
                      <span>{collegeRating} reviews</span>
                    </div>
                  )}
                  <div className={classes.tagline}>
                    <span>
                      {college.address.city}, {college.address.state.abbr}
                    </span>
                    <span className={classes.dot}> &middot; </span>
                    <span>{college.type.year}</span>
                  </div>
                </div>
              </Grid>
              <Grid item xs={3} style={{ textAlign: 'right' }}>
                <div className={classes.profileHeaderButton}>
                  <Button
                    variant="raised"
                    onClick={this.onToggleAddToList}
                    className={classnames(classes.favorite, {
                      [classes.favoriteWrapperAdded]: isAdded
                    })}
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
                      {isAdded ? 'Added' : 'Add To List'}
                    </Typography>
                  </Button>
                </div>
              </Grid>
            </Grid>
          </CenteredContent>
        </div>
        <div>
          <div
            style={{
              backgroundImage: college.images.campus,
              backgroundColor: '#114da5',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              height: '100%',
              left: 0,
              position: 'absolute',
              top: 0,
              width: '100%',
              zIndex: -20
            }}
            className={classes.campusPhotoBanner}
          />
          <div
            style={{
              position: 'absolute',
              backgroundColor: 'rgba(0,0,0,0.4)',
              backgroundSize: 'cover',
              height: '100%',
              left: 0,
              position: 'absolute',
              top: 0,
              width: '100%',
              zIndex: -10
            }}
            className={classes.campusPhotoBanner}
          />
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(CollegePageHeader)
