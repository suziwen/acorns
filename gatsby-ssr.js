const React = require('react')
const {withPrefix} = require('gatsby')

exports.onRenderBody = ({ setHeadComponents, setPostBodyComponents }, pluginOptions) => {
  let output = [
    <link rel="icon" type="image/png" href={withPrefix('/') + "favicon/favicon.png"}/>,
    <link rel="mask-icon" href={withPrefix('/') + "favicon/icon.svg"} color="brown"/>,
    <link rel="icon" type="image/svg+xml" href={withPrefix('/') + "favicon/favicon.svg"}/>,
    <link key="oswald" rel="stylesheet" type="text/css" href={withPrefix('/') + "fonts/Webfonts/aladin/stylesheet.css"}/>
  ]
  setHeadComponents(output)
}

