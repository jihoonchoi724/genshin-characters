import React from 'react'
import { useParams } from 'react-router-dom'
import localizedData from '../data/characters_localized.json'
import universalData from '../data/characters_universal.json'
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
import Paper from '@mui/material/Paper'
import "@fontsource/lato/700.css"
import StarIcon from '@mui/icons-material/Star'
import { useAppSelector } from '../hooks'
import { selectCharacter } from '../api_cache/api_cache_slice'
import { capitalize } from '../utils'

interface CharacterHeaderProps {
  id: string | undefined,
  img: any
}

export const CharacterHeader = (props: CharacterHeaderProps) => {
  const { id, img } = props

  const character = useAppSelector((state) => selectCharacter(state, id!))
  const charName: string = character.name
  const rarity: number = character.rarity
  const element: string = character.vision.toLowerCase()
  const weapon: string = character.weapon.toLowerCase()

  let stars: React.ReactNode
  if (rarity == 4) {
    stars =
      <Box color='#ffce30' fontSize='large'>
        <StarIcon fontSize='large'/>
        <StarIcon fontSize='large'/>
        <StarIcon fontSize='large'/>
        <StarIcon fontSize='large'/>
      </Box>
  } else if (rarity == 5) {
    stars =
      <Box color='#ffce30' fontSize='large' >
        <StarIcon fontSize='large'/>
        <StarIcon fontSize='large'/>
        <StarIcon fontSize='large'/>
        <StarIcon fontSize='large'/>
        <StarIcon fontSize='large'/>
      </Box>
  } else {
    stars = <React.Fragment></React.Fragment>
  }

  var imgPath = img('./characters/' + id + '/splash.webp')
  var charDisplayName: string = charName

  if (id!.includes("traveler")) {
    const travelerGender: string = JSON.parse(localStorage.getItem("traveler-gender")!) ? ("f") : ("m")
    imgPath = img('./characters/traveler/splash_' + travelerGender + ".webp")
    charDisplayName = localStorage.getItem("traveler-name") + " (" + capitalize(element) + ")"
  } else if (id!.includes("wanderer")) {
    charDisplayName = localStorage.getItem("wanderer-name")!
  }

  return (
    <Box>
      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center'
      }}
      >
        <Box width='100%'>
          <Box margin='30px 30px 0px 30px'>
            <Typography variant='h2' color={'white'} fontWeight={'bold'} >
              {charDisplayName}
              <Box
                component="img"
                src={img('./icons/elements/' + element + '.svg')}
                alt={element}
                margin={'0px 10px 0px 16px'}
                width={'45px'}
                height={'45px'}
              />
              <Box
                component="img"
                src={img('./icons/weapons/' + weapon + '.webp')}
                alt={weapon}
                width={'45px'}
                height={'45px'}
              />
            </Typography>
            <Box marginTop={'5px'}>
              {stars}
            </Box>
          </Box>
        </Box>
        <Box
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          width={'100%'}
        >
          <Box
            component="img"
            src={imgPath}
            height={'45vw'}
            minWidth={'500px'}
            paddingBottom={'15px'}
            sx={{
              objectFit: 'cover'
            }}
          />
        </Box>
      </Box>
    </Box>
  )
}
