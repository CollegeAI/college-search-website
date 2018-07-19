// @flow

import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import classnames from 'classnames'

// Material ui colors
import green from '@material-ui/core/colors/green'
import lightGreen from '@material-ui/core/colors/lightGreen'
import yellow from '@material-ui/core/colors/yellow'
import orange from '@material-ui/core/colors/orange'
import red from '@material-ui/core/colors/red'

import { withStyles } from '@material-ui/core/styles'

type Props = {
  classes: Object,
  val: number,
  size?: 'mini' | 'small' | 'large',
  style?: Object
}

const styles = theme => ({
  avatar: {
    margin: 10
  },
  aGrade: {
    backgroundColor: green[200],
    color: green[900]
  },
  bGrade: {
    backgroundColor: lightGreen[200],
    color: lightGreen[900]
  },
  cGrade: {
    backgroundColor: yellow[200],
    color: yellow[900]
  },
  dGrade: {
    backgroundColor: orange[200],
    color: orange[900]
  },
  fGrade: {
    backgroundColor: red[200],
    color: red[900]
  },
  largeSize: {
    width: 60,
    height: 60,
    color: '#fff',
    fontSize: 32,
    fontWeight: 500
  },
  miniSize: {
    width: 32,
    height: 32
  }
})

class LetterGrade extends React.PureComponent<Props> {
  render() {
    const { classes, val, size = 'small', style = {} } = this.props
    let grade
    if (val >= 90) {
      grade = 'A'
    } else if (val >= 80 && val < 90) {
      grade = 'B'
    } else if (val >= 70 && val < 80) {
      grade = 'C'
    } else if (val >= 60 && val < 70) {
      grade = 'D'
    } else {
      grade = 'F'
    }
    if (val % 10 >= 7 || val == 100) {
      grade += '+'
    } else if (val % 10 <= 3) {
      grade += '-'
    }

    if (val < 0) {
      grade = '?'
    }
    return (
      <Avatar
        className={classnames(classes.avatar, {
          [classes.aGrade]: grade.includes('A'),
          [classes.bGrade]: grade.includes('B'),
          [classes.cGrade]: grade.includes('C'),
          [classes.dGrade]: grade.includes('D'),
          [classes.fGrade]: grade.includes('F'),
          [classes.largeSize]: size === 'large',
          [classes.miniSize]: size === 'mini'
        })}
        style={style}
      >
        {grade}
      </Avatar>
    )
  }
}

export default withStyles(styles)(LetterGrade)
