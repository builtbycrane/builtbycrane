import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

import GlobalStyles from './../components/global-styles'

const Layout = (props) => (
  <>
    <GlobalStyles/>
    <Head>
      <title>Crane</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css?family=Nunito:400,600,700&display=swap" rel="stylesheet"></link>
    </Head>
    <div>
      {props.children}
    </div>
  </>
)

Layout.propTypes = {
  children: PropTypes.any
}

export default Layout
