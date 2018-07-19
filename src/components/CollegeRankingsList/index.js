// @flow

import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import classnames from 'classnames'

import blue from '@material-ui/core/colors/blue'
import { withStyles } from '@material-ui/core/styles'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

type Props = {
  classes: Object,
  heading?: string,
  items: Array<{
    label: string,
    rank: number,
    total: number,
    value: string,
    onClick?: Function
  }>,
  expand: {
    show: number
  }
}

const styles = theme => ({
  container: {
    width: '100%',
    display: 'inline-flex',
    flexWrap: 'wrap',
    textAlign: 'left'
  },
  listContainer: {
    overflowY: 'hidden',
    transition: `height ${theme.transitions.duration.shorter}ms`
  },
  itemContainer: {
    width: '100%',
    display: 'inline-flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    border: '1px solid rgba(0, 0, 0, 0.12)',
    maxWidth: 390,
    height: 82
  },
  itemLabel: {
    fontSize: '0.9rem'
  },
  itemValueContainer: {
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    width: '100%'
  },
  itemValue: {
    fontWeight: 500,
    width: '100%'
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shorter
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  website: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    paddingLeft: 16,
    fontWeight: 700,
    color: blue[400],
    cursor: 'pointer',
    maxWidth: 164
  },
  listHeader: {
    fontWeight: 500,
    padding: '10px 0px'
  },
  expandList: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    color: blue[400],
    cursor: 'pointer',
    padding: '4px 0px',
    boxSizing: 'border-box'
  },
  imgIcon: {
    width: 150,
    height: '100%',
    background: 'linear-gradient(#e66465, #9198e5)'
  },
  rankingContent: {
    display: 'inline-flex',
    flexDirection: 'column',
    width: '100%',
    padding: '4px 8px',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly'
  }
})

type State = {
  expanded: boolean
}

export class CollegeRankingsList extends React.Component<Props, State> {
  state = { expanded: false }

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded })
  }

  render() {
    const {
      classes,
      heading,
      items,
      expand,
      itemLabelStyle = {},
      itemValueStyle = {}
    } = this.props

    let minHeight = 0
    let maxHeight = 0
    if (expand && expand.show) {
      minHeight = expand.show * 84
      maxHeight = items.length * 84 + 8
    }

    return (
      <div className={classes.container}>
        {heading ? (
          <Typography variant="subheading" className={classes.listHeader}>
            {heading}
          </Typography>
        ) : null}
        <div
          className={classes.listContainer}
          style={
            Boolean(expand)
              ? this.state.expanded
                ? { height: maxHeight }
                : { height: minHeight }
              : {}
          }
        >
          {items.map(({ label, rank, total, onClick }, ind) => (
            <div className={classnames(classes.itemContainer)} key={ind}>
              <div className={classes.imgIcon} />
              <div className={classes.rankingContent}>
                <Typography
                  variant="subheading"
                  className={classes.itemLabel}
                  style={itemLabelStyle}
                >
                  {label}
                </Typography>
                <Typography
                  variant="subheading"
                  style={itemValueStyle}
                  {...(onClick ? { onClick } : {})}
                  className={classnames(classes.itemValue, {
                    [classes.website]: Boolean(onClick)
                  })}
                >
                  {`#${rank} of ${total}`}
                </Typography>
              </div>
            </div>
          ))}
        </div>
        {expand && (
          <div onClick={this.handleExpandClick} className={classes.expandList}>
            <ExpandMoreIcon
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            />
            {this.state.expanded ? 'Less' : 'More'}
          </div>
        )}
      </div>
    )
  }
}

export default withStyles(styles)(CollegeRankingsList)
