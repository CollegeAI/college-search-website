// @flow

import * as React from 'react'
import { withStyles } from '@material-ui/core/styles'
import classnames from 'classnames'

type Props = {
  classes?: Object,
  size?: 'medium' | 'large',
  style?: Object,
  children?: React.Node
}

const styles = theme => ({
  root: {
    margin: '0px auto'
  },
  small: {
    maxWidth: 800
  },
  medium: {
    maxWidth: 984
  },
  large: {
    maxWidth: 1080
  }
})

export class CenteredContent extends React.PureComponent<Props> {
  render() {
    const { classes = {}, size = 'medium', style = {}, children } = this.props
    return (
      <div
        className={classnames(classes.root, {
          [classes.small]: size === 'small',
          [classes.medium]: size === 'medium',
          [classes.large]: size === 'large'
        })}
        style={style}
      >
        {children}
      </div>
    )
  }
}

export default withStyles(styles)(CenteredContent)
