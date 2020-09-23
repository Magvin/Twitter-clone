import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import { Divider } from '@material-ui/core';

type article = {
  title: string;
  category?: string;
  time?: string;
  image: string;
};
type whoToFollow = {
  title: string;
  image: string;
  follow: Function;
  userName: string;
};
type propType = {
  title: string;
  articles?: article[];
  whoToFollow?: whoToFollow[];
};

const useStyles = makeStyles({
  wrapper: {
    width: 350,
    backgroundColor: '#F5F8FA',
    marginTop: 15,
    borderRadius: 30,
  },
  title: {
    padding: '10px 15px',
    display: 'block',
    fontWeight: 800,
    fontSize: 19,
    lineHeight: '1.3125',
  },
  article: {
    padding: '10px 15px',
    display: 'flex',
    flexDirection: 'column',
  },
  whoToFollow: {
    padding: '10px 15px',
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
  },
  info: {
    flexDirection: 'row',
    display: 'flex',
    fontSize: 13,
    color: 'rgb(101, 119, 134)',
    marginBottom: 2,
    position: 'relative',
  },
  image: {
    position: 'absolute',
    width: 69,
    height: 69,
    objectFit: 'cover',
    borderRadius: 10,
    right: 0,
  },
  imageWhoToFollow: {
    height: 49,
    width: 49,
    borderRadius: 50,
    marginRight: 10,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: 700,
    maxWidth: 225,
    flexDirection: 'column',
    display: 'inherit',
  },
  userName: {
    fontSize: 13,
    color: 'rgb(101, 119, 134)',
    fontWeight: 400,
  },
});

const Block = ({
  title,
  articles,
  whoToFollow,
}: propType): React.ReactElement => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <span className={classes.title}>{title}</span>
      {articles &&
        articles.map((item) => (
          <div>
            <Divider />
            <div className={classes.article}>
              <div className={classes.info}>
                <div style={{ paddingRight: '10px' }}>{item.category}</div>
                <div>{item.time}</div>
                <img className={classes.image} src={item.image} alt='' />
              </div>
              <div className={classes.subtitle}>{item.title}</div>
            </div>
          </div>
        ))}
      {whoToFollow &&
        whoToFollow.map((item) => (
          <div>
            <Divider />
            <div className={classes.whoToFollow}>
              <div className={classes.info}>
                <img
                  className={classes.imageWhoToFollow}
                  src={item.image}
                  alt=''
                />
              </div>
              <div className={classes.subtitle}>
                {item.title}
                <span className={classes.userName}>{item.userName}</span>
              </div>
              <div>
                <Button
                  color='primary'
                  variant='outlined'
                  style={{
                    position: 'absolute',
                    right: '0',
                    marginRight: '12px',
                  }}>
                  Follow
                </Button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Block;
