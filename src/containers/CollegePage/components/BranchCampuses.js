// @flow

import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import classnames from 'classnames'

// Material ui colors
import green from '@material-ui/core/colors/green'
import blue from '@material-ui/core/colors/blue'

import { withStyles } from '@material-ui/core/styles'

// Import Sections
import LetterGrade from '../../../components/LetterGrade'
import CollegeItem from '../../../components/CollegeItem'

type Props = {
  classes: Object,
  branchCampuses: Array<{
    ref: string,
    value: number,
    name: string
  }>
}

type State = {
  sortOrder: number
}

const styles = theme => ({
  root: {
    width: '100%',
    marginBottom: 32,
    display: 'inline-flex',
    flexDirection: 'column'
  },
  cardContent: {
    padding: '16px 30px 10px'
  },
  title: {
    textAlign: 'left',
    color: blue[500],
    paddingBottom: 8
  },
  tabs: {
    marginBottom: 8
  },
  tabRoot: {
    minWidth: 48,
    height: 36
  }
})

const placeholderBranchCampuses = [
  {
    name: 'Rensselaer Hartford Graduate Center',
    location: 'Hartford, CT',
    link: '/',
    value: 88
  },
  {
    name: 'Rensselaer Other School',
    location: 'Hartford, CT',
    link: '/',
    value: 95
  }
]

export class BranchCampuses extends React.Component<Props, State> {
  state = { sortOrder: 1 }

  handleChange = (event: Event, value: number) => {
    this.setState({ sortOrder: value })
  }

  render() {
    const { classes, name, branchCampuses } = this.props

    if (!name || !branchCampuses) {
      return null
    }

    const headerText = `Branch Campuses of ${name}`

    if (this.state.sortOrder === 0) {
      // Sort By Score "Value"
      branchCampuses.sort((a, b) => {
        if (a.value > b.value) return -1
        if (a.value < b.value) return 1
        return 0
      })
    } else {
      // Sort Alphbetically
      branchCampuses.sort((a, b) => {
        if (a.name < b.name) return -1
        if (a.name > b.name) return 1
        return 0
      })
    }

    return (
      <Paper className={classes.root}>
        <div className={classes.cardContent}>
          <Grid container>
            <Grid item xs={12}>
              <Typography
                className={classes.title}
                variant="headline"
                component="p"
              >
                {headerText}
              </Typography>
            </Grid>
            <Grid item xs={12} className={classes.tabs}>
              <Tabs
                value={this.state.sortOrder}
                indicatorColor="primary"
                textColor="primary"
                onChange={this.handleChange}
              >
                <Tab
                  disableRipple
                  label="Best"
                  classes={{ root: classes.tabRoot }}
                />
                <Tab
                  disableRipple
                  label="A-Z"
                  classes={{ root: classes.tabRoot }}
                />
              </Tabs>
            </Grid>
            <Grid item xs={12}>
              {branchCampuses.map((bc, ind) => (
                <CollegeItem {...bc} key={ind} />
              ))}
            </Grid>
          </Grid>
        </div>
      </Paper>
    )
  }
}

export default withStyles(styles)(BranchCampuses)
