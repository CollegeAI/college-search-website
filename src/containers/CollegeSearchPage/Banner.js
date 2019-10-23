// @flow

import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import classnames from 'classnames'

// Material ui colors
import blue from '@material-ui/core/colors/blue'
import green from '@material-ui/core/colors/green'

import HomeIcon from '@material-ui/icons/Home'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance'
import TerrainIcon from '@material-ui/icons/Terrain'
import WbSunnyIcon from '@material-ui/icons/WbSunny'
import NaturePeopleIcon from '@material-ui/icons/NaturePeople'

import { withStyles } from '@material-ui/core/styles'

// Import Sections
import CenteredContent from '../../components/CenteredContent'
import Icons from '../../components/Icons'
import pattern from '../../homepage_pattern.svg'

type Props = {
  classes: Object
}

const styles = theme => ({
  banner: {
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: blue[200]
  },
  subheading: {
    marginBottom: 24
  },
  iconContainer: {
    height: 75,
    position: 'relative'
  },
  homeIcon: {
    fontSize: 84,
    color: green[200]
  },
  header: {
    textAlign: 'left',
    padding: '20px 25px 20px 0px'
  },
  descriptionContainer: {
    display: 'inline-flex',
    alignItems: 'flex-end'
  },
  socialMediaIconContainer: {
    display: 'inline-flex'
  }
})

export class CollegeSearchPageBanner extends React.PureComponent<Props> {
  render() {
    const { classes } = this.props
    return (
      <div>
        <Grid container>
          <Grid item xs={12}>
            <div className={classes.iconContainer}>
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  width: '100%',
                  height: '100%',
                  backgroundImage: `url(${pattern})`,
                  backgroundSize: '300px 150px',
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
                  backgroundColor: blue[100],
                  zIndex: -2
                }}
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <Paper>
              <CenteredContent>
                <Grid container>
                  <Grid item xs={2} />
                  <Grid item xs={10}>
                    <div className={classes.header}>
                      <Typography
                        className={classes.headerTitle}
                        variant="display1"
                        gutterBottom
                      >
                        2019 Best Colleges in America
                      </Typography>
                      <div className={classes.descriptionContainer}>
                        <div>
                          <Typography gutterBottom>
                            The Best Colleges ranking is based on rigorous
                            analysis of academic, admissions, financial, and
                            student life data from the U.S. Department of
                            Education along with millions of reviews from
                            students and alumni.
                          </Typography>
                        </div>
                        <div className={classes.socialMediaIconContainer}>
                          <Icons
                            name="facebook"
                            style={{ color: '#3b5998', marginRight: 4 }}
                          />
                          <Icons name="google" style={{ color: '#ea756b' }} />
                          <Icons
                            name="twitter"
                            style={{ color: '#70ceee', marginLeft: 4 }}
                          />
                        </div>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </CenteredContent>
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(CollegeSearchPageBanner)
