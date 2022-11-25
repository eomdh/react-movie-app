import React from 'react';
import { AppBar, Box, Toolbar, Container, Button, InputBase, IconButton, Menu, MenuItem, Typography, Link } from '@mui/material';
import { BiSearchAlt2 } from "react-icons/bi";
import { TfiMenu } from "react-icons/tfi";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { styled, alpha } from '@mui/material/styles';

const logoStyle = css`
  width: 43px;
  margin-right: 10px;
`;

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'black',
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
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
    '&:focus': {
      [theme.breakpoints.up('sm')]: {
        width: '25ch',
      },
      [theme.breakpoints.up('lg')]: {
        width: '35ch',
      }
    },
    [theme.breakpoints.up('xs')]: {
      width: '10ch',
    },
    [theme.breakpoints.up('sm')]: {
      width: '15ch',
    },
    [theme.breakpoints.up('lg')]: {
      width: '20ch',
    },
  },
}));

const pages = ['boxoffice', 'movies'];

function NavBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };

    return (
      <StyledAppBar position="static">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <img src="/assets/logo.png" alt='icon' css={logoStyle} />
            <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
              {pages.map((page) => (
                <Button 
                  key={page} 
                  sx={{ my: 2, color: 'white', display: 'block' }}
                  href={page}
                >
                  <Typography variant='h6'>
                    {page}
                  </Typography>
                </Button>
              ))}
            </Box>
            <Search>
              <SearchIconWrapper>
                <BiSearchAlt2 css={css`font-size: 23px;`}/>
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search..."
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <TfiMenu css={css`font-size: 30px;`} />
              </IconButton>
              <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', sm: 'none' },
              }}
              >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} link={page} >
                  <Typography textAlign="center">
                    <Link href={page}>{page}</Link>
                  </Typography>
                </MenuItem>
              ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </StyledAppBar>
    )
}

export default NavBar;