// @flow

import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import classnames from 'classnames'

// Material ui colors
import green from '@material-ui/core/colors/green'
import grey from '@material-ui/core/colors/grey'

import PeopleIcon from '@material-ui/icons/People'

import { withStyles } from '@material-ui/core/styles'
import peopleSvg from './assets/people.svg'

type Props = {
  classes: Object
}

const styles = theme => ({
  root: {
    textAlign: 'center'
  },
  teamImgContainer: {
    padding: '48px 18px 64px',
    position: 'relative',
    height: '100%',
    boxSizing: 'border-box'
  },
  peopleIcon: {
    fontSize: 128,
    color: green[200]
  },
  ourTeamContainer: {
    textAlign: 'left',
    backgroundColor: grey[600],
    padding: '48px 18px 64px'
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
        <Grid container justify="center">
          <Grid item md={4} xs={12}>
            <div className={classes.teamImgContainer}>
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  width: '100%',
                  height: '100%',
                  backgroundImage: `url(${peopleSvg})`,
                  backgroundRepeat: 'space',
                  opacity: 0.1,
                  zIndex: -1
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: grey[100],
                  zIndex: -2
                }}
              />
              {/* <PeopleIcon className={classes.peopleIcon} /> */}
            </div>
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
              <Typography className={classes.teamText}>
                The College Search Website Team
              </Typography>
              <Typography className={classes.teamText}>Boston, MA</Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(OurTeam)
