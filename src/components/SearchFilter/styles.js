// @flow

import grey from '@material-ui/core/colors/grey'

export default (theme: any) => ({
  filterContainer: {
    width: 236,
    padding: '0px 16px 16px',
    margin: '0px auto',
    marginBottom: 84
  },
  filterCategoryHeading: {
    marginTop: 16,
    textAlign: 'left',
    fontSize: 14,
    fontWeight: 500,
    textTransform: 'uppercase',
    color: grey[600]
  },
  filterContent: {
    paddingTop: 8,
    paddingBottom: 18,
    textAlign: 'left',
    width: '100%'
  },
  locationSubtext: {
    textAlign: 'left'
  },
  checkboxContainer: {
    width: '100%',
    alignItems: 'center',
    display: 'inline-flex'
  },
  checkbox: {
    width: 32,
    height: 32
  },
  collegeTypeSubFields: {
    paddingLeft: 8
  },
  select: {
    width: '100%'
  },
  studentBodySizeButtonContainer: {
    display: 'inline-flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%'
  },
  locationTextField: {
    width: '100%'
  },
  testLabel: {
    fontWeight: 500
  },
  testValue: {}
})
