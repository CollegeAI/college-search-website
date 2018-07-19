// @flow

import grey from '@material-ui/core/colors/grey'
import blue from '@material-ui/core/colors/blue'
import green from '@material-ui/core/colors/green'
import lightGreen from '@material-ui/core/colors/lightGreen'

export default (theme: any) => ({
  cardContentContainer: {
    padding: 20,
    textAlign: 'left',
    cursor: 'pointer',
    transition: 'all .1s ease-in',
    display: 'inline-flex',
    flexDirection: 'column',
    width: '100%',
    boxSizing: 'border-box',
    '&:hover': {
      backgroundColor: '#f5fbf2'
    }
  },
  description: {
    color: green[500]
  },
  collegeName: {
    color: blue[500]
  },
  tagline: {
    display: 'inline-flex',
    alignItems: 'center',
    color: grey[600],
    fontSize: 14
  },
  dot: {
    padding: '0px 2px'
  },
  quickStats: {
    display: 'inline-flex',
    alignItems: 'center',
    color: grey[600],
    fontSize: 14,
    paddingTop: 4
  },
  bottomActionsContainer: {
    borderTop: '1px solid #e6e6e6',
    textAlign: 'left',
    cursor: 'pointer'
  },
  getIn: {
    borderRight: '1px solid #e6e6e6',
    padding: '16px 0px 16px 16px ',
    color: '#319bdf'
  },
  favoriteWrapperAdded: {
    backgroundColor: green[500]
  },
  favoriteIcon: {
    color: green[500]
  },
  favoriteIconAdded: {
    color: '#fff'
  },
  favoriteText: {
    color: green[500]
  },
  favoriteTextAdded: {
    color: '#fff'
  },
  favorite: {
    textAlign: 'center',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    transition: 'all .1s ease-in',
    '&:hover': {
      backgroundColor: green[500]
    },
    '&:hover $favoriteIcon': {
      color: '#fff'
    },
    '&:hover $favoriteText': {
      color: '#fff'
    }
  },
  willYouGetIn: {
    cursor: 'pointer'
  }
})
