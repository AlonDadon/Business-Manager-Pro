import { MenuItem } from '@mui/material';
import Menu from '@mui/material/Menu';
import React, { FC } from 'react'

export const HeaderMenu: FC<{ handleMenuClose: any, isMenuOpen: boolean, anchorEl: HTMLElement | null }>
    = ({ isMenuOpen, handleMenuClose, anchorEl }): JSX.Element => {

        const menuId = 'primary-search-account-menu';
        return (
            <>
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

            </>
        )
    }