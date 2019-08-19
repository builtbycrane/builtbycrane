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
