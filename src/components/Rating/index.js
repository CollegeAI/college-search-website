// @flow

import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import classnames from 'classnames'

import StarIcon from '@material-ui/icons/Star'
import StarHalfIcon from '@material-ui/icons/StarHalf'
import StarBorderIcon from '@material-ui/icons/StarBorder'

type Props = {
  classes?: Object,
  rating: number,
  style?: Object
}

const styles = theme => ({
  starIcon: {
    fontSize: 14
  }
})

export class Rating extends React.PureComponent<Props> {
  render() {
    const { classes = {}, style = {}, rating } = this.props
    return (
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'flex-end'
        }}
      >
        {[...Array(5).keys()].map(ind => {
          if (rating >= ind + 1) {
            return (
              <StarIcon key={ind} className={classes.starIcon} style={style} />
            )
          } else if (rating > ind) {
            return (
              <StarHalfIcon
                key={ind}
                className={classes.starIcon}
                style={style}
              />
            )
          } else {
            return (
              <StarBorderIcon
                key={ind}
                className={classes.starIcon}
                style={style}
              />
            )
          }
        })}
      </div>
    )
  }
}

export default withStyles(styles)(Rating)
