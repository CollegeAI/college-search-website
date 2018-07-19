// @flow

import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import classnames from 'classnames'

import blue from '@material-ui/core/colors/blue'
import { withStyles } from '@material-ui/core/styles'

type Props = {
  classes: Object,
  label?: string,
  items: Array<string>
}

const styles = theme => ({
  root: {
    width: '100%',
    display: 'inline-flex',
    flexDirection: 'column',
    textAlign: 'left'
  },
  label: {},
  item: {
    fontWeight: 600
  }
})

export class ListItems extends React.PureComponent<Props> {
  render() {
    const { classes, label, items, style = {} } = this.props

    return (
      <div className={classes.root} style={style}>
        {label ? (
          <Typography variant="subheading" className={classes.label}>
            {label}
          </Typography>
        ) : null}
        <div>
          {items.map((item, ind) => (
            <span key={ind} className={classes.item}>
              {item},{' '}
            </span>
          ))}
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(ListItems)
