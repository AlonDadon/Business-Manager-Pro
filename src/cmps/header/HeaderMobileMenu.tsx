import { MenuItem } from '@mui/material';
import Menu from '@mui/material/Menu';
import React, { FC } from 'react'
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';

export const HeaderMobileMenu: FC<{
    mobileMoreAnchorEl: any,
    isMobileMenuOpen: boolean, handleMobileMenuClose: any, handleProfileMenuOpen: any
}>
    = ({ mobileMoreAnchorEl, isMobileMenuOpen, handleMobileMenuClose, handleProfileMenuOpen }): JSX.Element => {
        const mobileMenuId = 'primary-search-account-menu-mobile';
        return (
            <>
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
                            {/* badgeContent = count of notifications */}
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

            </>
        )
    }
