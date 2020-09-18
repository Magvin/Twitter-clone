import React from 'react';
import classnames from 'classnames';
import Grid from '@material-ui/core/Grid';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationIcon from '@material-ui/icons/Notifications';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import UserIcon from '@material-ui/icons/PermIdentityOutlined';

import { Button, IconButton, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  iconTypography: {
    marginLeft: 20,
    marginRight: 15,
    color: 'black',
    fontWeight: 700,
    fontSize: 19,
  },
  ulStyle: {
    listStyle: 'none',
    padding: 0,
  },
  listStyle: {
    paddingBottom: 7,
    paddingTop: 7,
    lineHeight: 1.3125,
    '& button': {
      padding: 5,
      paddingBottom: 7,
      paddingTop: 7,
    },
    '& button:hover': {
      backgroundColor: 'rgba(29, 161, 242, 0.15)',
      borderRadius: 99,
      transition: 0.2,
      '& p': {
        color: 'rgb(29, 161, 242)',
      },
      '& svg': {
        color: 'rgb(29, 161, 242)',
      },
    },
  },
  menuStyle: {
    display: 'flex',
    justifyContent: 'center',
  },
  twitterIcon: {
    marginLeft: 4,
  },
  iconStyles: {
    fontSize: 28.25,
    color: 'black',
  },
  tweetButton: {
    marginBottom: 15,
    marginTop: 15,
  },
}));

export const Home = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={3} className={classes.menuStyle}>
        <ul className={classes.ulStyle}>
          <li className={classnames(classes.listStyle, classes.twitterIcon)}>
            <TwitterIcon className={classes.iconStyles} />
          </li>
          <li className={classes.listStyle}>
            <IconButton aria-label='twitter-logo' size='small'>
              <HomeIcon className={classes.iconStyles} />
              <Typography className={classes.iconTypography}>Home</Typography>
            </IconButton>
          </li>
          <li className={classes.listStyle}>
            <IconButton aria-label='twitter-logo' size='small'>
              <SearchIcon className={classes.iconStyles} />
              <Typography className={classes.iconTypography}>
                Explore
              </Typography>
            </IconButton>
          </li>
          <li className={classes.listStyle}>
            <IconButton aria-label='twitter-logo' size='small'>
              <NotificationIcon className={classes.iconStyles} />
              <Typography className={classes.iconTypography}>
                Notifications
              </Typography>
            </IconButton>
          </li>
          <li className={classes.listStyle}>
            <IconButton aria-label='twitter-logo' size='small'>
              <EmailOutlinedIcon className={classes.iconStyles} />
              <Typography className={classes.iconTypography}>
                Messages
              </Typography>
            </IconButton>
          </li>
          <li className={classes.listStyle}>
            <IconButton aria-label='twitter-logo' size='small'>
              <BookmarkBorderOutlinedIcon className={classes.iconStyles} />
              <Typography className={classes.iconTypography}>
                Bookmarks
              </Typography>
            </IconButton>
          </li>
          <li className={classes.listStyle}>
            <IconButton aria-label='twitter-logo' size='small'>
              <ListAltOutlinedIcon className={classes.iconStyles} />
              <Typography className={classes.iconTypography}>Lists</Typography>
            </IconButton>
          </li>
          <li className={classes.listStyle}>
            <IconButton aria-label='twitter-logo' size='small'>
              <UserIcon className={classes.iconStyles} />
              <Typography className={classes.iconTypography}>
                Profile
              </Typography>
            </IconButton>
          </li>
          <li className={classes.tweetButton}>
            <Button color='primary' variant='contained' fullWidth>
              Tweet
            </Button>
          </li>
        </ul>
      </Grid>
      <Grid item xs={5}>
        <Grid container>center</Grid>
      </Grid>
      <Grid item xs={4}>
        <Grid container>right</Grid>
      </Grid>
    </Grid>
  );
};
