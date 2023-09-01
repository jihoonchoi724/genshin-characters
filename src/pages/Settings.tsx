import React from 'react'
import { useParams } from 'react-router-dom'
import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MailIcon from '@mui/icons-material/Mail'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import { SettingsForm } from '../components/SettingsForm'
import Paper from '@mui/material/Paper'

export const Settings = () => {
  return (
    
    <Box sx={{ flexGrow: 1 }}>
      <Grid container columns={20}>
        <Grid
          item
          sx={{
            width: { xs: '0px', md: '240px' },
            height: { xs: '0px', md: '80vh' },
          }}
        ></Grid>
        <Grid item xs paddingBottom={'220px'}>
          <Grid container item justifyContent='center' alignItems='flex-start' >
            <Paper sx={{ 
              backgroundColor: '#514363',
              minWidth: '500px', 
              width: '70vw', 
              borderStyle: 'solid', 
              borderRadius: '15px',
              borderColor: '#806A9E', 
              borderWidth: '1px',
              padding: '15px'
            }}
            >
              <SettingsForm />
            </Paper>
          </Grid>
          
        </Grid>
      </Grid>
    </Box>
  )
}