// @flow

export default (theme: any) => ({
  footerContainer: {
    display: 'block',
    marginTop: 64
  },
  footer: {
    display: 'inline-flex',
    justifyContent: 'center',
    borderTop: '1px solid #ccc',
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px 0px`,
    maxWidth: theme.breakpoints.values.md,
    flexWrap: 'wrap'
  },
  footerItem: {
    width: '100%'
  },
  dividerContainer: {
    alignItems: 'center',
    marginBottom: theme.spacing.unit
  },
  grow: {
    flexGrow: 1
  },
  description: {
    width: '100%',
    textAlign: 'left'
  },
  descriptionLabel: {
    margin: `0px 0px ${theme.spacing.unit * 2}px`
  },
  linkList: {
    textAlign: 'left',
    color: '#3da1e1'
  },
  linkListItem: {
    textDecoration: 'none',
    color: 'inherit',
    lineHeight: '24px'
  },
  categoryContainer: {
    width: '100%',
    display: 'inline-flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  category: {
    marginRight: theme.spacing.unit * 2,
    minWidth: 200
  },
  categoryLabel: {
    margin: 0,
    fontWeight: 'bold'
    // color: '#2e9adf',
    // textDecoration: 'underline'
  },
  categoryList: {
    listStyleType: 'none',
    padding: 0,
    margin: 0
  },
  categoryItemName: {
    textDecoration: 'none',
    color: '#3da1e1'
  }
})
