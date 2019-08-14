import Layout from './../components/layout'
import Head from 'next/head';
import FeatureImage from './../components/feature-image'

const Index = (props) => (
  <Layout>
    <Head>
      <title>Crane Applications Ltd</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div>
      <h1>Crane Applications Ltd</h1>
      <FeatureImage/>
    </div>
  </Layout>
)

export default Index;