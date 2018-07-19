// @flow

import * as React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import classnames from 'classnames'

import green from '@material-ui/core/colors/green'
import blue from '@material-ui/core/colors/blue'

import { withStyles } from '@material-ui/core/styles'

// Import Sections
type Props = {
  classes: Object,
  header?: string,
  subheader?: string,
  children?: React.node
}

const styles = theme => ({
  root: {
    width: '100%',
    marginBottom: 32,
    display: 'inline-flex',
    flexDirection: 'column',
    padding: '30px 30px 10px',
    boxSizing: 'border-box'
  },
  headerContainer: {
    paddingBottom: 30
  },
  header: {
    textAlign: 'left',
    color: blue[500],
    fontSize: '1.87rem'
  },
  subheader: {
    padding: '15px 0px 10px',
    textAlign: 'left'
  }
})

export class InformationCard extends React.PureComponent<Props> {
  render() {
    const { classes, header, subheader, children } = this.props
    return (
      <Paper className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <div className={classes.headerContainer}>
              {header && (
                <Typography
                  className={classes.header}
                  variant="display1"
                  component="h3"
                >
                  {header}
                </Typography>
              )}
              {subheader && (
                <Typography className={classes.subheader} component="p">
                  {subheader}
                </Typography>
              )}
            </div>
          </Grid>
        </Grid>
        {children}
      </Paper>
    )
  }
}

export default withStyles(styles)(InformationCard)
