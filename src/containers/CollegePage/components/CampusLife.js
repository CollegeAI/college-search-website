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

// Import Sections
import LetterGrade from '../../../components/LetterGrade'
import ListFacts from '../../../components/ListFacts'
import LargeFact from '../../../components/LargeFact'
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
  acceptanceRate: {
    textAlign: 'left'
  },
  netPriceValueContainer: {
    display: 'inline-flex',
    alignItems: 'flex-end',
    width: '100%',
    color: '#464646'
  },
  netPriceValue: {
    fontSize: 48,
    color: '#464646'
  },
  leftFacts: {
    padding: '0px 15px 40px 0px'
  },
  rightFacts: {
    padding: '0px 30px 40px 15px'
  }
})

export class CampusLife extends React.PureComponent<Props> {
  render() {
    const { classes, onPushRoute } = this.props
    const name = 'Harvard University'
    const footerLabel = 'Read More About Campus Life'
    const percentFreshmenLivingOnCampus = '--'
    const leftCampusFacts = [
      {
        label: 'On-Campus Housing Available',
        value: '--'
      },
      {
        label: 'Freshmen Required to Live on Campus',
        value: '--'
      },
      {
        label: 'Undergrads in College Housing',
        value: '--'
      },
      {
        label: 'Average Housing Costs',
        value: '--'
      }
    ]

    const rightCampusFacts = [
      {
        label: 'Meal Plan Available',
        value: '--'
      },
      {
        label: 'Average Meal Plan Cost',
        value: '--'
      }
    ]

    const largeFact = {
      label: 'Freshmen Live On-Campus',
      primary: percentFreshmenLivingOnCampus
    }

    return (
      <Paper className={classes.root}>
        <div className={classes.cardContent}>
          <Grid container>
            <Grid item xs={12}>
              <Typography
                className={classes.title}
                variant="display1"
                component="p"
              >
                Campus Life
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className={classes.leftFacts}>
                <LargeFact
                  label={largeFact.label}
                  primary={largeFact.primary}
                />
                <ListFacts items={leftCampusFacts} />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className={classes.rightFacts}>
                <div className={classes.admissionFacts}>
                  <ListFacts items={rightCampusFacts} />
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
        <FactFooter label={footerLabel} onClickCTA={onPushRoute} />
      </Paper>
    )
  }
}

export default withStyles(styles)(CampusLife)
