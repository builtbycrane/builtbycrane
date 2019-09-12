import React from 'react'

import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles(theme => ({
  intro: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '60px 0'
  },
  container: {
    width: '95vw',
    maxWidth: '960px'
  },
  copy: {
    fontFamily: theme.font.sansSerif,
    fontSize: '26px',
    lineHeight: '44px',
    fontWeight: 300,
    '& + &': {
      marginTop: '14px'
    },
    b: {
      fontWeight: 500
    }
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
}))

const Intro = () => {
  const classes = useStyles()
  return (
    <div className={classes.intro}>
      <div className={classes.container}>
        <p className={classes.copy}>
          Crane create innovative software solutions tailored to your business needs, with intuitive
          experiences that will captivate your users.
        </p>
        <p className={classes.copy}>
          We utilise modern technologies such as <b>React</b>, <b>React Native</b>, <b>GraphQL</b> and <b>Node.js</b> to build highly
          performant applications and websites for mobile and desktop.
        </p>
      </div>
    </div>
  )
}

export default Intro
