// @flow

import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { Helmet } from 'react-helmet'
import classnames from 'classnames'

import StarIcon from '@material-ui/icons/Star'

// Material ui colors
import green from '@material-ui/core/colors/green'
import blue from '@material-ui/core/colors/blue'

import { withStyles } from '@material-ui/core/styles'

// Import Sections
import CenteredContent from '../../components/CenteredContent'
import Rating from '../../components/Rating'

const styles = theme => ({
  root: {
    width: '100%'
  },
  headerOverlay: {
    height: 64,
    marginTop: -32,
    backgroundColor: blue[400]
  },
  icon: {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    color: '#eff7ec'
  },
  description: {
    textAlign: 'left',
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    color: '#eff7ec'
  }
})

type Props = {
  classes: Object,
  description: string
}
export class HeaderOverlayBar extends React.PureComponent<Props> {
  render() {
    const { classes, description } = this.props
    return (
      <div className={classes.root}>
        <CenteredContent alignItems="center">
          <Grid container className={classes.headerOverlay}>
            <Grid item xs={1}>
              <StarIcon className={classes.icon} />
            </Grid>
            <Grid item xs={11}>
              <Typography variant="headline" className={classes.description}>
                {description}
              </Typography>
            </Grid>
          </Grid>
        </CenteredContent>
      </div>
    )
  }
}

export default withStyles(styles)(HeaderOverlayBar)
