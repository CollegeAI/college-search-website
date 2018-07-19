// @flow

import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { Helmet } from 'react-helmet'
import classnames from 'classnames'
import { withStyles } from '@material-ui/core/styles'

// Import Sections
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CollegePageTemplate from '../../components/CollegePageTemplate'
import CenteredContent from '../../components/CenteredContent'
import CollegePageHeader from '../../components/CollegePageHeader'
import CollegeHeaderOverlay from '../../components/CollegeHeaderOverlay'
import SimilarCollegesCard from '../../components/SimilarCollegesCard'
import AddToList from '../../components/AddToList'
import { actions as apiActions } from '../../api/redux'

import Housing from './components/housing'
import Food from './components/food'
import CampusQuality from './components/campus-quality'
import Sports from './components/sports'
import ClubsAndActivities from './components/clubs-and-activities'
import GreekLife from './components/greek-life'
import PartyScene from './components/party-scene'

type Props = {
  classes: Object,
  isAdded: boolean,
  college: Object
}

const styles = theme => ({
  root: {}
})

const similarCollegesTitle = `Explore Student Life at Similar Colleges`

export class CollegeCampusLifePage extends React.PureComponent<Props> {
  goBackClick = () => {
    const { pushRoute, college: { id: collegeId } } = this.props
    pushRoute(`/colleges/${collegeId}`)
  }

  onSimilarCollegesPushRoute = (route: string) => {
    const { pushRoute, college: { id: collegeId } } = this.props
    pushRoute(`${route}/students`)
  }

  render() {
    const {
      classes,
      pushRoute,
      college,
      collegeAddedList,
      onAddCollegeToList,
      onRemoveCollegeFromList
    } = this.props

    if (!college.id) {
      return null
    }

    const isAdded = collegeAddedList.some(c => c.id === college.id)

    const name = college.name
    const pageTitle = `${name} Campus Life`
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>College Search Website: College Admissions</title>
        </Helmet>
        <CollegePageTemplate
          pageTitle={pageTitle}
          isAdded={isAdded}
          college={college}
          goBackClick={this.goBackClick}
          onAddCollegeToList={onAddCollegeToList}
          onRemoveCollegeFromList={onRemoveCollegeFromList}
        >
          <Housing college={college} />
          <Food college={college} />
          <CampusQuality college={college} />
          <Sports college={college} />
          <ClubsAndActivities college={college} />
          <PartyScene college={college} />
          <GreekLife college={college} />
          <SimilarCollegesCard
            title={similarCollegesTitle}
            pushRoute={this.onSimilarCollegesPushRoute}
            college={college}
          />
        </CollegePageTemplate>
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
  withStyles(styles)(CollegeCampusLifePage)
)
