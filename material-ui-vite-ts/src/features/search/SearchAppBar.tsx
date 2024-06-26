import SearchIcon from '@mui/icons-material/Search';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { alpha, styled } from '@mui/material/styles';
import * as React from 'react';
import { useState } from 'react';
import { getDisplayBasedOnSearch, useAppStateContext } from '../../StateProvider';
import PositionedMenu from '../corner-menu/PositionedMenu';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  // width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function addToSearch(newPath: string) {
  window.history.pushState({}, '', `search?q=${newPath}`);
}

export default function SearchAppBar() {
  const [{ searchParams }, dispatch] = useAppStateContext();

  const [searchTerm, setSearchTerm] = useState<string>("");
  const changeHandler = async (v: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): Promise<void> => {
    const value = v.target.value;
    setSearchTerm(value);
    // todo that is optimistic udpates, right?
    addToSearch(value)
    const titleSearch: Record<string, string> = { title: value }
    const p = new URLSearchParams(titleSearch);
    dispatch({ type: 'SET_SEARCH_PARAMS', payload: p })
    await getDisplayBasedOnSearch(p, dispatch)
  };



  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            onClick={() => {
              const p = new URLSearchParams()
              setSearchTerm('');
              dispatch({ type: 'SET_SEARCH_PARAMS', payload: p })
            }}
          >
            NBKMRK
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={searchTerm}
              onChange={changeHandler}
            />
          </Search>
          <IconButton
            size="large"
            edge="start"
            // color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <PositionedMenu />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}