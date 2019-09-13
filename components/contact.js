import React from 'react'

import { createUseStyles } from 'react-jss'

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
    color: theme.color.white
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
    fontSize: '34px',
    border: `1px solid ${theme.color.white}`,
    textDecoration: 'none',
    display: 'inline-flex',
    padding: '10px 22px'
    // fontFamily: theme.font.sansSerif,
    // display: 'inline-block',
    // // maxWidth: '150px',
    // backgroundImage: `linear-gradient(right, ${theme.color.primary.dark} 0%, ${theme.color.primary.main} 51%, ${theme.color.primary.dark} 100%)`,
    // backgroundSize: '200% auto',
    // color: theme.color.white,
    // margin: '20px auto',
    // padding: '10px 15px',
    // fontSize: '26px',
    // textDecoration: 'none',
    // transition: '0.5s',
    // borderRadius: '10px',
    // '&:hover': {
    //   backgroundPosition: 'right center'
    // }
  },
  '@media (max-width: 1024px)': {
    h2: {
      fontSize: '30px',
      lineHeight: '35px'
    }
  }
}))

const Contact = () => {
  const classes = useStyles()
  return (
    <div className={classes.contact}>
      <div className={classes.container}>
        <div className={classes.getInTouch}>Please get in touch, if you would like to work with us...</div>
        <a href="mailto:hi@builtbycrane.co.uk" className={classes.btn}>hi@builtbycrane.co.uk</a>
        <div className={classes.footer}>
          <div className={classes.footerInfo}>
            <b>crane.</b> 1 Proctor Walk, Hawkinge, Kent CT18 7QS
          </div>
          <div className={classes.footerInfo}>
              &copy; Crane Applications Ltd {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
