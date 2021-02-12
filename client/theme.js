import { createMuiTheme } from '@material-ui/core/styles'
import { blue, green } from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
      primary: {
      light: '#213A57',
      main: '#213A57',
      dark: '#213A57',
      contrastText: '#fff',
    },
    secondary: {
      light: '#DAFF31',
      main: '#DAFF31',
      dark: '#DAFF31',
      contrastText: '#000',
    },
      openTitle: blue['500'],
      protectedTitle: green['500'],
      type: 'light'
    }
  })

  export default theme