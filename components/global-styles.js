import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  '@global': {
    body: {
      margin: 0
    }
  }
})

const GlobalStyles = () => {
  useStyles()
  return null
}

export default GlobalStyles
