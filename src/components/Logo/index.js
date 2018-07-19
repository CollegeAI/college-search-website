// @flow

import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'
import { withStyles } from '@material-ui/core/styles'
// import logo from './logo.svg'

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  icon: {
    margin: theme.spacing.unit * 2
  }
})

export default function LogoIcon(props) {
  return (
    <SvgIcon
      {...props}
      viewBox="0 0 9.0871639 9.0871639"
      height="9.0871639mm"
      width="9.0871639mm"
    >
      <g transform="translate(-91.105496,-83.885961)" id="layer1">
        <g id="g827">
          <circle
            style={{
              opacity: 1,
              fill: '#2196f3',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 0.52916664,
              strokeLinecap: 'round',
              strokeLinejoin: 'bevel',
              strokeMiterlimit: '4',
              strokeDasharray: 'none',
              strokeDashoffset: 5.70538568,
              strokeOpacity: 1,
              paintOrder: 'normal'
            }}
            cx="95.649078"
            cy="88.429543"
            r="4.543582"
          />
          <circle
            style={{
              opacity: 1,
              fill: '#ffffff',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 0.52916664,
              strokeLinecap: 'round',
              strokeLinejoin: 'bevel',
              strokeMiterlimit: 4,
              strokeDasharray: 'none',
              strokeDashoffset: 5.70538568,
              strokeOpacity: 1,
              paintOrder: 'normal'
            }}
            cx="95.649078"
            cy="88.429543"
            r="4.2763124"
          />
          <text
            style={{
              fontStyle: 'normal',
              fontVariant: 'normal',
              fontWeight: 'normal',
              fontStretch: 'normal',
              fontSize: '3.52777767px',
              lineHeight: 1.25,
              fontFamily: 'sans-serif',
              fontVariantLigatures: 'normal',
              fontVariantCaps: 'normal',
              fontVariantNumeric: 'normal',
              fontFeatureSettings: 'normal',
              textAlign: 'start',
              letterSpacing: '0px',
              wordSpacing: '0px',
              writingMode: 'lr-tb',
              textAnchor: 'start',
              fill: '#2196f3',
              fillOpacity: 1,
              stroke: 'none',
              strokeWidth: 0.26458332
            }}
            x="91.510658"
            y="89.713699"
            id="text817"
          >
            <tspan
              id="tspan815"
              x="91.510658"
              y="89.713699"
              style={{
                fill: '#2196f3',
                fillOpacity: 1,
                strokeWidth: 0.26458332
              }}
            >
              CSW
            </tspan>
          </text>
        </g>
      </g>
    </SvgIcon>
  )
}
