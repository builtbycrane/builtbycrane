import React from 'react'

import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  wrapper: {
    width: '100%',
    backgroundColor: '#eee'
  },
  container: {
    maxWidth: '1040px',
    padding: '80px 20px',
    margin: '0 auto'
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
    margin: '0 0 25px'
  },
  btn: {
    display: 'block',
    maxWidth: '150px',
    width: '100%',
    backgroundImage: 'linear-gradient(right, #134E5E 0%, #71B280 51%, #134E5E 100%)',
    backgroundSize: '200% auto',
    color: '#fff',
    margin: '20px auto',
    padding: '10px 15px',
    fontSize: '26px',
    textDecoration: 'none',
    transition: '0.5s',
    borderRadius: '10px',
    '&:hover': {
      backgroundPosition: 'right center'
    }
  },
  '@media (max-width: 1024px)': {
    h2: {
      fontSize: '30px',
      lineHeight: '35px'
    }
  }
})

const Contact = () => {
  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.image}>
          <img src="/static/icon-plane.png" alt="Folded Crane Icon" className={classes.img}/>
        </div>
        <div className={classes.text}>
          <h2 className={classes.h2}>Please get in touch, if you would like to work with us...</h2>
          <a href="mailto:hi@builtbycrane.co.uk" className={classes.btn}>email us</a>
        </div>
      </div>
    </div>
  )
}

export default Contact
