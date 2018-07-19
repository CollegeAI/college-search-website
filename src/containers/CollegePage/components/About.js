// @flow

import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import classnames from 'classnames'

// Material ui colors
import green from '@material-ui/core/colors/green'

import { withStyles } from '@material-ui/core/styles'

type Props = {
  classes: Object
}

const styles = theme => ({
  root: {
    width: '100%',
    marginBottom: 32,
    display: 'inline-flex',
    flexDirection: 'column'
  },
  cardContent: {
    padding: '20px 30px 10px'
  },
  description: {
    fontSize: '1.2rem'
  },
  factItem: {
    marginBottom: 20,
    textAlign: 'left'
  },
  cardAction: {
    height: 54,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    padding: '16px 32px',
    borderTop: '1px solid #e6e6e6',
    boxSizing: 'border-box'
  },
  leftFacts: {
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%'
  },
  rightFacts: {},
  websiteContainer: {
    padding: '10px 0px',
    display: 'inline-flex',
    justifyContent: 'space-between',
    width: '100%'
  },
  link: {
    color: '#2e9adf',
    cursor: 'pointer'
  }
})

export class About extends React.PureComponent<Props> {
  render() {
    const { classes, college } = this.props

    const { name, isPrivate, forProfit, address, athletics } = college

    const state = address.state.name
    const city = address.city
    const zipcode = address.zipcode
    const addr = address.addr

    const cityStateLabel = `${state} / ${city}`

    const collegeType = `${isPrivate ? 'Private ' : 'Public'} ${
      forProfit ? 'for profit' : 'not-for-profit'
    }`

    const facts = [
      {
        label: `${name} is ...`,
        value: collegeType
      },
      ...(athletics
        ? {
            label: 'Athletic Conference',
            value: athletics.classification.conference || ''
          }
        : {})
      // {
      //   label: 'Athletic Conference',
      //   value: 'Ivy Group'
      // }
    ]

    const addressLine1 = addr
    const addressLine2 = `${city}, ${college.address.state.abbr} ${zipcode}`
    const website = college.links.website

    return (
      <Paper className={classes.root}>
        <div className={classes.cardContent}>
          <Grid container>
            <Grid item xs={6}>
              <div className={classes.leftFacts}>
                {facts.map(({ value, label }, ind) => (
                  <div className={classes.factItem} key={ind}>
                    <Typography
                      className={classes.label}
                      variant="subheading"
                      component="p"
                    >
                      {label}
                    </Typography>
                    <Typography
                      className={classes.description}
                      variant="title"
                      component="p"
                    >
                      {value}
                    </Typography>
                  </div>
                ))}
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className={classes.rightFacts}>
                <div className={classes.factItem}>
                  <Typography
                    className={classes.label}
                    variant="subheading"
                    component="p"
                  >
                    Address
                  </Typography>
                  <Typography
                    className={classes.description}
                    variant="title"
                    component="p"
                  >
                    {addressLine1}
                  </Typography>
                  <Typography
                    className={classes.description}
                    variant="title"
                    component="p"
                  >
                    {addressLine2}
                  </Typography>
                </div>
                <div className={classes.factItem}>
                  <Divider />
                  <div className={classes.websiteContainer}>
                    <Typography
                      className={classes.description}
                      variant="title"
                      component="p"
                    >
                      Website
                    </Typography>
                    <Typography
                      className={classes.description}
                      variant="title"
                      component="p"
                    >
                      <a className={classes.link}>{website}</a>
                    </Typography>
                  </div>
                  <Divider />
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className={classes.cardAction}>
          <Typography component="p">{cityStateLabel}</Typography>
        </div>
      </Paper>
    )
  }
}

export default withStyles(styles)(About)
