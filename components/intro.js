import React from 'react'

import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles(theme => ({
  intro: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '70px 0'
  },
  container: {
    width: '90vw',
    maxWidth: '960px'
  },
  copy: {
    fontFamily: theme.font.sansSerif,
    fontSize: '28px',
    lineHeight: '38px',
    fontWeight: 300,
    '& + &': {
      marginTop: '14px'
    },
    '& b': {
      fontWeight: 600
    }
  },
  '@media (max-width: 767px)': {
    intro: {
      padding: '40px 20px 30px'
    },
    copy: {
      fontSize: '22px',
      lineHeight: '32px',
      marginBottom: '30px'
    }
  }
}))

const Intro = () => {
  const classes = useStyles()
  return (
    <div className={classes.intro}>
      <div className={classes.container}>
        <p className={classes.copy}>
          <b>Crane</b> create innovative software solutions tailored to your business needs, with intuitive
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
