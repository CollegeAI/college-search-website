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

import AboutTheStudents from './components/about-the-students'
import EthnicDiversity from './components/ethnic-diversity'

type Props = {
  classes: Object,
  isAdded: boolean,
  college: Object
}

const styles = theme => ({
  root: {}
})

const similarCollegesTitle = `Explore Student Life at Similar Colleges`

export class CollegeStudentsPage extends React.PureComponent<Props> {
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
    const pageTitle = `Students at ${name}`
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
          <AboutTheStudents college={college} />
          <EthnicDiversity college={college} />
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
  withStyles(styles)(CollegeStudentsPage)
)
