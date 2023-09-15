import "@fontsource/lato/700.css"
import StarIcon from '@mui/icons-material/Star'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'
import { selectCharacter } from '../api_cache/api_cache_slice'
import { useAppSelector } from '../hooks'
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
  if (rarity === 4) {
    stars =
      <Box color='#ffce30' fontSize='large'>
        <StarIcon fontSize='large' />
        <StarIcon fontSize='large' />
        <StarIcon fontSize='large' />
        <StarIcon fontSize='large' />
      </Box>
  } else if (rarity === 5) {
    stars =
      <Box color='#ffce30' fontSize='large' >
        <StarIcon fontSize='large' />
        <StarIcon fontSize='large' />
        <StarIcon fontSize='large' />
        <StarIcon fontSize='large' />
        <StarIcon fontSize='large' />
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
