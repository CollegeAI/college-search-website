// @flow

import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import classnames from 'classnames'

// Material ui colors
import green from '@material-ui/core/colors/green'
import blue from '@material-ui/core/colors/blue'

import { withStyles } from '@material-ui/core/styles'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

// Import Sections
import LetterGrade from '../../../components/LetterGrade'
import ListFacts from '../../../components/ListFacts'
import FactFooter from './FactFooter'

type Props = {
  classes: Object,
  onPushRoute: Function
}

const styles = theme => ({
  root: {
    width: '100%',
    marginBottom: 32,
    display: 'inline-flex',
    flexDirection: 'column'
  },
  cardContent: {
    padding: '30px 30px 10px'
  },
  title: {
    textAlign: 'left',
    color: blue[500],
    paddingBottom: 30
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
  majorItem: {
    display: 'inline-flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    textAlign: 'left',
    padding: '8px 0px',
    borderBottom: '1px solid #dddddd'
  },
  expandMajors: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    color: blue[400],
    cursor: 'pointer'
  },
  majorsContainer: {
    marginBottom: 16
    // height: 123,
    // overflowY: 'hidden',
    // transition: `height ${theme.transitions.duration.shorter}ms`
  },
  // majorsContainerExpanded: {
  //   height: 401
  // },
  majorsExpand: { marginBottom: 24 }
})

const MAX_MAJORS_DISPLAY = 20

export class Majors extends React.PureComponent<Props> {
  render() {
    const { classes, college, onPushRoute } = this.props

    const footerLabel = 'See All Majors'

    const majors = Object.keys(college.academics.majors)
      .map(major => ({
        label: major
          .substring('numberOfGraduatesIn'.length)
          .replace(/([A-Z])/g, ' $1')
          .replace(/^./, str => str.toUpperCase()),
        value: `${college.academics.majors[major]} Graduates`,
        sortOrder: college.academics.majors[major]
      }))
      .sort((a, b) => b.sortOrder - a.sortOrder)
      .slice(
        0,
        Math.min(
          Object.keys(college.academics.majors).length,
          MAX_MAJORS_DISPLAY
        )
      )

    return (
      <Paper className={classes.root}>
        <div className={classes.cardContent}>
          <div>
            <Typography
              className={classes.title}
              variant="display1"
              component="p"
            >
              Majors
            </Typography>
          </div>
          <div>
            <div className={classnames(classes.title, classes.majorItem)}>
              <Typography variant="title">Most Popular Majors</Typography>
            </div>
            <div className={classnames(classes.majorsContainer)}>
              <ListFacts items={majors} expand={{ show: 3 }} />
            </div>
          </div>
        </div>
        <FactFooter label={footerLabel} onClickCTA={onPushRoute} />
      </Paper>
    )
  }
}

export default withStyles(styles)(Majors)
