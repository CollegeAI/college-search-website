import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { Provider } from 'react-redux'

import { Router, Switch, Route, Link } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'

import createBrowserHistory from 'history/createBrowserHistory'

import {
  createMuiTheme,
  MuiThemeProvider,
  createGenerateClassName
} from '@material-ui/core/styles'

import JssProvider from 'react-jss/lib/JssProvider'
import { SheetsRegistry } from 'jss'

import lightGreen from '@material-ui/core/colors/lightGreen'
import blue from '@material-ui/core/colors/blue'

import configureStore from './store'

// Import the pages
import HomePage from './containers/HomePage'
import CollegeSearchPage from './containers/CollegeSearchPage'
import CollegePage from './containers/CollegePage'
import CollegeRankingPage from './containers/CollegeRankingPage'
import CollegeAdmissionsPage from './containers/CollegeAdmissionsPage'
import CollegeCostPage from './containers/CollegeCostPage'
import CollegeAcademicsPage from './containers/CollegeAcademicsPage'
import CollegeStudentsPage from './containers/CollegeStudentsPage'
import CollegeCampusLifePage from './containers/CollegeCampusLifePage'
import CollegeAfterPage from './containers/CollegeAfterPage'
import CollegeReviewPage from './containers/CollegeReviewPage'
import CollegeMajorsPage from './containers/CollegeMajorsPage'
import CollegeRankingsOverviewPage from './containers/CollegeRankingsOverviewPage'

const CollegesHomePage = HomePage

const history = createBrowserHistory()

const initialState = {}
const store = configureStore(initialState, history)

const generateClassName = createGenerateClassName({
  productionPrefix: 'collegeai-sample-site'
})
const sheetsRegistry = new SheetsRegistry()

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: lightGreen
  }
})

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <JssProvider
          registry={sheetsRegistry}
          generateClassName={generateClassName}
        >
          <MuiThemeProvider theme={theme}>
            <ConnectedRouter history={history}>
              <Switch>
                <Route key="home-page" exact path="/" component={HomePage} />
                <Route
                  key="colleges"
                  exact
                  path="/colleges"
                  component={CollegesHomePage}
                />
                <Route
                  exact
                  path="/colleges/search"
                  component={CollegeSearchPage}
                />
                <Route
                  exact
                  path="/colleges/rankings"
                  component={CollegeRankingsOverviewPage}
                />
                <Route
                  exact
                  path="/colleges/:collegeId/rankings"
                  component={CollegeRankingPage}
                />
                <Route
                  exact
                  path="/colleges/:collegeId/admissions"
                  component={CollegeAdmissionsPage}
                />
                <Route
                  exact
                  path="/colleges/:collegeId/cost"
                  component={CollegeCostPage}
                />
                <Route
                  exact
                  path="/colleges/:collegeId/academics"
                  component={CollegeAcademicsPage}
                />
                <Route
                  exact
                  path="/colleges/:collegeId/majors"
                  component={CollegeMajorsPage}
                />
                <Route
                  exact
                  path="/colleges/:collegeId/students"
                  component={CollegeStudentsPage}
                />
                <Route
                  exact
                  path="/colleges/:collegeId/campus-life"
                  component={CollegeCampusLifePage}
                />
                <Route
                  exact
                  path="/colleges/:collegeId/after-college"
                  component={CollegeAfterPage}
                />
                <Route
                  exact
                  path="/colleges/:collegeId/reviews"
                  component={CollegeReviewPage}
                />
                <Route path="/colleges/:collegeId" component={CollegePage} />
              </Switch>
            </ConnectedRouter>
          </MuiThemeProvider>
        </JssProvider>
      </Provider>
    )
  }
}

export default App
