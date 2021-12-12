import baseTheme from "@suziwen/gatsby-theme-sculpting/src/gatsby-plugin-theme-ui"
import merge from "lodash.merge"

// lodash.merge will deeply merge custom values with the
// blog theme's defaults
export default merge({}, baseTheme, {
  fonts: {
    logo: "aladin, sans-serif",
    body: "'Noto Serif SC', system-ui, 'Helvetica Neue', Helvetica, Tahoma, Arial, 'Hiragino Sans GB', 'NSimSun', '仿宋体','SimSun', '宋体', serif",
    monospace: "'Roboto Mono', monospace",
    heading: "'Noto Sans SC', 'Helvetica Neue', Helvetica, Tahoma, Arial, 'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', 'WenQuanYi Micro Hei', Heiti, '黑体', sans-serif",
  },
})
