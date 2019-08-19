import React from 'react'
import Layout from './../components/layout'
import Head from 'next/head'
import FeatureImage from './../components/feature-image'
import GlobalStyles from './../components/global-styles'

const Index = () => (
  <Layout>
    {/* <GlobalStyles/> */}
    <Head>
      <title>Crane</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div>
      <FeatureImage />
    </div>
  </Layout>
)

export default Index
