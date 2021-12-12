/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from "react"
import {GiSquirrel} from "react-icons/gi"
import ContextConsumer from "@suziwen/gatsby-theme-sculpting/src/components/context"

const XSJTitle = ()=> {
  return (
    <ContextConsumer>
      {({siteMetadata: {title, siteUrl}}) => {
        const style = {
          ml: 3,
          fontWeight: 'bold',
          fontSize: '1.5em',
          a: {
            color: 'inherit',
            textDecoration: 'none'
          }
        }
        const fontStyle = {
        }
        return (
          <div sx={style}>
            <a href={siteUrl}>
              <GiSquirrel sx={{fontSize: '1.5em', verticalAlign: 'text-bottom'}} /><span sx={{fontFamily: "logo", fontWeight: 'normal'}}>Scrat's Acorn</span>
            </a>
          </div>
        )
      }}
    </ContextConsumer>
  )
}


export default XSJTitle
