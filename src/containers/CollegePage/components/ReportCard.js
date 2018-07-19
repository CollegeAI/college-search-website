// @flow

import React from 'react'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'
import classnames from 'classnames'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

// Material ui colors
import green from '@material-ui/core/colors/green'

import { withStyles } from '@material-ui/core/styles'

// Import Sections
import LetterGrade from '../../../components/LetterGrade'
import { getScoreFromRanking } from '../../../utils'

type Props = {
  classes: Object,
  college: Object
}

type State = {
  expanded: boolean
}

const styles = theme => ({
  root: {
    width: '100%',
    marginBottom: 32
  },
  avatar: {
    margin: 10
  },
  cardContent: {
    padding: '20px 30px 10px',
    height: 172,
    overflowY: 'hidden',
    transition: `height ${theme.transitions.duration.shortest}ms`
  },
  cardContentExpanded: {
    height: 360
  },
  cardAction: {
    height: 54,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    padding: '16px 32px',
    borderTop: '1px solid #e6e6e6',
    boxSizing: 'border-box',
    display: 'inline-flex',
    justifyContent: 'center',
    cursor: 'pointer'
  },
  overallRankingContainer: {
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  ranking: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%'
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  howAreGradesCalculated: {
    fontSize: 12,
    color: '#919191'
  }
})

export class ReportCard extends React.Component<Props, State> {
  state = { expanded: false }

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded })
  }

  render() {
    const { classes, college: { rankings } } = this.props
    const { expanded } = this.state
    const { bestColleges = {} } = rankings
    const { firstCol, secCol } = Object.keys(rankings).reduce(
      (acc, rankingName, ind) => {
        if (rankingName !== 'bestColleges') {
          if (ind % 2 === 1) {
            acc.firstCol.push({
              name: rankings[rankingName].name,
              val: getScoreFromRanking(rankings[rankingName])
            })
          } else {
            acc.secCol.push({
              name: rankings[rankingName].name,
              val: getScoreFromRanking(rankings[rankingName])
            })
          }
        }
        return acc
      },
      { firstCol: [], secCol: [] }
    )

    return (
      <Paper className={classes.root}>
        <Grid container direction="column" justify="space-between">
          <Grid item>
            <div
              className={classnames(classes.cardContent, {
                [classes.cardContentExpanded]: expanded
              })}
            >
              <Grid container>
                <Grid item xs={12} sm={12} md={4}>
                  <div className={classes.overallRankingContainer}>
                    <div className={classes.rankings}>
                      <LetterGrade
                        size="large"
                        val={getScoreFromRanking(bestColleges)}
                      />
                    </div>
                    <div className={classes.rankings}>
                      <Typography variant="subheading">
                        Overall CSW Grade
                      </Typography>
                    </div>
                    <div className={classes.rankings}>
                      <Typography
                        variant="body1"
                        className={classes.howAreGradesCalculated}
                      >
                        How are grades calculated?
                      </Typography>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <div className={classes.rankings}>
                    {firstCol.map(({ name, val }, ind) => (
                      <div className={classes.ranking} key={ind}>
                        <LetterGrade val={val} />
                        <Typography variant="body1">{name}</Typography>
                      </div>
                    ))}
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <div className={classes.rankings}>
                    {secCol.map(({ name, val }, ind) => (
                      <div className={classes.ranking} key={ind}>
                        <LetterGrade val={val} />
                        <Typography variant="body1">{name}</Typography>
                      </div>
                    ))}
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item>
            <div
              onClick={this.handleExpandClick}
              className={classes.cardAction}
            >
              View Full Report Card
              <ExpandMoreIcon
                className={classnames(classes.expand, {
                  [classes.expandOpen]: this.state.expanded
                })}
                onClick={this.handleExpandClick}
                aria-expanded={this.state.expanded}
                aria-label="Show more"
              />
            </div>
          </Grid>
        </Grid>
      </Paper>
    )
  }
}

export default withStyles(styles)(ReportCard)
