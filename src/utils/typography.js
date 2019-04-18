import "./global.css"
import Typography from "typography"
import fairyGatesTheme from "typography-theme-fairy-gates"

fairyGatesTheme.overrideThemeStyles = () => {
  return {
    a: {
      backgroundImage: "none",
      textShadow: "none",
      color: "var(--textLink)",
      cursor: "default"
    },
    hr: {
      background: "var(--hr)",
    },
    "h1, h2, h3, h4, h5, h6": {
      color: "var(--textLink)",
    },
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    }
  }
}

// delete fairyGatesTheme.googleFonts

const typography = new Typography(fairyGatesTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
