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
    value: string,
    onClick?: Function,
    secondary?: string
  }>,
  expand: {
    show: number
  }
}

const styles = theme => ({
  container: {
    width: '100%',
    display: 'inline-flex',
    flexDirection: 'column',
    textAlign: 'left'
  },
  listContainer: {
    borderTop: '1px solid #dddddd',
    overflowY: 'hidden',
    transition: `height ${theme.transitions.duration.shorter}ms`
  },
  itemContainer: {
    width: '100%',
    display: 'inline-flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '10px 0px',
    borderBottom: '1px solid #dddddd',
    height: 40,
    boxSizing: 'border-box'
  },
  itemLabel: {},
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
  secondary: {
    height: 'inherit',
    color: '#919191',
    fontSize: '0.75rem'
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
    boxSizing: 'border-box',
    borderBottom: '1px solid #dddddd'
  }
})

type State = {
  expanded: boolean
}

export class ListFacts extends React.Component<Props, State> {
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
      minHeight = expand.show * 40
      maxHeight = items.length * 40
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
          {items.map(({ label, value, secondary, onClick }, ind) => (
            <Grid
              container
              className={classnames(classes.itemContainer, {
                [classes.secondary]: Boolean(secondary)
              })}
              key={ind}
            >
              <Grid item>
                <Typography
                  className={classes.itemLabel}
                  style={itemLabelStyle}
                >
                  {label}
                </Typography>
              </Grid>
              <Grid item>
                <div className={classes.itemValueContainer}>
                  <Typography
                    style={itemValueStyle}
                    {...(onClick ? { onClick } : {})}
                    className={classnames(classes.itemValue, {
                      [classes.website]: Boolean(onClick)
                    })}
                  >
                    {value}
                  </Typography>
                  {secondary && (
                    <Typography className={classes.secondary}>
                      {secondary}
                    </Typography>
                  )}
                </div>
              </Grid>
            </Grid>
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

export default withStyles(styles)(ListFacts)
