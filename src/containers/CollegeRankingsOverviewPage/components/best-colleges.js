// @flow

import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import classnames from 'classnames'

// Material ui colors
import green from '@material-ui/core/colors/green'
import blue from '@material-ui/core/colors/blue'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { withStyles } from '@material-ui/core/styles'

// Import Sections

type Props = {
  classes: Object,
  onPushRoute: Function
}

const styles = theme => ({
  root: {
    maxWidth: 800,
    width: '100%',
    margin: '16px auto',
    display: 'inline-flex',
    flexDirection: 'column',
    padding: '50px 30px 30px',
    textAlign: 'left',
    boxSizing: 'border-box'
  },
  header: { marginBottom: 16 },
  description: {
    maxWidth: 470,
    marginBottom: 8
  },
  category: { marginTop: 12, color: blue[500], cursor: 'pointer' },
  button: {
    marginTop: 16
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shorter
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  }
})

type State = {
  expanded: boolean
}

export class BestColleges extends React.Component<Props, State> {
  state = { expanded: false }

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded })
  }

  onCategoryClick = (category: Object) => {
    return () => {
      this.props.onCategoryClick(category.id)
    }
  }

  render() {
    const { classes, categories, header, description } = this.props

    const maxDisplayItems = this.state.expanded ? categories.length : 6
    const displayCategories = categories.slice(
      0,
      Math.min(categories.length, maxDisplayItems)
    )
    let showMoreButtom = false
    if (categories.length > 6) {
      showMoreButtom = true
    }

    return (
      <Paper className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <Typography
              className={classes.header}
              variant="display1"
              component="p"
            >
              {header}
            </Typography>
            <Typography className={classes.description} component="p">
              {description}
            </Typography>
          </Grid>
          {displayCategories.map(c => (
            <Grid item xs={12} sm={6}>
              <Typography
                onClick={this.onCategoryClick(c)}
                variant="subheading"
                className={classes.category}
              >
                {c.name}
              </Typography>
            </Grid>
          ))}
          {showMoreButtom && (
            <Grid item xs={12}>
              <Button
                size="small"
                variant="outlined"
                color="primary"
                className={classes.button}
                onClick={this.handleExpandClick}
              >
                <ExpandMoreIcon
                  className={classnames(classes.expand, {
                    [classes.expandOpen]: this.state.expanded
                  })}
                  aria-expanded={this.state.expanded}
                  aria-label="Show more"
                />
                {this.state.expanded ? 'Less' : 'More'}
              </Button>
            </Grid>
          )}
        </Grid>
      </Paper>
    )
  }
}

export default withStyles(styles)(BestColleges)
