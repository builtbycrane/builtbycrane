import React from 'react'
import App from 'next/app'
import { ThemeProvider } from 'react-jss'

import theme from '../theme'

export default class MyApp extends App {
  componentDidMount () {
    const style = document.getElementById('server-side-styles')

    if (style) {
      style.parentNode.removeChild(style)
    }
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
