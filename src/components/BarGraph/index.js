// @flow

import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import classnames from 'classnames'

// Material ui colors
import green from '@material-ui/core/colors/green'
import blue from '@material-ui/core/colors/blue'
import grey from '@material-ui/core/colors/grey'

import { withStyles } from '@material-ui/core/styles'

// Import Sections
import Rating from '../Rating'

type Props = {
  classes: Object,
  items: Array<{
    label: string,
    value: string | number,
    rating?: number,
    unit?: string
  }>,
  total: number,
  header?: string
}

const styles = theme => ({
  heading: {
    textAlign: 'left',
    paddingBottom: 8
  },
  ratingItem: {
    width: '100%',
    marginBottom: 4,
    padding: 8,
    position: 'relative'
  },
  ratingItemBackground: {
    backgroundColor: '#f6f6f6',
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
    zIndex: 2
  },
  ratingItemBackgroundGood: {
    backgroundColor: green[100],
    position: 'absolute',
    height: '100%',
    top: 0,
    left: 0,
    zIndex: 3
  },
  raised: {
    zIndex: 4
  }
})

export class BarGraph extends React.Component<Props, State> {
  render() {
    const { classes, items, total, header } = this.props

    return (
      <div className={classes.ratingContainer}>
        {header && (
          <Typography variant="subheading" className={classes.heading}>
            {header}
          </Typography>
        )}
        {items.map((item, ind) => (
          <Grid
            key={ind}
            container
            className={classes.ratingItem}
            alignItems="flex-end"
            justify="space-between"
          >
            <div className={classes.ratingItemBackground} />
            <div
              className={classes.ratingItemBackgroundGood}
              style={{ width: `${100 * item.value / total}%` }}
            />
            {item.rating && (
              <Grid item className={classes.raised}>
                <Rating rating={item.rating} style={{ color: green[800] }} />
              </Grid>
            )}
            <Grid item className={classes.raised}>
              <Typography>{item.label}</Typography>
            </Grid>
            <Grid item className={classes.raised}>
              <Typography>
                {item.value} {item.unit || ''}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </div>
    )
  }
}

export default withStyles(styles)(BarGraph)
