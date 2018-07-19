// @flow

// Material ui colors
import green from '@material-ui/core/colors/green'
import blue from '@material-ui/core/colors/blue'
import grey from '@material-ui/core/colors/grey'

export default (theme: any) => ({
  root: {
    width: '100%',
    marginBottom: 32,
    display: 'inline-flex',
    flexDirection: 'column'
  },
  reviewItem: {
    textAlign: 'left',
    maxHeight: 110,
    overflowY: 'hidden',
    position: 'relative',
    marginBottom: 8
  },
  reviewItemExpanded: {
    maxHeight: 'inherit'
  },
  reviewText: {
    textAlign: 'left'
  },
  moreReview: {
    cursor: 'pointer',
    position: 'absolute',
    bottom: 0,
    height: '100%',
    zIndex: 1,
    display: 'inline-flex',
    background:
      'linear-gradient(to top, rgba(255,255,255,1), rgba(255,255,255,1) 15%, rgba(255,255,255,0))',
    alignItems: 'flex-end',
    width: '100%',
    color: blue[400]
  },
  moreReviewExpanded: {
    display: 'none'
  },
  reviewCredentials: {
    textAlign: 'left',
    fontSize: '0.75rem',
    marginBottom: 22,
    color: grey[600]
  },
  dot: {
    padding: '0px 2px'
  }
})
