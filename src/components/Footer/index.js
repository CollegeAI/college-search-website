// @flow

// https://medium.com/@diamondgfx/nextjs-lessons-learned-part-2-f1781237cf5c

import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'

import { withStyles } from '@material-ui/core/styles'

import { Link } from 'react-router-dom'

import Icons from '../Icons'
import styles from './styles'

type Props = {
  classes?: Object
}
type State = {}

const links = [
  {
    name: 'About',
    to: '/team'
  },
  {
    name: 'Terms',
    to: '/team'
  },
  {
    name: 'Privacy',
    to: '/team'
  },
  {
    name: 'Help',
    to: '/team'
  }
]

const categories = [
  {
    label: 'Colleges',
    list: [
      {
        name: 'Public',
        to: '/colleges'
      },
      {
        name: 'Private',
        to: '/colleges'
      },
      {
        name: 'Rankings',
        to: '/colleges'
      },
      {
        name: 'Search',
        to: '/colleges'
      }
    ]
  },
  {
    label: 'Application',
    list: [
      // {
      //   name: 'Financial Aid',
      //   to: '/colleges'
      // },
      // {
      //   name: 'Test Prep',
      //   to: '/colleges'
      // },
      // {
      //   name: 'Athletics',
      //   to: '/colleges'
      // },
      // {
      //   name: 'Opportunities',
      //   to: '/colleges'
      // }
    ]
  },
  {
    label: 'Career',
    list: [
      // {
      //   name: 'Jobs',
      //   to: '/colleges'
      // },
      // {
      //   name: 'Interests',
      //   to: '/colleges'
      // },
      // {
      //   name: 'Value',
      //   to: '/colleges'
      // },
      // {
      //   name: 'Outlook',
      //   to: '/colleges'
      // }
    ]
  }
]

export class Footer extends React.Component<Props, State> {
  render() {
    const { classes = {} } = this.props
    return (
      <div className={classes.footerContainer}>
        <footer className={classes.footer}>
          <div className={classes.footerItem}>
            <Grid container>
              {/* <Grid item md={2}>
                <Grid
                  container
                  direction="column"
                  spacing={8}
                  className={classes.linkList}
                >
                  {links.map(link => (
                    <Grid item key={link.name}>
                      <Link to={link.to} className={classes.linkListItem}>
                        {link.name}
                      </Link>
                    </Grid>
                  ))}
                  <Grid item>
                    <Icons name="facebook" />
                    <Icons name="google" />
                    <Icons name="instagram" />
                    <Icons name="twitter" />
                  </Grid>
                </Grid>
              </Grid> */}
              <Grid item md={12} className={classes.description}>
                <Typography
                  variant="subheading"
                  style={{ color: '#888' }}
                  className={classes.descriptionLabel}
                >
                  <b>College Search Website</b> | Discover the schools that are
                  right for you. | Copyright CollegeAI 2019
                </Typography>
                {/* <div className={classes.categoryContainer}>
                  <Grid container>
                    {categories.map((category, ind) => (
                      <Grid item md={4} key={ind}>
                        <div className={classes.category} key={category.label}>
                          <Typography className={classes.categoryLabel}>
                            {category.label}
                          </Typography>
                          <ul className={classes.categoryList}>
                            {category.list.map(categoryItem => (
                              <li key={categoryItem.name}>
                                <Link
                                  to={categoryItem.to}
                                  className={classes.categoryItemName}
                                >
                                  <Typography>{categoryItem.name}</Typography>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </Grid>
                    ))}
                  </Grid>
                </div> */}
              </Grid>
            </Grid>
          </div>
        </footer>
      </div>
    )
  }
}

export default withStyles(styles)(Footer)
