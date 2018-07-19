// @flow

import * as React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import classnames from 'classnames'

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'

// Material ui colors
import grey from '@material-ui/core/colors/grey'
import blue from '@material-ui/core/colors/blue'
import lightGreen from '@material-ui/core/colors/lightGreen'

import { withStyles } from '@material-ui/core/styles'

// Import Sections
import Header from '../Header'
import Footer from '../Footer'
import CenteredContent from '../CenteredContent'
import CollegePageHeader from '../CollegePageHeader'
import CollegeHeaderOverlay from '../CollegeHeaderOverlay'
import SimilarCollegesCard from '../SimilarCollegesCard'
import AddToList from '../AddToList'

type Props = {
  classes: Object,
  isAdded: boolean,
  onAddCollegeToList: Function,
  onRemoveCollegeFromList: Function,
  pageTitle?: string,
  goBackClick: Function,
  children?: React.Node
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
    margin: '32px 0px 24px',
    textAlign: 'left',
    color: blue[400]
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
    color: blue[400],
    cursor: 'pointer',
    '&:hover': {
      color: blue[500],
      textDecoration: 'underline'
    }
  }
})

export class CollegePageTemplate extends React.PureComponent<Props> {
  render() {
    const {
      classes,
      isAdded = false,
      college,
      goBackClick,
      pageTitle,
      onAddCollegeToList,
      onRemoveCollegeFromList,
      children
    } = this.props

    return (
      <div className={classes.root}>
        <div className={classes.background} />
        <div className={classes.container}>
          <Header />
          <CollegePageHeader
            onAddCollegeToList={onAddCollegeToList}
            onRemoveCollegeFromList={onRemoveCollegeFromList}
            isAdded={isAdded}
            college={college}
          />
          <CollegeHeaderOverlay goBackClick={goBackClick} />
          <CenteredContent size="small">
            <Typography variant="display1" className={classes.pageTitle}>
              {pageTitle}
            </Typography>
            {children}
            <AddToList
              isAdded={isAdded}
              rootStyle={{
                padding: '12px 42px',
                marginTop: 16,
                border: '1px solid #4caf50',
                borderRadius: 3,
                width: 'auto',
                backgroundColor: blue[500]
              }}
              iconStyle={{ color: '#fff', fontSize: '1.25rem' }}
              textStyle={{ color: '#fff', fontSize: '1.25rem' }}
            />
            <div className={classes.backToFullProfileContainer}>
              <div
                className={classes.backToFullProfileContent}
                onClick={goBackClick}
              >
                <ChevronLeftIcon />
                Back to Full Profile
              </div>
            </div>
          </CenteredContent>
          <Footer />
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(CollegePageTemplate)
