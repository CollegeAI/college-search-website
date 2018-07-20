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
    padding: '48px 18px 64px'
  },
  header: {
    marginBottom: 64
  },
  reasonContainer: {
    borderTop: '1px solid rgba(0,0,0,0.03)'
  },
  reason: {
    padding: '32px 16px'
  },
  reasonTitle: {
    paddingTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#666'
  },
  icon: {
    fontSize: 128,
    color: blue[200]
  },
  description: {
    maxWidth: 300,
    margin: '0px auto'
  },
  leftItem: { paddingRight: 0 },
  rightItem: { paddingLeft: 0 }
})

export class WhyUs extends React.PureComponent<Props> {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Grid container justify="center">
          <Grid item xs={12}>
            <div className={classes.header}>
              <Typography variant="display1" gutterBottom>
                Why College Search Website?
              </Typography>
              <Typography
                variant="subheading"
                className={classes.description}
                gutterBottom
              >
                College Search Website is the best place to find your college.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={10} md={8} lg={6}>
            <Grid container justify="center">
              <Grid
                item
                xs={12}
                sm={6}
                className={classnames(
                  classes.reason,
                  classes.leftItem,
                  classes.rightItem
                )}
              >
                <InsertCommentIcon className={classes.icon} />
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                className={classnames(classes.reason, classes.rightItem)}
              >
                <Typography
                  variant="headline"
                  className={classes.reasonTitle}
                  gutterBottom
                >
                  200,000+ student data points.
                </Typography>
                <Typography
                  variant="body1"
                  className={classes.description}
                  gutterBottom
                >
                  Tons people come to CSW to share personal experiences.
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              justify="center"
              className={classes.reasonContainer}
            >
              <Grid
                item
                xs={12}
                sm={6}
                className={classnames(classes.reason, classes.leftItem)}
              >
                <Typography
                  variant="headline"
                  className={classes.reasonTitle}
                  gutterBottom
                >
                  Rigorous Analysis
                </Typography>
                <Typography
                  variant="body1"
                  className={classes.description}
                  gutterBottom
                >
                  Our team of data scientists evaluates countless data sets to
                  produce rankings, report cards, and in-depth profiles.
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                className={classnames(classes.reason, classes.rightItem)}
              >
                <BubbleChartIcon className={classes.icon} />
              </Grid>
            </Grid>
            <Grid
              container
              justify="center"
              className={classes.reasonContainer}
            >
              <Grid
                item
                xs={12}
                sm={6}
                className={classnames(classes.reason, classes.leftItem)}
              >
                <EqualizerIcon className={classes.icon} />
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                className={classnames(classes.reason, classes.rightItem)}
              >
                <Typography
                  variant="headline"
                  className={classes.reasonTitle}
                  gutterBottom
                >
                  What It's Really Like
                </Typography>
                <Typography
                  variant="body1"
                  className={classes.description}
                  gutterBottom
                >
                  We combine reviews and analysis to uncover the good, bad, and
                  surprising.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(WhyUs)
