// @flow

import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { Helmet } from 'react-helmet'
import classnames from 'classnames'

// Material ui colors
import grey from '@material-ui/core/colors/grey'
import blue from '@material-ui/core/colors/blue'
import green from '@material-ui/core/colors/green'
import lightGreen from '@material-ui/core/colors/lightGreen'

import { withStyles } from '@material-ui/core/styles'

// Import Sections
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SearchFilter from '../../components/SearchFilter'
import Rating from '../../components/Rating'
import CollegePageHeader from '../../components/CollegePageHeader'
import { actions as apiActions } from '../../api/redux'

import HeaderOverlayBar from './HeaderOverlayBar'
import CollegeContent from './CollegeContent'

type Props = {
  classes: Object
}

const styles = theme => ({
  root: {
    textAlign: 'center',
    position: 'relative'
  },
  background: {
    width: '100%',
    height: '100%',
    backgroundColor: '#e6e6e6',
    position: 'absolute',
    zIndex: -1000
  }
})

export class CollegePage extends React.PureComponent<Props> {
  onPushCollegeRoute = route => {
    const schoolUrl = 'rpi'
    const { college = {}, pushRoute } = this.props
    const { id: collegeId } = college
    return () => {
      pushRoute(`/colleges/${collegeId}/${route}`)
    }
  }

  render() {
    const {
      classes,
      college,
      pushRoute,
      collegeAddedList,
      onAddCollegeToList,
      onRemoveCollegeFromList
    } = this.props
    if (!college.id) {
      return null
    }
    const descriptionValue = 'bestColleges'
    let order =
      college.rankings[descriptionValue] &&
      college.rankings[descriptionValue].value
    let description
    if (order) {
      description = order ? `#${order} Best Colleges in America` : ''
    }

    const isAdded = collegeAddedList.some(c => c.id === college.id)
    return (
      <div className={classes.root}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>CSW: Explore Schools</title>
        </Helmet>
        <div className={classes.background} />
        <div className={classes.container}>
          <Header />
          <CollegePageHeader
            onAddCollegeToList={onAddCollegeToList}
            onRemoveCollegeFromList={onRemoveCollegeFromList}
            college={college}
            isAdded={isAdded}
          />
          {description && <HeaderOverlayBar description={description} />}
          <CollegeContent
            onAddCollegeToList={onAddCollegeToList}
            onRemoveCollegeFromList={onRemoveCollegeFromList}
            isAdded={isAdded}
            onPushCollegeRoute={this.onPushCollegeRoute}
            pushRoute={pushRoute}
            college={college}
          />
          <Footer />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    college: state.api.college,
    collegeAddedList: state.api.collegeAddedList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pushRoute: (route: string) => dispatch(push(route)),
    onAddCollegeToList: (college: Object) =>
      dispatch(apiActions.addCollegeToList(college)),
    onRemoveCollegeFromList: (college: Object) =>
      dispatch(apiActions.removeCollegeFromList(college))
  }
}

export default connect((mapStateToProps: any), (mapDispatchToProps: any))(
  withStyles(styles)(CollegePage)
)
