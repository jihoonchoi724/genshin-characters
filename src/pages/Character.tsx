import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
import { selectCharacter, selectCharactersBasic, updateCharacter } from '../api_cache/api_cache_slice'
import { CharacterBasicData } from '../components/CharacterBasicData'
import { CharacterHeader } from '../components/CharacterHeader'
import { CharacterInfo } from '../components/CharacterInfo'
import { Constellation } from '../components/Constellation'
import { Talent } from '../components/Talent'
import { useAppDispatch, useAppSelector } from '../hooks'

const getCharacter = async (id: string) => {
  var response = await axios.get(process.env.REACT_APP_API_URL + "/characters/" + id)
  return response.data
}

export const Character = () => {
  const { id } = useParams<Record<string, string | undefined>>()
  const img: any = require.context('../images/', true)
  const character = useAppSelector((state) => selectCharacter(state, id!))

  const dispatch = useAppDispatch()
  if (typeof (character) == 'undefined') {
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
  else if (typeof (character) == 'undefined') {
    content = (
      <React.Fragment>

      </React.Fragment>
    )
  }
  else {
    content = (
      <React.Fragment>
        <CharacterHeader id={id} img={img} />
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
