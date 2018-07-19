// @flow

import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import classnames from 'classnames'

// Material ui colors
import green from '@material-ui/core/colors/green'
import blue from '@material-ui/core/colors/blue'
import grey from '@material-ui/core/colors/grey'

import { withStyles } from '@material-ui/core/styles'

// Import Sections
import CenteredContent from '../../components/CenteredContent'
import AddToList from '../../components/AddToList'

type Props = {
  classes: Object,
  college: Object
}

type State = {
  currentCardInd: number
}

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: 32
  },
  paper: {
    borderTop: `0px solid ${green[400]}`,
    padding: '0px 42px 36px'
  },
  header: {
    padding: '24px 32px 24px'
  },
  title: {
    textAlign: 'left',
    marginBottom: 12
  },
  subheading: {
    textAlign: 'left'
  },
  imgPlaceholder: {
    width: '100%',
    height: 100,
    background: 'linear-gradient(#e66465, #9198e5)'
  },
  nationalTitle: {
    textAlign: 'left',
    margin: '16px 32px'
  },
  rankingItem: {
    width: 250,
    margin: '8px auto',
    border: `1px solid ${grey[600]}`,
    borderRadius: 3,
    cursor: 'pointer'
  },
  rankingContent: {
    padding: 8
  },
  rankingName: {
    textAlign: 'left',
    color: blue[500]
  },
  rankingValue: {
    textAlign: 'left'
  }
})

export class Rankings extends React.PureComponent<Props> {
  onRankingClick = (link: string) => {
    const { pushRoute } = this.props
    return () => {
      pushRoute(link)
    }
  }

  render() {
    const { classes, title, rankings } = this.props

    const subHeading =
      'College Search Website rankings are based on rigorous analysis of data and reviews. Read more about how we calculate our rankings.'

    return (
      <div className={classes.root}>
        <CenteredContent size="medium">
          <Paper className={classes.paper}>
            <Grid container>
              <Grid item xs={12}>
                <div className={classes.header}>
                  <Typography variant="display1" className={classes.title}>
                    {title}
                  </Typography>
                  <Typography className={classes.subheading}>
                    {subHeading}
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="display1"
                  className={classes.nationalTitle}
                >
                  National
                </Typography>
              </Grid>

              {rankings.map((ranking, ind) => (
                <Grid item xs={12} sm={4} key={ind}>
                  <div
                    className={classes.rankingItem}
                    onClick={this.onRankingClick(ranking.link)}
                  >
                    <div className={classes.imgPlaceholder} />
                    <div className={classes.rankingContent}>
                      <Typography
                        variant="subheading"
                        className={classes.rankingName}
                      >
                        {ranking.name}
                      </Typography>
                      <Typography
                        variant="title"
                        className={classes.rankingValue}
                      >
                        {ranking.label}
                      </Typography>
                    </div>
                  </div>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </CenteredContent>
      </div>
    )
  }
}

export default withStyles(styles)(Rankings)
