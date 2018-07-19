// @flow

import React from 'react'
import { connect } from 'react-redux'
import { push as pushRoute } from 'react-router-redux'
import { Link } from 'react-router-dom'
import classnames from 'classnames'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Menu, { MenuItem } from '@material-ui/core/Menu'
import Collapse from '@material-ui/core/Collapse'
import { withStyles } from '@material-ui/core/styles'

// Icons
import SearchIcon from '@material-ui/icons/Search'
import CloseIcon from '@material-ui/icons/Close'

import CollegeAutocomplete from '../CollegeAutocomplete'
import Logo from '../Logo'
import { actions as apiActions } from '../../api/redux'

type Props = {
  classes?: Object
}

const styles = theme => ({
  toolbar: {
    maxWidth: theme.breakpoints.values.lg,
    display: 'inline-flex',
    justifyContent: 'space-between',
    margin: '0px auto',
    width: '100%',
    boxSizing: 'border-box'
  },
  title: {
    paddingLeft: 8
  },
  autocomplete: {
    display: 'inline-flex',
    alignItems: 'center'
  },
  search: {
    color: '#fff'
  },
  hidden: {
    color: '#fff',
    display: 'none'
  },
  button: {
    color: '#fff'
  },
  collapseContainer: {
    overflow: 'inherit'
  },
  autocompleteWrapper: {
    display: 'none'
  },
  searchCollegesButton: {
    color: '#fff'
  }
})

export class Header extends React.Component<Props, State> {
  state = {
    showSearch: false
  }

  onSuggestionSelected = suggestion => {
    const { id } = suggestion
    this.props.pushRoute(`/colleges/${id}`)
  }

  onToggleShowSearch = () => {
    this.setState({ showSearch: !this.state.showSearch })
  }

  render() {
    const { showSearch } = this.state
    const { classes = {}, autocomplete = {} } = this.props
    const { value = '', suggestions = [] } = autocomplete

    const showSearchButton = true
    return (
      <div>
        <AppBar position="static">
          <Toolbar className={classes.toolbar}>
            <Typography
              variant="headline"
              color="inherit"
              className={classes.flex}
            >
              <Link
                to={'/'}
                style={{
                  textDecoration: 'inherit',
                  color: 'inherit',
                  display: 'inline-flex',
                  alignItems: 'center'
                }}
              >
                <Logo style={{ marginTop: 4 }} />
                <div className={classes.title}> | College Search Website</div>
              </Link>
            </Typography>
            {showSearchButton && (
              <Button
                onClick={this.props.goToCollegeSearchPage}
                className={classes.searchCollegesButton}
              >
                Search
              </Button>
            )}
            {!showSearchButton && [
              <Collapse
                in={!showSearch}
                timeout={{ enter: 50, exit: 0 }}
                unmountOnExit
              >
                <div
                  className={classnames(classes.search, {
                    [classes.hidden]: showSearch
                  })}
                >
                  <IconButton
                    className={classes.button}
                    component="span"
                    aria-label="Search"
                    onClick={this.onToggleShowSearch}
                  >
                    <SearchIcon />
                  </IconButton>
                </div>
              </Collapse>,
              <div
                className={classnames({
                  [classes.autocompleteWrapper]: !showSearch
                })}
              >
                <div className={classnames(classes.autocomplete)}>
                  <CollegeAutocomplete
                    value={value}
                    suggestions={suggestions}
                    onSuggestionSelected={this.onSuggestionSelected}
                    getSuggestions={this.props.getSuggestions}
                    setSuggestions={this.props.setSuggestions}
                    setValue={this.props.setValue}
                  />
                  <IconButton
                    className={classes.button}
                    component="span"
                    aria-label="Search"
                    onClick={this.onToggleShowSearch}
                  >
                    <CloseIcon />
                  </IconButton>
                </div>
              </div>
            ]}
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    autocomplete: state.api.autocomplete
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pushRoute: (route: string) => dispatch(pushRoute(route)),
    goToCollegeSearchPage: () => dispatch(pushRoute(`/colleges/search`)),
    getSuggestions: searchValue =>
      dispatch(apiActions.getAutocompleteSuggestions(searchValue)),
    setSuggestions: suggestions =>
      dispatch(apiActions.setAutocompleteSuggestions(suggestions)),
    setValue: searchValue =>
      dispatch(apiActions.setAutocompleteValue(searchValue))
  }
}

export default connect((mapStateToProps: any), (mapDispatchToProps: any))(
  withStyles(styles)(Header)
)
