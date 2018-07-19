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
import CollegePageTemplate from '../../components/CollegePageTemplate'
import SimilarCollegesCard from '../../components/SimilarCollegesCard'
import { actions as apiActions } from '../../api/redux'

import Reviews from './components/reviews'

type Props = {
  classes: Object,
  isAdded: boolean,
  college: Object
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
  },
  pageTitle: {
    margin: 24
  },
  backToFullProfileContainer: {
    display: 'inline-flex',
    justifyContent: 'flex-start',
    width: '100%'
  },
  backToFullProfileContent: {
    display: 'inline-flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: green[400],
    cursor: 'pointer',
    '&:hover': {
      color: green[500],
      textDecoration: 'underline'
    }
  }
})

const similarCollegesTitle = `Explore Cost at Similar Colleges`

export class CollegeReviewPage extends React.PureComponent<Props> {
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

    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>College Search Website: College Admissions</title>
        </Helmet>
        <CollegePageTemplate
          isAdded={isAdded}
          college={college}
          goBackClick={this.goBackClick}
          onAddCollegeToList={onAddCollegeToList}
          onRemoveCollegeFromList={onRemoveCollegeFromList}
        >
          <Reviews college={college} />
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
  withStyles(styles)(CollegeReviewPage)
)
