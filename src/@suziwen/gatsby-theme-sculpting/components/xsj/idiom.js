/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from "react"
import {GiAcorn} from "react-icons/gi"
import ContextConsumer from "@suziwen/gatsby-theme-sculpting/src/components/context"

const XSJTitle = ()=> {
  return (
    <ContextConsumer>
      {({siteMetadata: {idiom}}) => {
        return (
          <span sx={{fontFamily: "logo", fontWeight: 'normal'}}>
            Time Flies, No Time for Nuts <GiAcorn  sx={{fontSize: '1.5em', verticalAlign: 'text-bottom'}}/>
          </span>
        )
      }}
    </ContextConsumer>
  )
}


export default XSJTitle

