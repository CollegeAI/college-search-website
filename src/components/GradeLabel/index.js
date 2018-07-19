// @flow

import React from 'react'
import Typography from '@material-ui/core/Typography'
import classnames from 'classnames'

import { withStyles } from '@material-ui/core/styles'

// Import Sections
import LetterGrade from '../LetterGrade'

type Props = {
  classes: Object
}

const styles = theme => ({
  root: {
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    marginBottom: 24
  },
  overallGrade: {
    display: 'inline-flex',
    alignItems: 'center',
    textAlign: 'left'
  },
  description: {
    color: '#919191'
  }
})

export class GradeLabel extends React.PureComponent<Props> {
  render() {
    const { classes, label, value, description } = this.props

    return (
      <div className={classes.root}>
        <Typography variant="title">{label}</Typography>
        <div className={classes.overallGrade}>
          <LetterGrade val={value} />
          <Typography className={classes.description}>{description}</Typography>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(GradeLabel)
