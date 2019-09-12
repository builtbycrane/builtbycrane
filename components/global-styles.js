import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  '@global': {
    html: {
      boxSizing: 'border-box'
    },
    '*, *:before, *:after': {
      boxSizing: 'inherit'
    },
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
