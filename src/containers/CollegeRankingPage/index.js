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
import CenteredContent from '../../components/CenteredContent'
import SearchFilter from '../../components/SearchFilter'
import Rating from '../../components/Rating'
import CollegePageHeader from '../../components/CollegePageHeader'
import CollegeHeaderOverlay from '../../components/CollegeHeaderOverlay'
import { actions as apiActions } from '../../api/redux'

import Rankings from './Rankings'

type Props = {
  classes: Object,
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
  }
})

const description = '#1 Best Colleges in America'

export class CollegeRankingPage extends React.PureComponent<Props> {
  goBackClick = () => {
    const { pushRoute, college: { id: collegeId } } = this.props
    pushRoute(`/colleges/${collegeId}`)
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

    const isAdded = collegeAddedList.some(c => c.id === college.id)

    const title = `${college.name} Rankings`
    const collegeRankings = Object.keys(college.rankings).map(rankingId => {
      const ranking = college.rankings[rankingId]
      return {
        name: ranking.name,
        value: ranking.value,
        label: `#${ranking.value} of #${ranking.total}`,
        icon: ranking.id,
        link: `/colleges/search?sortOrder=${ranking.id}`
      }
    })
    collegeRankings.sort((a, b) => a.value - b.value)

    return (
      <div className={classes.root}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>College Search Website: Explore Colleges Rankings</title>
        </Helmet>
        <div className={classes.background} />
        <div className={classes.container}>
          <Header />
          <CollegePageHeader
            onAddCollegeToList={onAddCollegeToList}
            onRemoveCollegeFromList={onRemoveCollegeFromList}
            isAdded={isAdded}
            college={college}
          />
          <CollegeHeaderOverlay goBackClick={this.goBackClick} />
          <Rankings
            title={title}
            pushRoute={pushRoute}
            rankings={collegeRankings}
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
  withStyles(styles)(CollegeRankingPage)
)
