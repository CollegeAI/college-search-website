// @flow

import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import classnames from 'classnames'

// Material ui colors
import green from '@material-ui/core/colors/green'
import blue from '@material-ui/core/colors/blue'

import { withStyles } from '@material-ui/core/styles'

// Import Sections
import InformationCard from '../../../components/InformationCard'
import GradeLabel from '../../../components/GradeLabel'
import ListFacts from '../../../components/ListFacts'
import CollegeRankingsList from '../../../components/CollegeRankingsList'

type Props = {
  classes: Object
}

const styles = theme => ({
  leftFacts: {
    paddingRight: 15,
    marginBottom: 32
  },
  rightFacts: {
    paddingLeft: 15,
    marginBottom: 32
  }
})

export class PopularMajors extends React.PureComponent<Props> {
  render() {
    const { classes } = this.props

    const name = 'Rensselaer Polytechnic Institute'
    const cardHeader = `${name} Majors`
    const cardSubheader = `Discover the majors and programs offered by ${name} and the types of degrees awarded.`

    const majorsListFacts = {
      heading: 'Most Popular Majors',
      items: [
        {
          label: 'Economics',
          value: '218 Graduates'
        },
        {
          label: 'Social Sciences',
          value: '164 Graduates'
        },
        {
          label: 'History',
          value: '137 Graduates'
        },
        {
          label: 'Political Science and Government',
          value: '136 Graduates'
        },
        {
          label: 'Mathematics & Statistics',
          value: '121 Graduates'
        },
        {
          label: 'Computer Science',
          value: '111 Graduates'
        },
        {
          label: 'Computational and Applied Mathematics',
          value: '91 Graduates'
        },
        {
          label: 'Ecology and Evolutionary Biology',
          value: '83 Graduates'
        },
        {
          label: 'Neuroscience and Neurobiology',
          value: '82 Graduates'
        },
        {
          label: 'Research and Experimental Psychology',
          value: '75 Graduates'
        }
      ],
      expand: {
        show: 3
      }
    }

    const collegeRankings = {
      heading: 'Top Ranked Majors',
      items: [
        {
          label: 'Best Colleges for Architecture in America',
          rank: 17,
          total: 116
        },
        {
          label: 'Best Colleges for Physics in America',
          rank: 17,
          total: 126
        },
        {
          label: 'Best Colleges for Computer Science in America',
          rank: 23,
          total: 126
        },
        {
          label: 'Political Science and Government',
          rank: 13,
          total: 126
        },
        {
          label: 'Mathematics & Statistics',
          rank: 17,
          total: 126
        },
        {
          label: 'Computer Science',
          rank: 17,
          total: 126
        },
        {
          label: 'Computational and Applied Mathematics',
          rank: 17,
          total: 126
        },
        {
          label: 'Ecology and Evolutionary Biology',
          rank: 17,
          total: 126
        },
        {
          label: 'Neuroscience and Neurobiology',
          rank: 17,
          total: 126
        },
        {
          label: 'Research and Experimental Psychology',
          rank: 17,
          total: 126
        }
      ],
      expand: {
        show: 3
      }
    }

    return (
      <InformationCard header={cardHeader} subheader={cardSubheader}>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <div className={classes.leftFacts}>
              <CollegeRankingsList {...collegeRankings} />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.rightFacts}>
              <ListFacts {...majorsListFacts} />
            </div>
          </Grid>
        </Grid>
      </InformationCard>
    )
  }
}

export default withStyles(styles)(PopularMajors)
