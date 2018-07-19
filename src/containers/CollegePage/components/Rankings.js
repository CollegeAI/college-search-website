// @flow

import React from 'react'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import classnames from 'classnames'

import StarIcon from '@material-ui/icons/Star'

// Material ui colors
import green from '@material-ui/core/colors/green'
import blue from '@material-ui/core/colors/blue'

import { withStyles } from '@material-ui/core/styles'

// Import Sections
import { formatNumber } from '../../../utils'
import LetterGrade from '../../../components/LetterGrade'
import FactFooter from './FactFooter'

type Props = {
  classes: Object,
  college: Object,
  onPushRoute: Function
}

const styles = theme => ({
  root: {
    width: '100%',
    marginBottom: 32,
    borderTop: `25px solid ${blue[500]}`,
    display: 'inline-flex',
    flexDirection: 'column'
  },
  cardContent: {
    padding: '20px 30px 10px'
  },
  headerContainer: {
    paddingLeft: 88,
    textAlign: 'left',
    marginBottom: 16,
    position: 'relative'
  },
  icon: {
    position: 'absolute',
    left: 4
  },
  heading: { color: blue[500], paddingBottom: 8 },
  subheading: { color: '#787878' },
  sampleRankingsContainer: {
    paddingLeft: 74,
    paddingBottom: 16,
    display: 'inline-flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    boxSizing: 'border-box'
  },
  sampleRankingItem: {
    textAlign: 'left',
    padding: '0px 16px 20px'
  },
  rankingLink: {
    color: blue[400]
  },
  rankingValue: {
    fontSize: '1.4rem'
  },
  rankingTitle: {
    cursor: 'pointer'
  }
})

const rankingDescription =
  'College Search Website rankings are based on rigorous analysis of key statistics from the U.S. Department of Education and millions of reviews.'

const MAX_SAMPLE_RANKINGS = 3
export class Rankings extends React.PureComponent<Props> {
  onRankingClick = (link: string) => {
    return () => {
      // go to ref page
    }
  }

  render() {
    const { classes, college, onPushRoute } = this.props
    const name = college.name
    const state = college.address.state.name
    const city = college.address.city

    const rankingTitle = `${name} Rankings`
    const footerLabel = `See All ${name} Rankings`
    const rankings = Object.keys(college.rankings)
      .filter(rankingName => rankingName !== 'rankingsBestColleges')
      .map(rankingName => ({
        label: college.rankings[rankingName].name,
        value: `#${formatNumber(
          college.rankings[rankingName].value
        )} of ${formatNumber(college.rankings[rankingName].total)}`,
        rank: college.rankings[rankingName].value,
        ref: '/rankings'
      }))
    rankings.sort((a, b) => a.rank - b.rank)

    const sampleRankings = rankings.slice(
      0,
      Math.min(rankings.length, MAX_SAMPLE_RANKINGS)
    )

    return (
      <Paper className={classes.root}>
        <div className={classes.cardContent}>
          <Grid container>
            <Grid item xs={12}>
              <div className={classes.headerContainer}>
                <div className={classes.icon}>
                  <StarIcon
                    style={{
                      color: blue[100],
                      fontSize: 64
                    }}
                  />
                </div>
                <Typography
                  className={classes.heading}
                  variant="display1"
                  component="h3"
                >
                  {rankingTitle}
                </Typography>
                <Typography
                  className={classes.subheading}
                  variant="subheading"
                  component="p"
                >
                  {rankingDescription}
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className={classes.sampleRankingsContainer}>
                {sampleRankings.map(({ label, value, ref }, ind) => (
                  <div className={classes.sampleRankingItem} key={ind}>
                    <Typography
                      className={classes.rankingTitle}
                      variant="subheading"
                      component="h4"
                    >
                      <a
                        className={classes.rankingLink}
                        onClick={this.onRankingClick(ref)}
                      >
                        {label}
                      </a>
                    </Typography>
                    <Typography
                      className={classes.rankingValue}
                      variant="body2"
                      component="p"
                    >
                      {value}
                    </Typography>
                  </div>
                ))}
              </div>
            </Grid>
          </Grid>
        </div>
        <FactFooter label={footerLabel} onClickCTA={onPushRoute} />
      </Paper>
    )
  }
}

export default withStyles(styles)(Rankings)
