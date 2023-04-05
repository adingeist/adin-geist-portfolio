import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { HeaderButton } from './HeaderButton';

type NavItemType = {
  name: string;
  linkTo: string;
};

export const HEADER_HEIGHT = '64px';

const DRAWER_WIDTH = 240;
const navItems: NavItemType[] = [
  { name: 'Home', linkTo: '/' },
  { name: 'Projects', linkTo: '/projects' },
  { name: 'Contact', linkTo: '/contact' },
];

export const Header: React.FunctionComponent = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        ADIN GEIST
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              href={item.linkTo}
              disableRipple
              sx={{ textAlign: 'center' }}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        elevation={0}
        position="fixed"
        sx={{ height: HEADER_HEIGHT }}
        component="nav"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              marginTop: '5px',
              marginRight: 'auto',
            }}
            component="a"
            href="/"
          >
            <Box
              component="img"
              sx={{
                width: 103,
                height: 55,
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
              }}
              alt="Adin Geist"
              src="images/logo_sm.png"
            />
          </Box>
          <Box sx={{ height: '100%', display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <HeaderButton href={item.linkTo} disableRipple key={item.name}>
                {item.name}
              </HeaderButton>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: DRAWER_WIDTH,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};
