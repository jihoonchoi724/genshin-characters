import React, {useState, useEffect} from 'react'
import { styled } from '@mui/material/styles'
import ButtonBase from '@mui/material/ButtonBase'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { CardActionArea } from '@mui/material'
import { CharacterButton } from './CharacterButton'
import localizedData from '../data/characters_localized.json'
import universalData from '../data/characters_universal.json'
import Grid2 from '@mui/material/Unstable_Grid2'
import {useNavigate} from 'react-router-dom'
import Box from '@mui/material/Box';
import { useAppSelector } from '../hooks'
import { selectCharactersBasic } from '../api_cache/api_cache_slice'

/*
const sortByName = (language: string) => {
  return (a: string, b: string) => {
    const charLeft = localizedData[a as keyof typeof localizedData]
    const charRight = localizedData[b as keyof typeof localizedData]
    const nameLeft = charLeft[language as keyof typeof charLeft]
    const nameRight = charRight[language as keyof typeof charRight]
    if (nameLeft > nameRight) {
      return 1
    }
    if (nameLeft < nameRight) {
      return -1
    }
    return 0
  }
}
*/

export const CharacterList = () => {
  const navigate = useNavigate()
  const img: any = require.context("../images/", true)

  const charactersList = useAppSelector(selectCharactersBasic)
  //charactersList.sort(sortByName(language))

  const characters: any = Array.from(Object.keys(charactersList)).map((character: string) => {

    return (
    <Grid2>
      <CharacterButton 
        charID={character}
        charName={charactersList[character].name}
        rarity={charactersList[character].rarity}
        vision={charactersList[character].vision}
        context={img}
        onClick={() => {
          navigate("/character/" + character)
          window.scrollTo(0, 0)
        }}
      />
    </Grid2>
    )
  })

  return (
    <Box maxWidth="lg" >
      <Grid2 container spacing={2} justifyContent='center' >
        {characters}
      </Grid2>
    </Box>
  )
}
