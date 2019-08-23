import React from 'react'

import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  feature: {
    position: 'relative'

  },
  text: {
    position: 'absolute',
    width: '635px',
    bottom: '45%',
    left: '15%'
  },
  cranelogo: {
    width: '300px',
    margin: '0 0 15px'
  },
  h1: {
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
  image: {
    maxWidth: '100%',
    width: '100%',
    height: 'auto'
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
    h1: {
      padding: '0',
      fontSize: '30px',
      lineHeight: '35px'
    }
  }
})

const FeatureImage = () => {
  const classes = useStyles()
  return (
    <div className={classes.feature}>
      <div className={classes.text}>
        <img src="/static/logo-crane.svg" alt="Crane" className={classes.cranelogo} />
        <h1 className={classes.h1}>Innovative software <span className={classes.with}>with</span> captivating experiences</h1>
      </div>
      <img src="/static/feature-image.svg" alt="Crane" className={classes.image} />
    </div>
  )
}

export default FeatureImage
