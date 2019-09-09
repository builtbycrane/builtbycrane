import React from 'react'

import { createUseStyles } from 'react-jss'

const ratio = 1184 / 1920

const useStyles = createUseStyles(theme => ({
  feature: {
    backgroundImage: 'url(/static/crane-flying.jpg)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundBlendMode: 'multiply',
    height: '100vh',
    backgroundColor: theme.primary.main,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  text: {
  },
  cranelogo: {
    width: '460px',
    margin: '0 0 15px'
  },
  strapline: {
    fontSize: '40px',
    lineHeight: '50px',
    fontWeight: '700',
    color: '#fff',
    paddingLeft: '10px',
    margin: '0'
  },
  with: {
    fontWeight: '400'
  },
  '@media (max-width: 1024px)': {
    text: {
      top: '20%',
      left: '0',
      right: '0',
      margin: '0 auto',
      textAlign: 'center',
      width: 'auto',
      padding: '0 20px'
    },
    cranelogo: {
      margin: '0 auto',
      padding: '0 20px 0 0',
      width: '250px'
    },
    strapline: {
      padding: '0',
      fontSize: '30px',
      lineHeight: '35px'
    }
  }
}))

const FeatureImage = () => {
  const classes = useStyles()
  return (
    <div className={classes.feature}>
      <div className={classes.text}>
        <img src="/static/logo-crane.svg" alt="Crane" className={classes.cranelogo} />
        <div className={classes.strapline}>Innovative software <span className={classes.with}>with</span> captivating experiences</div>
      </div>
      {/* <img src="/static/feature-image.svg" alt="Crane" className={classes.image} /> */}
    </div>
  )
}

export default FeatureImage
