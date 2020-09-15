import React from 'react';
import { Button, makeStyles, Typography } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    height: '100vh',
  },
  blueSide: {
    backgroundColor: '#71C9F8',
    overflow: 'hidden',
    flex: '0 0 50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  blueSideList: {
    zIndex: 1,
    listStyle: 'none',
    '& li': {
      color: 'white',
      display: 'flex',
      '& p': {
        fontSize: 19,
        fontWeight: 700,
        marginBottom: 40,
        marginLeft: 15,
      },
    },
  },
  blueSideIcons: {
    zIndex: 1,
    fontSize: 28.75,
  },
  loginSide: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '0 0 50%',
    backgroundColor: 'white',
    zIndex: 1,
  },
  twitterIcon: {
    fontSize: 41.25,
  },
  twitterIconBig: {
    fontSize: '175vh',
    position: 'absolute',
    left: '-15%',
    bottom: '-40%',
    color: 'rgba(29,161,242,1.00)',
  },
  loginSideWrapper: {
    width: 380,
  },
  loginSideTitle: {
    fontWeight: 700,
    fontSize: 30,
    paddingTop: 15,
  },
  loginSideJoin: {
    marginTop: 49,
    marginBottom: 15,
  },
  loginSideButton: {
    marginBottom: 15,
  },
}));

export function SignIn() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <section className={classes.blueSide}>
        <TwitterIcon className={classes.twitterIconBig} />
        <ul className={classes.blueSideList}>
          <li>
            <SearchSharpIcon className={classes.blueSideIcons} />
            <Typography>Follow your interests.</Typography>
          </li>
          <li>
            <PeopleOutlineIcon className={classes.blueSideIcons} />
            <Typography>Hear what people are talking about.</Typography>
          </li>
          <li>
            <ChatBubbleOutlineIcon className={classes.blueSideIcons} />
            <Typography>Join the conversation.</Typography>
          </li>
        </ul>
      </section>
      <section className={classes.loginSide}>
        <div className={classes.loginSideWrapper}>
          <TwitterIcon className={classes.twitterIcon} color='primary' />
          <Typography className={classes.loginSideTitle} variant='h4'>
            See what’s happening in the world right now
          </Typography>
          <Typography className={classes.loginSideJoin}>
            <b>Join Twitter today.</b>
          </Typography>
          <Button
            className={classes.loginSideButton}
            variant='contained'
            color='primary'
            fullWidth>
            Sign up
          </Button>
          <Button
            className={classes.loginSideButton}
            variant='outlined'
            color='primary'
            fullWidth>
            Log in
          </Button>
        </div>
      </section>
    </div>
  );
}
