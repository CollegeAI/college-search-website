// @flow

import React from "react"
import { connect } from "react-redux"
import { push } from "react-router-redux"
import { Helmet } from "react-helmet"
import classnames from "classnames"

import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"

import IconButton from "@material-ui/core/IconButton"
import SearchIcon from "@material-ui/icons/Search"
import CloseIcon from "@material-ui/icons/Close"

// Material ui colors
import indigo from "@material-ui/core/colors/indigo"
import blue from "@material-ui/core/colors/blue"
import lightBlue from "@material-ui/core/colors/lightBlue"
import green from "@material-ui/core/colors/green"

import { withStyles } from "@material-ui/core/styles"

import CollegeAutocomplete from "../../components/CollegeAutocomplete"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import logo from "../../components/Logo/logo.svg"
import homepagePattern from "../../homepage_pattern.svg"

import { actions } from "./redux"
import { actions as apiActions } from "../../api/redux"

// Import Sections
import RankingSection from "./RankingsSection"
import WhyUs from "./WhyUs"
import OurTeam from "./OurTeam"
import SignUpCallToAction from "./SignUpCallToAction"
import { push as pushRoute } from "react-router-redux"

type Props = {
  classes: Object
}

const styles = theme => ({
  root: {
    textAlign: "center",
    position: "relative"
  },
  homeContainer: {},
  banner: {
    position: "relative",
    paddingTop: 160,
    paddingBottom: 320
  },
  rankingContainer: {
    textAlign: "center",
    backgroundColor: green[300],
    padding: "36px 18px"
  },
  heading: {
    // color: '#fff',
    opacity: 1
  },
  subheading: {
    maxWidth: 450,
    margin: "0px auto 24px",
    color: "#fff",
    opacity: 1
  },
  collegeSearch: {
    border: "1px solid #ccc",
    borderRadius: 4,
    width: 450,
    margin: "0px auto"
  }
})

export class HomePage extends React.PureComponent<Props> {
  onSuggestionSelected = suggestion => {
    const { id } = suggestion
    this.props.pushRoute(`/colleges/${id}`)
  }

  render() {
    const { classes = {}, goToCollegeSearch, autocomplete = {} } = this.props
    const { value = "", suggestions = [] } = autocomplete
    return (
      <div className={classes.root}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>College Search Website: Explore Schools</title>
        </Helmet>
        <div>
          <Header />
          <div className={classes.homeContainer}>
            <div className={classes.banner}>
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  width: "100%",
                  height: "100%",
                  backgroundImage: `url(${homepagePattern})`,
                  backgroundSize: "300px 150px",
                  opacity: 0.1,
                  zIndex: -1
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: blue[100],
                  zIndex: -2
                }}
              />
              <div
                style={{
                  backgroundColor: blue[400],
                  display: "inline-block",
                  padding: 30,
                  borderRadius: 4,
                  boxShadow: "0px 2px 8px rgba(0,0,0,0.25)"
                }}
              >
                <Typography
                  className={classnames(classes.heading, classes.subheading)}
                  variant="headline"
                  gutterBottom
                >
                  Discover the colleges and universities that are right for you.
                </Typography>
                <div className={classnames(classes.collegeSearch)}>
                  <CollegeAutocomplete
                    value={value}
                    suggestions={suggestions}
                    onSuggestionSelected={this.onSuggestionSelected}
                    getSuggestions={this.props.getSuggestions}
                    setSuggestions={this.props.setSuggestions}
                    setValue={this.props.setValue}
                  />
                </div>
              </div>
            </div>
            <RankingSection />
            <WhyUs />
            <OurTeam />
            <SignUpCallToAction />
            <Footer />
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    autocomplete: state.homePage.autocomplete
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pushRoute: (route: string) => dispatch(push(route)),
    goToCollegeSearch: () => dispatch(pushRoute("/colleges/search")),
    getSuggestions: searchValue =>
      dispatch(actions.getAutocompleteSuggestions(searchValue)),
    setSuggestions: suggestions =>
      dispatch(actions.setAutocompleteSuggestions(suggestions)),
    setValue: searchValue => dispatch(actions.setAutocompleteValue(searchValue))
  }
}

export default connect(
  (mapStateToProps: any),
  (mapDispatchToProps: any)
)(withStyles(styles)(HomePage))
