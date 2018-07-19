import React from 'react'
import PropTypes from 'prop-types'
import Autosuggest from 'react-autosuggest'
import match from 'autosuggest-highlight/match'
import parse from 'autosuggest-highlight/parse'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import MenuItem from '@material-ui/core/MenuItem'
import { withStyles } from '@material-ui/core/styles'
import InputAdornment from '@material-ui/core/InputAdornment'
// Icons
import SearchIcon from '@material-ui/icons/Search'

import styles from './styles'

function renderInput(inputProps) {
  const { classes, onKeyPress, ref, ...other } = inputProps

  return (
    <TextField
      fullWidth
      onKeyPress={onKeyPress}
      InputProps={{
        inputRef: ref,
        disableUnderline: true,
        classes: {
          input: classes.input
        },
        ...other
      }}
    />
  )
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
  const matches = match(suggestion.name, query)
  const parts = parse(suggestion.name, matches)

  return (
    <MenuItem selected={isHighlighted} component="div">
      <div>
        {parts.map((part, index) => {
          return part.highlight ? (
            <span key={String(index)} style={{ fontWeight: 500 }}>
              {part.text}
            </span>
          ) : (
            <strong key={String(index)} style={{ fontWeight: 300 }}>
              {part.text}
            </strong>
          )
        })}
      </div>
    </MenuItem>
  )
}

function renderSuggestionsContainer(options) {
  const { containerProps, children } = options

  return (
    <Paper {...containerProps} square>
      {children}
    </Paper>
  )
}

function getSuggestionValue(suggestion) {
  return suggestion.name
}

class CollegeAutocomplete extends React.Component {
  handleSuggestionsFetchRequested = ({ value }) => {
    this.props.getSuggestions(value)
  }

  handleSuggestionsClearRequested = () => {
    this.props.setSuggestions([])
  }

  handleChange = (event, { newValue }) => {
    this.props.setValue(newValue)
  }

  handleSuggestionSelected = (event, { suggestion }) => {
    this.props.setValue('')
    this.props.setSuggestions([])
    this.props.onSuggestionSelected(suggestion)
  }

  onKeyPress = ev => {
    const { classes, value, suggestions } = this.props
    if (ev.key === 'Enter') {
      if (suggestions.length > 0) {
        this.props.setValue('')
        this.props.setSuggestions([])
        this.props.onSuggestionSelected(suggestions[0])
      }
      ev.preventDefault()
    }
  }

  render() {
    const { classes, value, suggestions } = this.props

    return (
      <Autosuggest
        theme={{
          container: classes.container,
          suggestionsContainerOpen: classes.suggestionsContainerOpen,
          suggestionsList: classes.suggestionsList,
          suggestion: classes.suggestion
        }}
        renderInputComponent={renderInput}
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.handleSuggestionsClearRequested}
        renderSuggestionsContainer={renderSuggestionsContainer}
        onSuggestionSelected={this.handleSuggestionSelected}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={{
          classes,
          placeholder: 'Search for a college',
          value: value,
          onChange: this.handleChange,
          onKeyPress: this.onKeyPress
          // endAdornment: (
          //   <InputAdornment position="end">
          //     <SearchIcon />
          //   </InputAdornment>
          // )
        }}
      />
    )
  }
}

export default withStyles(styles)(CollegeAutocomplete)
