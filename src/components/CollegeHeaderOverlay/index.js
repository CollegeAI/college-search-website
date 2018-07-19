// @flow

import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { Helmet } from 'react-helmet'
import classnames from 'classnames'

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'

// Material ui colors
import blue from '@material-ui/core/colors/blue'

import { withStyles } from '@material-ui/core/styles'

// Import Sections
import CenteredContent from '../CenteredContent'
import Rating from '../Rating'

const styles = theme => ({
  root: {
    maxWidth: 984,
    margin: '0px auto'
  },
  headerOverlay: {
    width: '100%',
    borderRadius: 3,
    height: 52,
    padding: '15px 10px',
    marginTop: -26,
    backgroundColor: '#f6f6f6',
    boxSizing: 'border-box',
    textAlign: 'left'
  },
  content: {
    display: 'inline-flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    cursor: 'pointer',
    color: blue[400],
    '&:hover': {
      color: blue[500]
    }
  },
  icon: {},
  description: {
    color: blue[400],
    '&:hover': {
      color: blue[500],
      textDecoration: 'underline'
    }
  }
})

type Props = {
  classes: Object,
  goBackClick: Function
}
export class HeaderOverlayBar extends React.PureComponent<Props> {
  render() {
    const { classes, goBackClick } = this.props
    return (
      <div className={classes.root}>
        <div className={classes.headerOverlay}>
          <div className={classes.content} onClick={goBackClick}>
            <ChevronLeftIcon className={classes.icon} />
            <Typography variant="subheading" className={classes.description}>
              Back to Full Profile
            </Typography>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(HeaderOverlayBar)
