// @flow

export default (theme: any) => ({
  container: {
    flexGrow: 1,
    position: 'relative',
    backgroundColor: '#fff',
    padding: '4px 6px',
    borderRadius: 1,
    minWidth: 400
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0
  },
  suggestion: {
    display: 'block'
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none'
  }
})
