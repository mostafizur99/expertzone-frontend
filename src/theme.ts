"use client"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import { createTheme } from "@mui/material"
import { Roboto } from "next/font/google"

const roboto = Roboto({
   weight: ["100", "300", "400", "500", "700"],
   display: "swap",
   subsets: ["latin"]
})

const lightTheme = createTheme({
   palette: {
      mode: "light",
      primary: {
         main: "#c94262",
         light: "#007C32",
         contrastText: "#FFFFFF"
      },
      secondary: {
         main: "#13161C",
         contrastText: "#FFFFFF"
      },
      info: {
         main: "#3CC6FC",
         contrastText: "#ffffff"
      },
      warning: {
         main: "#FB8B2F",
         light: "#FFA621",
         contrastText: "#ffffff"
      },
      error: {
         main: "#FF4646",
         contrastText: "#FFFFFF"
      },
      success: {
         main: "#1CAF57",
         light: "#007C32",
         contrastText: "#FFFFFF"
      },
      text: {
         primary: "#13161C", // dark
         secondary: "#8F9CA9", // gray 2
         disabled: "#66737F" // gray 3
      },
      divider: "#E5E7EB",
      background: {
         default: "#e1e8f0",
         paper: "#FFFFFF"
      }
   },
   direction: "ltr",
   typography: {
      fontFamily: roboto.style.fontFamily,
      h1: {
         fontWeight: 700,
         fontSize: 35
      },
      h2: {
         fontWeight: 700,
         fontSize: 30
      },
      h3: {
         fontWeight: 700,
         fontSize: 25,
         lineHeight: 1.4
      },
      h4: {
         fontWeight: 700,
         fontSize: 16
      },
      h5: {
         fontWeight: 700,
         fontSize: 14
      },
      h6: {
         fontSize: 15
      },
      body1: {
         fontSize: 18,
         fontWeight: 400
      },
      body2: {
         fontSize: 14,
         fontWeight: 400
      },
      button: {
         fontWeight: 400,
         fontSize: 16
      },
      caption: {
         fontSize: 13,
         fontWeight: 400,
         textTransform: "uppercase"
      },
      subtitle1: {
         fontSize: 14,
         fontWeight: 400
      },
      subtitle2: {
         fontWeight: 400,
         fontSize: 15
      },
      overline: {
         fontSize: 13,
         fontWeight: 700,
         textTransform: "uppercase"
      }
   },
   breakpoints: {
      values: {
         xs: 0,
         sm: 750,
         md: 1200,
         lg: 1405,
         xl: 1840
      }
   },
   spacing: 9,
   mixins: {
      toolbar: {
         minHeight: 60
      }
   }
})

const darkTheme = createTheme({
   palette: {
      mode: "dark",
      primary: {
         main: "#1CAF57",
         light: "#007C32",
         contrastText: "#FFFFFF"
      },
      secondary: {
         main: "#000000",
         contrastText: "#FFFFFF"
      },
      info: {
         main: "#3CC6FC",
         contrastText: "#ffffff"
      },
      warning: {
         main: "#FB8B2F",
         light: "#FFA621",
         contrastText: "#ffffff"
      },
      error: {
         main: "#FF4646",
         contrastText: "#FFFFFF"
      },
      success: {
         main: "#1CAF57",
         light: "#007C32",
         contrastText: "#FFFFFF"
      },
      divider: "#3a3a3a",
      text: {
         primary: "#FFFFFF", // white
         secondary: "#8F9CA9", // gray 2
         disabled: "#66737F" // gray 3
      },

      background: {
         default: "#000000",
         paper: "#13161C"
      }
   },
   direction: "ltr",
   typography: {
      fontFamily: roboto.style.fontFamily,
      h1: {
         fontWeight: 700,
         fontSize: 35
      },
      h2: {
         fontWeight: 700,
         fontSize: 30
      },
      h3: {
         fontWeight: 700,
         fontSize: 25,
         lineHeight: 1.4
      },
      h4: {
         fontWeight: 700,
         fontSize: 16
      },
      h5: {
         fontWeight: 700,
         fontSize: 14
      },
      h6: {
         fontSize: 15
      },
      body1: {
         fontSize: 18,
         fontWeight: 400
      },
      body2: {
         fontSize: 14,
         fontWeight: 400
      },
      button: {
         fontWeight: 600,
         fontSize: 16
      },
      caption: {
         fontSize: 13,
         fontWeight: 400,
         textTransform: "uppercase"
      },
      subtitle1: {
         fontSize: 14,
         fontWeight: 400
      },
      subtitle2: {
         fontWeight: 400,
         fontSize: 15
      },
      overline: {
         fontSize: 13,
         fontWeight: 700,
         textTransform: "uppercase"
      }
   },
   breakpoints: {
      values: {
         xs: 0,
         sm: 750,
         md: 1200,
         lg: 1405,
         xl: 1840
      }
   },
   spacing: 9,
   mixins: {
      toolbar: {
         minHeight: 60
      }
   }
})

export { darkTheme, lightTheme }
