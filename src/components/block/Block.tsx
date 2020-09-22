import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Divider } from '@material-ui/core';

type article = {
  title: string;
  category: string;
  time: string;
  image: string;
};
type propType = {
  title: string;
  articles: article[];
};

const useStyles = makeStyles({
  wrapper: {
    width: 350,
    backgroundColor: '#F5F8FA',
    marginTop: 15,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
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
  subtitle: {
    fontSize: 15,
    fontWeight: 700,
    maxWidth: 225,
  },
});

const Block = ({ title, articles }: propType): React.ReactElement => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <span className={classes.title}>{title}</span>
      {articles.map((item) => (
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
    </div>
  );
};

export default Block;
