import HomeIcon from '@mui/icons-material/Home'
import MenuIcon from '@mui/icons-material/Menu'
import SettingsIcon from '@mui/icons-material/Settings'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import { useNavigate } from 'react-router-dom'

const drawerWidth = 240

export const ResponsiveDrawer = () => {
  const navigate = useNavigate()
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>

        <ListItem key={"Home"} disablePadding>
          <ListItemButton onClick={() => navigate("/")}>
            <ListItemIcon>
              <HomeIcon sx={{ 'color': 'white' }} />
            </ListItemIcon>
            <Typography fontSize={16} fontWeight={'bold'} color={'white'} margin={'15px'}>Home</Typography>
          </ListItemButton>
        </ListItem>
        <ListItem key={"Settings"} disablePadding>
          <ListItemButton onClick={() => navigate("/settings")}>
            <ListItemIcon>
              <SettingsIcon sx={{ 'color': 'white' }} />
            </ListItemIcon>
            <Typography fontSize={16} fontWeight={'bold'} color={'white'} margin={'15px'}>Settings</Typography>
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  )

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Responsive drawer
        </Typography>
      </Toolbar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: "#63527a"
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: "#63527a"
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  )
}
