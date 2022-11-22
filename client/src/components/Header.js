import React from 'react';
import { AppBar, Box, Toolbar, Container, Button, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { styled, alpha } from '@mui/material/styles';
import icon from '../assets/icon_white.png';

const AppBarStyle = css`
  background-color: black;
`;

const IconStyle = css`
  width: 45px;
  margin-right: 10px;
`;

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('xs')]: {
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
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    '&:focus': {
      [theme.breakpoints.up('xs')]: {
        width: '10ch',
      },
      [theme.breakpoints.up('sm')]: {
        width: '25ch',
      },
      [theme.breakpoints.up('lg')]: {
        width: '40ch',
      }
    },
    [theme.breakpoints.up('xs')]: {
      width: '10ch',
    },
    [theme.breakpoints.up('lg')]: {
      width: '20ch',
    },
  },
}));

const pages = ['BoxOffice', 'Movies'];

function Header() {
    return (
      <AppBar position="static" css={AppBarStyle} >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <img src={icon} alt='icon' css={IconStyle} />
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  sx={{ my: 2, color: 'white', display: 'block', }}
                  href={page}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search..."
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Toolbar>
        </Container>
      </AppBar>
    )
}

export default Header;