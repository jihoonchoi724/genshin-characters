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
import Typography from '@mui/material/Typography'
import { CharacterHeader } from '../components/CharacterHeader'
import { CharacterInfo } from '../components/CharacterInfo'
import { CharacterBasicData } from '../components/CharacterBasicData'
import { Talent } from '../components/Talent'
import { Constellation } from '../components/Constellation'
import { useAppSelector } from '../hooks'
import { selectCharacter } from '../api_cache/api_cache_slice'
import { selectCharactersBasic } from '../api_cache/api_cache_slice'
import { updateCharacter } from '../api_cache/api_cache_slice'
import { useAppDispatch } from '../hooks'
import axios from 'axios'

const getCharacter = async (id: string) => {
  var response = await axios.get(process.env.REACT_APP_API_URL + "/characters/" + id)
  return response.data
}

export const Character = () => {
  const { id } = useParams<Record<string, string | undefined>>()
  const img: any = require.context('../images/', true)
  const character = useAppSelector((state) => selectCharacter(state, id!))

  const dispatch = useAppDispatch()
  if (typeof(character) == 'undefined') {
    getCharacter(id!)
    .then(data => {
      dispatch(updateCharacter([id!, data]))
    })
  }

  const charactersList = useAppSelector(selectCharactersBasic)
  var content

  if (!Array.from(Object.keys(charactersList)).includes(id!)) {
    content = (
      <React.Fragment>
        <Typography margin='45px' variant='h2' color={'white'} fontWeight={'bold'} >Invalid Character</Typography>
      </React.Fragment>
    )
  }
  else if (typeof(character) == 'undefined') {
    content = (
      <React.Fragment>
        
      </React.Fragment>
    )
  }
  else {
    content = (
      <React.Fragment>
        <CharacterHeader id={id} img={img}/>
        <Grid container columns={18} spacing={2}>
          <Grid item xs>
            <CharacterBasicData id={id} />
          </Grid>
          <Grid item xs>
            <Talent id={id} img={img} />
          </Grid>
          <Grid item xs>
            <Constellation id={id} img={img} />
          </Grid>
        </Grid>
      </React.Fragment>
    )
  }
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
          <CharacterInfo>
            {content}
          </CharacterInfo>
        </Grid>
      </Grid>
    </Box>
  )
}
