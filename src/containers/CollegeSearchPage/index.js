// @flow

import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import classnames from 'classnames'

import { push as pushRoute } from 'react-router-redux'

import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

// Material ui colors
import indigo from '@material-ui/core/colors/indigo'
import blue from '@material-ui/core/colors/blue'
import lightBlue from '@material-ui/core/colors/lightBlue'
import green from '@material-ui/core/colors/green'
import grey from '@material-ui/core/colors/grey'

import HomeIcon from '@material-ui/icons/Home'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance'
import TerrainIcon from '@material-ui/icons/Terrain'
import WbSunnyIcon from '@material-ui/icons/WbSunny'
import NaturePeopleIcon from '@material-ui/icons/NaturePeople'

import { withStyles } from '@material-ui/core/styles'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

// Import Sections
import CenteredContent from '../../components/CenteredContent'
import SearchFilter from '../../components/SearchFilter'
import CollegeCard from '../../components/CollegeCard'
import CollegeCategories from './CollegeCategories'
import Banner from './Banner'

import styles from './styles'
import { actions } from './redux'
import { actions as apiActions } from '../../api/redux'

type Props = {
  classes: Object,
  goToCollegePage: string => void
}

export class CollegeSearchPage extends React.PureComponent<Props> {
  onToggleAddCollege = (collegeId: string) => {
    const {
      collegeAddedList,
      onAddCollegeToList,
      onRemoveCollegeFromList
    } = this.props

    if (collegeAddedList.some(c => c.id === collegeId)) {
      onRemoveCollegeFromList({ college: { id: collegeId } })
    } else {
      onAddCollegeToList({ college: { id: collegeId } })
    }
  }

  render() {
    const {
      classes,
      colleges,
      goToCollegePage,
      setFilter,
      filterMap,
      setSortOrder,
      sortOrder,
      collegeAddedList
    } = this.props

    return (
      <div className={classes.root}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>CSW: Explore Schools and Neighborhoods</title>
        </Helmet>
        <div>
          <Header />
          <Banner />
          <div className={classes.contentContainer}>
            <CenteredContent size="large">
              <div className={classes.content}>
                <SearchFilter filterMap={filterMap} setFilter={setFilter} />
                <div className={classes.results}>
                  <CollegeCategories
                    sortOrder={sortOrder}
                    setSortOrder={setSortOrder}
                  />
                  <div style={{ marginTop: 8, marginLeft: 20 }}>
                    {colleges.map((college, ind) => (
                      <div style={{ padding: '8px 0px' }} key={ind}>
                        <CollegeCard
                          sortOrder={sortOrder}
                          college={college}
                          isAdded={collegeAddedList.some(
                            c => c.id === college.collegeId
                          )}
                          onToggleAddCollege={this.onToggleAddCollege}
                          goToCollegePage={goToCollegePage}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CenteredContent>
          </div>
          <Footer />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    ...state.collegeSearchPage,
    collegeAddedList: state.api.collegeAddedList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    goToCollegePage: (collegeId: string) =>
      dispatch(pushRoute(`/colleges/${collegeId}`)),
    setFilter: (filterKey: string, filterValue: FilterValue) =>
      dispatch(actions.setFilter(filterKey, filterValue)),
    setSortOrder: (sortOrder: Object) =>
      dispatch(actions.setSortOrder(sortOrder)),
    onAddCollegeToList: (college: Object) =>
      dispatch(apiActions.addCollegeToList(college)),
    onRemoveCollegeFromList: (college: Object) =>
      dispatch(apiActions.removeCollegeFromList(college))
  }
}

export default connect((mapStateToProps: any), (mapDispatchToProps: any))(
  withStyles(styles)(CollegeSearchPage)
)
