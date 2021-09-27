import { FC } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';


export const HeaderNav: FC<{ open: boolean, handleDrawerToggle: Function }> = ({ open, handleDrawerToggle }) => {
  const theme = useTheme();
  const cmpStyle = {
    box: { display: 'flex' },
    drawer: {
      width: 240,
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        width: 240,
        boxSizing: 'border-box',
      },
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    }
  }
  const data = {
    topBarTitles: ['Todo', 'Learn it', 'Leads', 'Build a page'],
    bottomBarTitles: ['Workers management', 'Statistics', 'Leads']
  }

  const DrawerHeader = styled('div')(() => (cmpStyle.drawerHeader));

  return (
    // <Box sx={cmpStyle.box}>
    <>
      <Drawer
        sx={cmpStyle.drawerHeader}
        variant="persistent"
        anchor="left"
        open={open}
        >
        <DrawerHeader>
          <IconButton onClick={() => handleDrawerToggle()}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {data.topBarTitles.map((text, index) => (
            <ListItem component={Link} to={`/${text}`} button key={text}>
              <ListItemIcon  >
                {index % 2 === 0 ? <InboxIcon  /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}

        </List>
        <Divider />
        <List>
          {data.bottomBarTitles.map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      </>
    // </Box>
  );
}