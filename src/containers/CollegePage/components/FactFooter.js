// @flow

import React from 'react'
import Typography from '@material-ui/core/Typography'
import classnames from 'classnames'

// Material ui colors
import blue from '@material-ui/core/colors/blue'

import { withStyles } from '@material-ui/core/styles'

import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'

type Props = {
  classes: Object,
  label: string,
  onClickCTA: Function
}

const styles = theme => ({
  cardAction: {
    height: 54,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    padding: '16px 32px',
    borderTop: '1px solid #e6e6e6',
    boxSizing: 'border-box'
  },
  actionContent: {
    color: blue[400],
    display: 'inline-flex',
    cursor: 'pointer'
  },
  actionText: {
    color: blue[400]
  }
})

export class FactFooter extends React.PureComponent<Props> {
  render() {
    const { classes, label, onClickCTA } = this.props

    return (
      <div className={classes.cardAction}>
        <div className={classes.actionContent} onClick={onClickCTA}>
          <Typography className={classes.actionText}>{label}</Typography>
          <KeyboardArrowRightIcon />
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(FactFooter)
