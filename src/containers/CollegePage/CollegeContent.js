// @flow

import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Hidden from '@material-ui/core/Hidden'
import * as Scroll from 'react-scroll'
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from 'react-scroll'
import classnames from 'classnames'

// Material ui colors
import green from '@material-ui/core/colors/green'
import blue from '@material-ui/core/colors/blue'

import { withStyles } from '@material-ui/core/styles'

// Import Sections
import CenteredContent from '../../components/CenteredContent'
import AddToList from '../../components/AddToList'

import ReportCard from './components/ReportCard'
import About from './components/About'
import BranchCampuses from './components/BranchCampuses'
import Rankings from './components/Rankings'
import Admissions from './components/Admissions'
// import WillYouGetIn from './components/WillYouGetIn'
import Cost from './components/Cost'
import Academics from './components/Academics'
import Majors from './components/Majors'
import Students from './components/Students'
import CampusLife from './components/CampusLife'
import AfterCollege from './components/AfterCollege'
import SimilarColleges from '../../components/SimilarCollegesCard'
import Reviews from './components/Reviews'

type Props = {
  classes: Object,
  college: Object,
  onAddCollegeToList: ({ id: string }) => void,
  onRemoveCollegeFromList: ({ id: string }) => void,
  onPushCollegeRoute: Function
}

type State = {
  currentCardInd: number
}

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: 32
  },
  sidebar: {
    position: 'relative',
    textAlign: 'left',
    position: '-webkit-sticky',
    position: 'sticky',
    top: 32
  },
  linksContainer: {
    display: 'inline-flex',
    flexDirection: 'column',
    padding: '24px 4px 16px 16px',
    paddingTop: 16
  },
  sidebarLink: {
    color: '#787878',
    textAlign: 'left',
    marginBottom: 10,
    height: 20,
    cursor: 'pointer',
    fontSize: '0.875rem'
  },
  sidebarLinkActive: {
    color: blue[500],
    fontWeight: 600
  },
  navDot: {
    animationDuration: '0.6s',
    animationFillMode: 'forwards',
    animationName: 'indicator-fade-in',
    animationDelay: '0.8s',
    background: blue[500],
    borderRadius: '50%',
    marginTop: 21,
    top: 0,
    height: 8,
    width: 8,
    position: 'absolute',
    transition: '-webkit-transform 0.15s ease',
    transition: 'transform 0.15s ease',
    transition: 'transform 0.15s ease, -webkit-transform 0.15s ease',
    willChange: 'transform'
  },
  collegeElementContainer: {
    padding: '0px 20px',
    margin: '0px auto',
    maxWidth: 810
  }
})

const collegeElements = [
  {
    label: 'Report Card',
    to: 'report-card',
    El: ReportCard
  },
  {
    label: 'About',
    to: 'about',
    El: About
  },
  // {
  //   label: 'Branch Campuses',
  //   to: 'branchCampus',
  //   El: BranchCampuses
  // },
  {
    label: 'Rankings',
    to: 'rankings',
    El: Rankings,
    link: 'rankings'
  },
  {
    label: 'Admissions',
    to: 'admissions',
    El: Admissions,
    link: 'admissions'
  },
  // NOTE: This depends on a graph of student gpa vs sat score chart
  // {
  //   label: 'Will You Get In?',
  //   to: 'will-you-get-in',
  //   El: ReportCard
  // },
  {
    label: 'Cost',
    to: 'cost',
    El: Cost,
    link: 'cost'
  },
  {
    label: 'Academics',
    to: 'academics',
    El: Academics,
    link: 'academics'
  },
  {
    label: 'Majors',
    to: 'majors',
    El: Majors,
    link: 'majors'
  },
  {
    label: 'Students',
    to: 'students',
    El: Students,
    link: 'students'
  },
  {
    label: 'Campus Life',
    to: 'campus-life',
    El: CampusLife,
    link: 'campus-life'
  },
  {
    label: 'After College',
    to: 'after-college',
    El: AfterCollege,
    link: 'after-college'
  }
  /*            {
    label: 'Similar Colleges',
    to: 'similar-colleges',
    El: SimilarColleges
  },
  {
    label: 'Reviews',
    to: 'reviews',
    El: Reviews,
    link: 'reviews'
  }*/
]

export class CollegeContent extends React.Component<Props, State> {
  state = {
    currentCardInd: 0
  }

  componentDidMount = () => {
    Events.scrollEvent.register('begin', function(to, element) {})

    Events.scrollEvent.register('end', function(to, element) {})

    scrollSpy.update()
  }

  componentWillUnmount = () => {
    Events.scrollEvent.remove('begin')
    Events.scrollEvent.remove('end')
  }

  handleSetActive = (link: string) => {
    const ind = collegeElements.findIndex(e => e.to === link)
    this.setState({ currentCardInd: ind })
  }

  onToggleAddToList = () => {
    const {
      isAdded,
      college,
      onAddCollegeToList,
      onRemoveCollegeFromList
    } = this.props

    if (isAdded) {
      onRemoveCollegeFromList({ college: { id: college.id } })
    } else {
      onAddCollegeToList({ college: { id: college.id } })
    }
  }

  render() {
    const {
      classes,
      college,
      isAdded = false,
      pushRoute,
      onPushCollegeRoute
    } = this.props
    const { currentCardInd } = this.state

    return (
      <div className={classes.root}>
        <CenteredContent>
          <Grid container>
            <Hidden smDown>
              <Grid item md={2}>
                <div className={classes.sidebar}>
                  <div
                    className={classes.navDot}
                    style={{
                      transform: `translateY(${30 * currentCardInd}px)`
                    }}
                  />
                  <div className={classes.linksContainer}>
                    {collegeElements.map(({ label, to }, ind) => (
                      <Link
                        key={ind}
                        className={classnames(classes.sidebarLink, {
                          [classes.sidebarLinkActive]: ind === currentCardInd
                        })}
                        activeClass={classes.sidebarLinkActive}
                        to={to}
                        spy={true}
                        smooth={true}
                        duration={300}
                        offset={-48}
                        isDynamic
                        onSetActive={this.handleSetActive}
                      >
                        {label}
                      </Link>
                    ))}
                    <AddToList
                      rootStyle={{
                        padding: 8,
                        marginTop: 16,
                        border: `1px solid ${blue[500]}`,
                        borderRadius: 3
                      }}
                      onClick={this.onToggleAddToList}
                      isAdded={isAdded}
                    />
                  </div>
                </div>
              </Grid>
            </Hidden>
            <Grid item xs={12} md={10}>
              <div className={classes.collegeElementContainer}>
                {collegeElements.map(
                  ({ to, label, El, link, props = {} }, ind) => (
                    <Element
                      name={to}
                      key={ind}
                      className={classes.collegeElement}
                    >
                      <El
                        to={to}
                        label={label}
                        college={college}
                        pushRoute={pushRoute}
                        {...props}
                        {...(link
                          ? { onPushRoute: onPushCollegeRoute(link) }
                          : {})}
                      />
                    </Element>
                  )
                )}
                <AddToList
                  isAdded={isAdded}
                  rootStyle={{
                    padding: 8,
                    marginTop: 16,
                    border: '1px solid #4caf50',
                    borderRadius: 3,
                    width: 'auto',
                    backgroundColor: blue[500]
                  }}
                  onClick={this.onToggleAddToList}
                  iconStyle={{ color: '#fff' }}
                  textStyle={{ color: '#fff' }}
                />
              </div>
            </Grid>
          </Grid>
        </CenteredContent>
      </div>
    )
  }
}

export default withStyles(styles)(CollegeContent)
