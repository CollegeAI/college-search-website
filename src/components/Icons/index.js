/**
 * Icon`
 */

import * as React from 'react'
import { withStyles } from '@material-ui/core/styles'

// ICONS
import FacebookSvg from './assets/facebook-svg'
import GoogleSvg from './assets/google-svg'
import InstagramSvg from './assets/instagram-svg'
import TwitterSvg from './assets/twitter-svg'

import styleSheet from './styles'

function getIcon(string: string) {
  switch (string) {
    case 'facebook':
      return FacebookSvg
    case 'google':
      return GoogleSvg
    case 'instagram':
      return InstagramSvg
    case 'twitter':
      return TwitterSvg
    default:
      return null
  }
}

class Icon extends React.PureComponent<{
  classes: Object,
  name: string
}> {
  render() {
    const { classes, ...props } = this.props
    const Icon = getIcon(this.props.name.toLowerCase())
    if (!Icon) return null
    return (
      <div className={classes.root}>
        <Icon {...props} />
      </div>
    )
  }
}
export default withStyles(styleSheet)(Icon)
