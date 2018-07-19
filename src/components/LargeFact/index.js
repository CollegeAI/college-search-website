// @flow

import React from 'react'
import Typography from '@material-ui/core/Typography'
import classnames from 'classnames'

import { withStyles } from '@material-ui/core/styles'

type Props = {
  classes: Object,
  label: string,
  primary: string,
  unit?: string,
  secondary?: string
}

const styles = theme => ({
  root: {
    width: '100%',
    display: 'inline-flex',
    flexDirection: 'column',
    textAlign: 'left',
    marginBottom: 16
  },
  container: {
    display: 'inline-flex',
    alignItems: 'flex-end',
    width: '100%',
    color: '#464646'
  },
  secondary: {
    paddingTop: 4,
    color: '#919191',
    fontSize: '0.75rem'
  }
})

export class LargeFact extends React.PureComponent<Props> {
  render() {
    const { classes, label, primary, secondary, unit } = this.props

    return (
      <div className={classes.root}>
        <Typography variant="subheading" component="p">
          {label}
        </Typography>
        <div className={classes.container}>
          <Typography variant="display2" component="p">
            {primary}
          </Typography>
          {unit && (
            <span
              style={{
                paddingBottom: 3,
                paddingLeft: 8
              }}
            >
              {unit}
            </span>
          )}
        </div>
        {secondary && (
          <Typography className={classes.secondary} component="p">
            {secondary}
          </Typography>
        )}
      </div>
    )
  }
}

export default withStyles(styles)(LargeFact)
