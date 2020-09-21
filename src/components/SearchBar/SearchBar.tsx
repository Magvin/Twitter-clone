import React, { useRef } from 'react';
import InputBase from '@material-ui/core/InputBase';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

// type propType = {
//   classes: {
//     search: string;
//     searchIcon: string;
//     inputRoot: string;
//     inputInput: string;
//   };
// };

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    search: {
      position: 'relative',
      borderRadius: 50,
      backgroundColor: '#E6ECF0',
      marginLeft: 0,
      width: 350,
      transition: '0.2s all',
    },

    searchOnEnter: {
      backgroundColor: 'white',
      border: `1px solid ${theme.palette.primary.main}`,
      '& .makeStyles-searchIcon-13 svg': {
        fill: theme.palette.primary.main,
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      color: '#7D8D9A',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: '10px 0',
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      fontSize: 15,
      lineHeight: 20,
      minHeight: 20,
    },
  })
);
export const SearchBar: React.FC = (): React.ReactElement => {
  const searchRef = useRef<HTMLDivElement>(null);
  const classes = useStyles();
  return (
    <div className={classes.search} ref={searchRef}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder='Search Twitter'
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
        onFocus={() => {
          const element = searchRef.current;
          if (!element?.className.includes(classes.searchOnEnter)) {
            element?.classList.add(classes.searchOnEnter);
          }
        }}
        onBlur={() => {
          const element = searchRef.current;
          if (element?.className.includes(classes.searchOnEnter)) {
            element?.classList.remove(classes.searchOnEnter);
          }
        }}
      />
    </div>
  );
};
