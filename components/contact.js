import React from 'react'

import { createUseStyles } from 'react-jss'
import Button from './button'

const useStyles = createUseStyles(theme => ({
  contact: {
    backgroundImage: 'url(./static/macbook.jpg)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundBlendMode: 'soft-light',
    height: '586px',
    padding: '80px 0',
    backgroundColor: '#222',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  container: {
    width: '90vw',
    maxWidth: '960px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  getInTouch: {
    fontFamily: theme.font.sansSerif,
    fontSize: '46px',
    lineHeight: '56px',
    color: theme.color.white,
    textAlign: 'center',
    width: '60%'
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignSelf: 'stretch'
  },
  footerInfo: {
    fontFamily: theme.font.sansSerif,
    fontSize: '16px',
    lineHeight: '21px',
    color: theme.color.white,
    fontWeight: 300,
    '& b': {
      fontWeight: 600
    }
  },
  btn: {
    fontFamily: theme.font.sansSerif,
    color: theme.color.white,
    fontSize: '26px',
    border: `1px solid ${theme.color.white}`,
    textDecoration: 'none',
    display: 'inline-flex',
    padding: '16px 24px'
  },
  '@media (max-width: 1024px)': {
    contact: {
      height: 'auto',
      padding: '20px 10px',
    },
    getInTouch: {
      fontSize: '24px',
      lineHeight: '34px',
      width: 'auto'
    },
    footer: {
      display: 'block',
      textAlign: 'center',
      width: '80%',
      margin: '20px auto 0',
      fontSize: '8px',
      lineHeight: '18px',
      opacity: '0.6'
    },
  }
}))

const Contact = () => {
  const classes = useStyles()
  return (
    <div className={classes.contact}>
      <div className={classes.container}>
        <h2 className={classes.getInTouch}>Please get in touch, if you would like to work with us...</h2>
        <Button href="mailto:hi@builtbycrane.co.uk" className={classes.btn}>hi@builtbycrane.co.uk</Button>
        <div className={classes.footer}>
          <p className={classes.footerInfo}>
            <b>crane.</b> 1 Proctor Walk, Hawkinge, Kent CT18 7QS
          </p>
          <p className={classes.footerInfo}>
            &copy; Crane Applications Ltd {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact
