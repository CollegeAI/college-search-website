// @flow

import * as React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

class FacebookSvg extends React.PureComponent<any> {
  render() {
    const {
      props = {
        fill: 'rgb(0, 0, 0)'
      }
    } = this
    // style="fill: rgb(0, 0, 0);"

    return (
      <SvgIcon {...props} viewBox="0 0 90 90">
        {/* <path d="M16 5h.99L17 3H7v2h1v7l-2 2v2h5v6l1 1 1-1v-6h5v-2l-2-2V5z" /> */}
        <g>
          <path
            id="facebook_svg"
            d="M90,15.001C90,7.119,82.884,0,75,0H15C7.116,0,0,7.119,0,15.001v59.998
						C0,82.881,7.116,90,15.001,90H45V56H34V41h11v-5.844C45,25.077,52.568,16,61.875,16H74v15H61.875C60.548,31,59,32.611,59,35.024V41
						h15v15H59v34h16c7.884,0,15-7.119,15-15.001V15.001z"
          />
        </g>
      </SvgIcon>
    )
  }
}

export default FacebookSvg
