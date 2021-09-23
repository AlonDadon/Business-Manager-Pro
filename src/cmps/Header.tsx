import React, { useEffect, useRef, useState, FC } from 'react'
import { NavLink } from 'react-router-dom'
import { useOnScreen } from '../service/customHooks'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { styled, alpha } from '@mui/material/styles';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { HeaderNav } from './HeaderNav';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
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
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));
interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
  }

export const Header: FC<{ toogleDarkMode: Function }> = ({ toogleDarkMode }): JSX.Element => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    // const [AppMenueAnchorEl, setAppMenueAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
        React.useState<null | HTMLElement>(null);

    const [open, setOpen] = useState(false);

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    // const handleDrawerClose = () => {
    //     setOpen(false);
    // };
    const isMenuOpen = Boolean(anchorEl);
    // const isAppMenuOpen = Boolean(AppMenueAnchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };
    // const handleAppMenuClose = () => {
    //     setAppMenueAnchorEl(null);
    // };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };
    // const handleAppMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    //     setAppMenueAnchorEl(event.currentTarget);
    // };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );
    // const AppMenuId = 'primary-menu';
    // const renderAppMenu = (
    //     <Menu
    //         anchorEl={AppMenueAnchorEl}
    //         anchorOrigin={{
    //             vertical: 'top',
    //             horizontal: 'right',
    //         }}
    //         id={AppMenuId}
    //         keepMounted
    //         transformOrigin={{
    //             vertical: 'top',
    //             horizontal: 'right',
    //         }}
    //         open={isAppMenuOpen}
    //         onClose={handleAppMenuClose}
    //     >
    //         <NavLink to='/'><MenuItem onClick={handleMenuClose}>Home</MenuItem></NavLink>
    //         <NavLink to='/todo'><MenuItem onClick={handleMenuClose}>Todo</MenuItem></NavLink>

    //     </Menu>
    // );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}

        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                        // aria-controls={AppMenuId}
                        aria-haspopup="true"
                        onClick={handleDrawerToggle}
                    >
                        <MenuIcon />

                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        MB
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={4} color="error">
                                <MailIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Badge badgeContent={17} color="error">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
                <HeaderNav open={open} handleDrawerToggle={handleDrawerToggle}/>
            </AppBar>
            {/* {renderAppMenu} */}
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
}


// export const Header:FC<{toogleDarkMode:Function}> = ({toogleDarkMode}):JSX.Element => {
//     const [setRef, visible] = useOnScreen({threshold:0.7})
//       useEffect(() => {
//         console.log(setRef, visible);
//       },[setRef, visible])

//     return (
//         <header ref={setRef} className="main-header">
//             <h1 className="logo" >MB</h1>
//             {visible && <h1>Im Workinnnnnnnng</h1>}
//             <nav>
//                 <ul className="nav">
//                     <NavLink to="/">Home</NavLink>
//                     <NavLink to="/todo">Todo</NavLink>
//                     <NavLink to="/about">About</NavLink>
//                     <NavLink to="/contact">Contact</NavLink>
//                 </ul>
//             </nav>
//             <NavLink to="/login" className="btn-login">Login</NavLink>
//             <DarkModeIcon onClick={() => {toogleDarkMode()}}/>
//         </header>
//     )
// }

