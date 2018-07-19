// @flow

// Material ui colors
import lightBlue from '@material-ui/core/colors/lightBlue'
import green from '@material-ui/core/colors/green'
import grey from '@material-ui/core/colors/grey'
import blue from '@material-ui/core/colors/blue'

export default (theme: any) => ({
  root: {
    textAlign: 'center',
    position: 'relative'
  },
  banner: {
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: blue[200]
  },
  subheading: {
    marginBottom: 24
  },
  iconContainer: {
    backgroundColor: blue[100]
  },
  homeIcon: {
    fontSize: 84,
    color: green[200]
  },
  header: {
    textAlign: 'left'
  },
  contentContainer: {
    backgroundColor: grey[100],
    paddingTop: 24
  },
  searchFilterContainer: {
    textAlign: 'center'
  },
  content: {
    display: 'inline-flex',
    alignItems: 'flex-start'
  },
  results: {
    display: 'inline-flex',
    flexDirection: 'column'
  }
})
