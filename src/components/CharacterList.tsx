import Box from '@mui/material/Box'
import Grid2 from '@mui/material/Unstable_Grid2'
import { useNavigate } from 'react-router-dom'
import { selectCharactersBasic } from '../api_cache/api_cache_slice'
import { useAppSelector } from '../hooks'
import { CharacterButton } from './CharacterButton'

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
