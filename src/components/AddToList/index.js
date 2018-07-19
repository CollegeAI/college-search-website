// @flow

import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import classnames from 'classnames'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

import StarIcon from '@material-ui/icons/Star'
import StarHalfIcon from '@material-ui/icons/StarHalf'
import StarBorderIcon from '@material-ui/icons/StarBorder'

import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'

import blue from '@material-ui/core/colors/blue'

// Import Other Components
import Rating from '../Rating'

type Props = {
  classes?: Object,
  onClick: Function,
  rootStyle?: Object,
  iconStyle?: Object,
  textStyle?: Object,
  isAdded?: Boolean
}

const styles = theme => ({
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
    color: blue[500]
  },
  favoriteTextAdded: {
    color: '#fff'
  },
  favorite: {
    textAlign: 'center',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    width: '100%',
    height: '100%',
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

export class AddToList extends React.PureComponent<Props> {
  render() {
    const {
      classes = {},
      onClick,
      rootStyle = {},
      iconStyle = {},
      textStyle = {},
      isAdded = false
    } = this.props
    return (
      <div
        className={classnames(classes.favorite, {
          [classes.favoriteWrapperAdded]: isAdded
        })}
        style={rootStyle}
        onClick={onClick}
      >
        <FavoriteIcon
          className={classnames(classes.favoriteIcon, {
            [classes.favoriteIconAdded]: isAdded
          })}
          style={iconStyle}
        />
        <Typography
          className={classnames(classes.favoriteText, {
            [classes.favoriteTextAdded]: isAdded
          })}
          variant="subheading"
          style={{ marginLeft: 8, ...textStyle }}
        >
          {isAdded ? 'Added' : 'Add To List'}
        </Typography>
      </div>
    )
  }
}

export default withStyles(styles)(AddToList)
