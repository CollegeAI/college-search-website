// @flow

import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import classnames from 'classnames'

// Material ui colors
import green from '@material-ui/core/colors/green'
import grey from '@material-ui/core/colors/grey'

import PeopleIcon from '@material-ui/icons/People'

import collegeaiTeam from './assets/collegeai_team.png'

import { withStyles } from '@material-ui/core/styles'
import peopleSvg from './assets/people.svg'

type Props = {
  classes: Object
}

const styles = theme => ({
  root: {
    textAlign: 'center',
    backgroundColor: grey[600]
  },
  peopleIcon: {
    fontSize: 128,
    color: green[200]
  },
  ourTeamContainer: {
    textAlign: 'left',
    padding: '48px 48px 64px'
  },
  teamText: {
    color: '#fff',
    maxWidth: 800
  },
  teamDescription: {
    paddingBottom: 16
  }
})

export class OurTeam extends React.PureComponent<Props> {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <div
          style={{
            display: 'inline-block',
            maxWidth: 1200
          }}
        >
          <Grid container justify="center">
            <Grid item md={4} xs={12}>
              <img
                src={collegeaiTeam}
                style={{
                  width: '100%',
                  display: 'inline-flex',
                  objectFit: 'cover'
                }}
              />
            </Grid>
            <Grid item md={8} xs={12}>
              <div className={classes.ourTeamContainer}>
                <Typography
                  className={classes.teamText}
                  variant="display1"
                  gutterBottom
                >
                  Our Team
                </Typography>
                <Typography
                  className={classnames(
                    classes.teamDescription,
                    classes.teamText
                  )}
                  variant="subheading"
                  gutterBottom
                >
                  College Search Website is a small team based in Boston,
                  Massachusetts. We’re a unique blend of data scientists,
                  engineers, and professors who are passionate about helping you
                  discover the colleges that are right for you.
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(OurTeam)
