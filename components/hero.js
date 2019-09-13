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
    fontSize: '46px',
    lineHeight: '56px',
    fontWeight: 600,
    color: theme.color.white,
    marginTop: '26px',
    paddingLeft: '40px',
    width: '674px'
  },
  with: {
    fontWeight: 300
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

const Hero = () => {
  const classes = useStyles()
  return (
    <div className={classes.hero}>
      <div className={classes.container}>
        <CraneLogo className={classes.cranelogo} />
        <div className={classes.strapline}>
          <div>Innovative software</div>
          <div><span className={classes.with}>with</span> captivating experiences</div>
        </div>
      </div>
    </div>
  )
}

export default Hero
