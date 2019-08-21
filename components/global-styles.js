import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  '@global': {
    body: {
      margin: 0,
      fontFamily: 'Nunito, sans-serif'
    }
  }
})

const GlobalStyles = () => {
  useStyles()
  return null
}

export default GlobalStyles
