// @flow

import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import classnames from 'classnames'
import { Link } from 'react-router-dom'
import * as colors from '@material-ui/core/colors'

// Material ui colors
import indigo from '@material-ui/core/colors/indigo'
import blue from '@material-ui/core/colors/blue'
import lightBlue from '@material-ui/core/colors/lightBlue'
import green from '@material-ui/core/colors/green'

import BubbleChartIcon from '@material-ui/icons/BubbleChart'
import InsertCommentIcon from '@material-ui/icons/InsertComment'
import EqualizerIcon from '@material-ui/icons/Equalizer'

import { withStyles } from '@material-ui/core/styles'

type Props = {
  classes: Object
}

const styles = theme => ({
  root: {
    textAlign: 'center',
    padding: '64px 18px 32px'
  },
  button: {
    margin: 16
  }
})

export class SignUpCallToAction extends React.PureComponent<Props> {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Grid container justify="center">
          <Grid item xs={12}>
            No need to sign up, just start{' '}
            <Link
              style={{ textDecoration: 'none', color: colors.blue['500'] }}
              to="/colleges/search"
            >
              searching for colleges
            </Link>.
          </Grid>
          <Grid item xs={12}>
            {/* <Button
              variant="contained"
              size="large"
              color="primary"
              className={classes.button}
            >
              Sign Up
            </Button>
            <Button
              variant="outlined"
              size="large"
              color="primary"
              className={classes.button}
            >
              Log In
            </Button> */}
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(SignUpCallToAction)
