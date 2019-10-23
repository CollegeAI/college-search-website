// @flow

import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Typography from '@material-ui/core/Typography'
import classnames from 'classnames'
import { Helmet } from 'react-helmet'
import { Link, Element } from 'react-scroll'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

// Material ui colors
import indigo from '@material-ui/core/colors/indigo'
import blue from '@material-ui/core/colors/blue'
import lightBlue from '@material-ui/core/colors/lightBlue'
import lightGreen from '@material-ui/core/colors/lightGreen'
import green from '@material-ui/core/colors/green'

import { withStyles } from '@material-ui/core/styles'

// Import Sections
import BestColleges from './components/best-colleges'

type Props = {
  classes: Object,
  history: any
}

const styles = theme => ({
  root: {
    textAlign: 'center',
    position: 'relative',
    backgroundColor: '#e6e6e6'
  },
  heading: {
    height: 210
  },
  headingBackgroundTop: {
    width: '100%',
    height: 100,
    backgroundColor: lightGreen[300],
    display: 'inline-flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-start'
  },
  headingBackgroundBottom: {
    width: '100%',
    height: 110,
    backgroundColor: '#fff',
    color: '#000'
  },
  headingDescriptionContainer: {
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: '8px 0px',
    boxSizing: 'border-box',
    height: '100%'
  },
  description: {
    paddingTop: 10
  },
  headingText: {
    color: '#fff',
    paddingTop: 20
  },
  heading: {
    color: '#fff'
  },
  subheading: {
    marginBottom: 24
  },
  sortCategorys: {
    width: '100%',
    display: 'inline-flex'
  },
  sortCategoryItem: {
    border: `1px solid ${blue[500]}`,
    color: blue[500],
    borderRaidus: 2,
    padding: '8px 12px',
    marginRight: 8,
    cursor: 'pointer'
  },
  rankingsContainer: {
    marginTop: 32
  }
})

export class CollegeRankingsOverviewPage extends React.PureComponent<Props> {
  goToCollegeHomePage = () => {
    this.props.pushRoute(`/colleges/search`)
  }

  onCategoryClick = (categoryId: string) => {
    this.props.pushRoute(`/colleges/search?sortorder=${categoryId}`)
  }

