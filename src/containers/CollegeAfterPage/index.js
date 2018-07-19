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

import OverallValue from './components/overall-value'
import Earnings from './components/earnings'
import JobPlacement from './components/job-placement'
import StudentDebt from './components/student-debt'

type Props = {
  classes: Object,
  isAdded: boolean,
  college: Object
}

const styles = theme => ({
  root: {}
})

const similarCollegesTitle = `Explore Life After Graduation at Similar Colleges`

export class CollegeAfterPage extends React.PureComponent<Props> {
  goBackClick = () => {
    const schoolUrl = 'rpi'
    this.props.history.push(`/colleges/${schoolUrl}`)
  }

  onExternalLinkClick = (link: string) => {
    return () => {
      const win = window.open(link, '_blank')
      win.focus()
    }
  }

  onSimilarCollegesPushRoute = (route: string) => {
    const { pushRoute, college: { id: collegeId } } = this.props
    pushRoute(`${route}/after-college`)
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
    const pageTitle = `After ${name}`
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
          <OverallValue college={college} />
          <Earnings college={college} />
          <JobPlacement college={college} />
          <StudentDebt
            college={college}
            onExternalLinkClick={this.onExternalLinkClick}
          />
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
  withStyles(styles)(CollegeAfterPage)
)
