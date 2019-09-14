import React from 'react'

import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles(theme => ({
  button: {
    fontFamily: theme.font.sansSerif,
    fontSize: '22px',
    textDecoration: 'none',
    position: 'relative',
    verticalAlign: 'middle',
    color: `${theme.color.primary.main}66`,
    display: 'block',
    // height: '60px',
    lineHeight: '60px',
    textAlign: 'center',
    transition: '0.5s',
    padding: '0 20px',
    cursor: 'pointer',
    border: `2px solid ${theme.color.primary.main}66`,
    '&:hover': {
      border: `2px solid ${theme.color.primary.main}33`,
      color: theme.color.white
    },
    '&::before, &::after': {
      width: '100%',
      height: '100%',
      zIndex: 3,
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      transform: 'scale(0)',
      transition: '0.5s'
    },
    '&::before': {
      borderBottom: `3px solid ${theme.color.white}`,
      borderLeft: `3px solid ${theme.color.white}`,
      transformOrigin: '0 100%'
    },
    '&::after': {
      borderTop: `3px solid ${theme.color.white}`,
      borderRight: `3px solid ${theme.color.white}`,
      transformOrigin: '100% 0%'
    },
    '&:hover::after, &:hover::before': {
      transform: 'scale(1)'
    }
  }
}))

const Button = ({ href, children }) => {
  const classes = useStyles()
  return (
    <a href={href} className={classes.button}>
      {children}
    </a>
  )
}

export default Button