  render() {
    const { classes } = this.props

    const bestRankings = [
      {
        header: 'Best Colleges',
        description:
          'Explore the Best Colleges in America based on analysis of key statistics from the U.S. Department of Education and millions of reviews.',
        categories: [
          { name: `Best Colleges`, id: `Best Colleges` },
          { name: `Best Community Colleges`, id: `Best Community Colleges` },
          {
            name: `Best Liberal Arts Colleges`,
            link: `Best Liberal Arts Colleges`
          },
          { name: `Top Public Universities`, id: `Top Public Universities` },
          {
            name: `Top Private Universities`,
            link: `Top Private Universities`
          },
          { name: `Best Value Colleges`, id: `Best Value Colleges` },
          { name: `Best Online Colleges`, id: `Best Online Colleges` },
          { name: `Best HBCU Schools`, id: `Best HBCU Schools` },
          { name: `Best Catholic Colleges`, id: `Best Catholic Colleges` },
          { name: `Best Christian Colleges`, id: `Best Christian Colleges` },
          { name: `Best Women's Colleges`, id: `Best Women's Colleges` },
          { name: `Best Big Colleges`, id: `Best Big Colleges` },
          { name: `Best Small Colleges`, id: `Best Small Colleges` }
        ]
      },
      {
        header: 'Best by Major',
        description: `Explore college rankings by major to find a college that's right for you.`,
        categories: [
          { name: 'Accounting and Finance', id: 'Accounting and Finance' },
          { name: 'Agricultural Sciences', id: 'Agricultural Sciences' },
          { name: 'Anthropology', id: 'Anthropology' },
          { name: 'Architecture', id: 'Architecture' },
          { name: 'Art', id: 'Art' },
          { name: 'Biology', id: 'Biology' },
          { name: 'Business', id: 'Business' },
          { name: 'Chemistry', id: 'Chemistry' },
          { name: 'Communications', id: 'Communications' },
          { name: 'Computer Science', id: 'Computer Science' },
          { name: 'Criminal Justice', id: 'Criminal Justice' },
          { name: 'Culinary Arts', id: 'Culinary Arts' },
          { name: 'Design', id: 'Design' },
          { name: 'Economics', id: 'Economics' },
          { name: 'Education', id: 'Education' },
          { name: 'Engineering', id: 'Engineering' },
          { name: 'English', id: 'English' },
          { name: 'Environmental Science', id: 'Environmental Science' },
          { name: 'Film and Photography', id: 'Film and Photography' },
          { name: 'History', id: 'History' },
          { name: 'Information Technology', id: 'Information Technology' },
          { name: 'International Relations', id: 'International Relations' },
          { name: 'Kinesiology and Therapy', id: 'Kinesiology and Therapy' },
          { name: 'Math', id: 'Math' },
          { name: 'Music', id: 'Music' },
          { name: 'Nursing', id: 'Nursing' },
          { name: 'Performing Arts', id: 'Performing Arts' },
          { name: 'Philosophy', id: 'Philosophy' },
          { name: 'Physics', id: 'Physics' },
          { name: 'Political Science', id: 'Political Science' },
          { name: 'Psychology', id: 'Psychology' },
          { name: 'Religious Studies', id: 'Religious Studies' }
        ]
      },
      {
        header: 'Best by State',
        description:
          'Explore the best colleges by state to find good colleges near you.',
        categories: [
          { name: 'Alabama', id: 'Alabama' },
          { name: 'Alaska', id: 'Alaska' },
          { name: 'Arkansas', id: 'Arkansas' },
          { name: 'Arizona', id: 'Arizona' },
          { name: 'California', id: 'California' },
          { name: 'Colorado', id: 'Colorado' },
          { name: 'Connecticut', id: 'Connecticut' },
          { name: 'Delaware', id: 'Delaware' },
          { name: 'Florida', id: 'Florida' },
          { name: 'Georgia', id: 'Georgia' },
          { name: 'Hawaii', id: 'Hawaii' },
          { name: 'Idaho', id: 'Idaho' },
          { name: 'Illinois', id: 'Illinois' },
          { name: 'Indiana', id: 'Indiana' },
          { name: 'Iowa', id: 'Iowa' },
          { name: 'Kansas', id: 'Kansas' },
          { name: 'Kentucky', id: 'Kentucky' },
          { name: 'Louisiana', id: 'Louisiana' },
          { name: 'Maine', id: 'Maine' },
          { name: 'Maryland', id: 'Maryland' },
          { name: 'Massachusetts', id: 'Massachusetts' },
          { name: 'Michigan', id: 'Michigan' },
          { name: 'Minnesota', id: 'Minnesota' },
          { name: 'Mississippi', id: 'Mississippi' },
          { name: 'Missouri', id: 'Missouri' },
          { name: 'Montana', id: 'Montana' },
          { name: 'Nebraska', id: 'Nebraska' },
          { name: 'Nevada', id: 'Nevada' },
          { name: 'New Hampshire', id: 'New Hampshire' },
          { name: 'New Jersey', id: 'New Jersey' },
          { name: 'New Mexico', id: 'New Mexico' },
          { name: 'New York', id: 'New York' },
          { name: 'North Carolina', id: 'North Carolina' },
          { name: 'North Dakota', id: 'North Dakota' },
          { name: 'Ohio', id: 'Ohio' },
          { name: 'Oklahoma', id: 'Oklahoma' },
          { name: 'Oregon', id: 'Oregon' },
          { name: 'Pennsylvania', id: 'Pennsylvania' },
          { name: 'Rhode Island', id: 'Rhode Island' },
          { name: 'South Carolina', id: 'South Carolina' },
          { name: 'South Dakota', id: 'South Dakota' },
          { name: 'Tennessee', id: 'Tennessee' },
          { name: 'Texas', id: 'Texas' },
          { name: 'Utah', id: 'Utah' },
          { name: 'Vermont', id: 'Vermont' },
          { name: 'Virginia', id: 'Virginia' },
          { name: 'Washington', id: 'Washington' },
          { name: 'West Virginia', id: 'West Virginia' },
          { name: 'Wisconsin', id: 'Wisconsin' },
          { name: 'Wyoming', id: 'Wyoming' }
        ]
      },
      {
        header: 'Admissions',
        description:
          'Find colleges to apply to with rankings based on admissions criteria.',
        categories: [
          { name: 'Hardest to Get In', id: 'Hardest to Get In' },
          {
            name: 'Best Colleges with No Application Fee',
            link: 'Best Colleges with No Application Fee'
          },
          {
            name: 'Best Test Optional Colleges',
            link: 'Best Test Optional Colleges'
          },
          {
            name: 'Best Colleges that Accept the Common App',
            link: 'Best Colleges that Accept the Common App'
          }
        ]
      },
      {
        header: 'Campus Life',
        description:
          'See what campus life is really like at thousands of colleges and compare campus rankings.',
        categories: [
          {
            name: 'Colleges with the Best Student Life',
            link: 'Colleges with the Best Student Life'
          },
          { name: 'Top Party Schools', id: 'Top Party Schools' },
          { name: 'Best College Dorms', id: 'Best College Dorms' },
          { name: 'Best College Food', id: 'Best College Food' },
          {
            name: 'Best Greek Life Colleges',
            link: 'Best Greek Life Colleges'
          },
          { name: 'Best College Athletics', id: 'Best College Athletics' },
          { name: 'Best College Campuses', id: 'Best College Campuses' },
          { name: 'Best College Locations', id: 'Best College Locations' },
          { name: 'Safest College Campuses', id: 'Safest College Campuses' }
        ]
      },
      {
        header: 'Students',
        description:
          'Find a college that matches your preferences and explore student reviews.',
        categories: [
          { name: 'Most Diverse Colleges', id: 'Most Diverse Colleges' },
          { name: 'Most Liberal Colleges', id: 'Most Liberal Colleges' },
          {
            name: 'Most Conservative Colleges',
            link: 'Most Conservative Colleges'
          },
          {
            name: 'Best Colleges for Student Athletes',
            link: 'Best Colleges for Student Athletes'
          }
        ]
      },
      {
        header: 'Academics',
        description:
          'Explore top academic colleges based on admissions selectivity, research expenditures, and professor quality.',
        categories: [
          {
            name: 'Colleges with the Best Academics',
            link: 'Colleges with the Best Academics'
          },
          {
            name: 'Colleges with the Best Professors',
            link: 'Colleges with the Best Professors'
          }
        ]
      }
    ]

    const sortCategories = bestRankings.map(r => r.header)

    return (
      <div className={classes.root}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>College Search Website: College Rankings</title>
        </Helmet>
        <div>
          <Header />
          <div className={classes.heading}>
            <div className={classes.headingBackgroundTop}>
              <div
                style={{
                  width: '100%',
                  maxWidth: 860,
                  margin: '0px auto',
                  textAlign: 'left'
                }}
              >
                <Typography
                  className={classes.headingText}
                  variant="display2"
                  gutterBottom
                >
                  2019 College Rankings
                </Typography>
              </div>
            </div>
            <div className={classes.headingBackgroundBottom}>
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  maxWidth: 860,
                  margin: '0px auto',
                  textAlign: 'left'
                }}
              >
                <div className={classes.headingDescriptionContainer}>
                  <Typography
                    className={classes.description}
                    variant="subheading"
                  >
                    Explore college rankings based on rigorous analysis of key
                    statistics and millions of student and alumni reviews.
                  </Typography>
                  <div className={classes.sortCategorys}>
                    {sortCategories.map((cat, ind) => (
                      <Link
                        key={ind}
                        className={classes.sortCategoryItem}
                        to={cat}
                        smooth={true}
                        duration={300}
                        offset={-12}
                        isDynamic
                      >
                        {cat}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.rankingsContainer}>
              {bestRankings.map((bestRanking, ind) => (
                <Element name={bestRanking.header} key={ind}>
                  <BestColleges
                    {...bestRanking}
                    onCategoryClick={this.onCategoryClick}
                  />
                </Element>
              ))}
            </div>
            <Footer />
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    pushRoute: (route: string) => dispatch(push(route))
  }
}
export default connect((mapStateToProps: any), (mapDispatchToProps: any))(
  withStyles(styles)(CollegeRankingsOverviewPage)
)
