import React from 'react'

import CraneLogo from './crane-logo'

import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles(theme => ({
  hero: {
    backgroundImage: `radial-gradient(ellipse at center, ${theme.color.primary.main} 0%, ${theme.color.black} 100%), url(/static/hero.jpg)`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundBlendMode: 'multiply',
    height: '100vh',
    maxHeight: '768px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    width: '90vw',
    maxWidth: '960px'
  },
  cranelogo: {
    width: '460px',
    fill: theme.color.white
  },
  strapline: {
    fontFamily: theme.font.sansSerif,
    fontSize: '50px',
    lineHeight: '52px',
    letterSpacing: '-0.4px',
    fontWeight: 600,
    color: theme.color.white,
    marginTop: '26px',
    paddingLeft: '40px',
    maxWidth: '674px'
  },
  with: {
    fontWeight: 300
  },
  '@media (max-width: 767px)': {
    hero: {
      height: '40vh',
      padding: '20px 10px'
    },
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
      margin: '0 auto 20px',
      padding: '0',
      width: '230px',
      display: 'block'
    },
    strapline: {
      padding: '0',
      fontSize: '26px',
      lineHeight: '35px',
      margin: '0 auto',
      textAlign: 'center'
    }
  }
}))

const Hero = () => {
  const classes = useStyles()
  return (
    <div className={classes.hero}>
      <div className={classes.container}>
        <CraneLogo className={classes.cranelogo} />
        <h1 className={classes.strapline}>
          Innovative software<br/>
          <span className={classes.with}>with</span> captivating experiences
        </h1>
      </div>
    </div>
  )
}

export default Hero
