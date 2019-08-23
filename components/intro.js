import React from 'react'

import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  wrapper: {
    maxWidth: '1040px',
    margin: '0 auto',
    padding: '0 20px 80px'
  },
  image: {
    maxWidth: '120px',
    width: '100%',
    height: '120px',
    margin: '0 auto 10px'
  },
  img: {
    width: '100%',
    display: 'block'
  },
  text: {
    textAlign: 'center'
  },
  h2: {
    fontSize: '45px',
    lineHeight: '55px',
    margin: '0 0 25px'
  },
  copy: {
    fontSize: '26px',
    lineHeight: '36px',
    margin: '0 0 10px'
  },
  '@media (max-width: 1024px)': {
    wrapper: {
      padding: '40px 20px 80px'
    },
    h2: {
      fontSize: '30px',
      lineHeight: '35px'
    },
    copy: {
      fontSize: '22px',
      lineHeight: '32px'
    }
  }
})

const Intro = () => {
  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <div className={classes.image}>
        <img src="/static/icon-origami.png" alt="Folded Crane Icon" className={classes.img}/>
      </div>
      <div className={classes.text}>
        <h2 className={classes.h2}>Crane create innovative software solutions...</h2>
        <p className={classes.copy}>tailored to your business needs, with intuitive experiences that will captivate your users.</p>
        <p className={classes.copy}>We utilise modern technologies such as React, React Native, GraphQL and Node.js to build highly performant applications and websites for mobile and desktop.</p>
      </div>
    </div>
  )
}

export default Intro
