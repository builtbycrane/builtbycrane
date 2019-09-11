import React from 'react'

import CraneLogo from './crane-logo'

import { createUseStyles } from 'react-jss'

const ratio = 1184 / 1920

const useStyles = createUseStyles(theme => ({
  hero: {
    backgroundImage: 'url(/static/lake.jpg)',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundBlendMode: 'multiply',
    height: '100vh',
    backgroundColor: theme.color.primary.dark,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    width: '95vw',
    maxWidth: '1440px'
  },
  cranelogo: {
    width: '460px',
    fill: '#fff'
  },
  strapline: {
    fontFamily: theme.font.sansSerif,
    fontSize: '46px',
    lineHeight: '56px',
    fontWeight: 600,
    color: '#fff',
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
