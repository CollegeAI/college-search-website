// @flow

import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import classnames from 'classnames'

// Material ui colors
import indigo from '@material-ui/core/colors/indigo'
import blue from '@material-ui/core/colors/blue'
import lightBlue from '@material-ui/core/colors/lightBlue'
import green from '@material-ui/core/colors/green'

import { withStyles } from '@material-ui/core/styles'

type Props = {
  classes: Object
}

const styles = theme => ({
  rankingContainer: {
    textAlign: 'center',
    backgroundColor: green[300],
    padding: '36px 18px'
  },
  header: {
    marginBottom: 32
  },
  rankingItemsContainer: {
    display: 'inline-flex',
    alignItems: 'center',
    width: '100%',
    maxWidth: 1080
  },
  reason: {
    margin: '16px auto',
    padding: 16,
    height: 120,
    maxWidth: 300,
    margin: '0px auto'
  },
  title: { color: '#fff' },
  subheading: { color: '#fff', maxWidth: 800, margin: '0px auto' }
})

export class RankingSection extends React.PureComponent<Props> {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.rankingContainer}>
        <Grid container justify="center" alignItems="center" spacing={24}>
          <Grid item xs={12}>
            <div className={classes.header}>
              <Typography
                variant="display2"
                className={classes.title}
                gutterBottom
              >
                2019 Rankings
              </Typography>
              <Typography
                variant="headline"
                className={classes.subheading}
                gutterBottom
              >
                College Search Website analyzes all the best places to go to
                school.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.rankingItemsContainer}>
              {[
                {
                  name: 'Best in School Rankings',
                  description:
                    'Colleges and universities ranked across various features and attributes.'
                },
                {
                  name: 'Personalized College Matching',
                  description:
                    'An analysis of your profile using AI to personalize your college process.'
                },
                {
                  name: 'Data Driven',
                  description:
                    'A proven algoritm that learns from tens of thousands of previous students.'
                }
              ].map((reason, ind) => (
                <Paper className={classes.reason}>
                  <Typography variant="headline" gutterBottom>
                    {reason.name}
                  </Typography>
                  <Typography variant="subheading" gutterBottom>
                    {reason.description}
                  </Typography>
                </Paper>
              ))}
            </div>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(RankingSection)
