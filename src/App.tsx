import '@fontsource/lato'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import axios from 'axios'
import { Link, Route, Routes } from 'react-router-dom'
import { selectCharactersBasic, updateCharactersBasic } from './api_cache/api_cache_slice'
import { useAppDispatch, useAppSelector } from './hooks'
import { Character } from './pages/Character'
import { Home } from './pages/Home'
import { Main } from './pages/Main'
import { Settings } from './pages/Settings'

const getCharacters = async () => {
  const apiCache: any = {}

  var response = await axios.get(process.env.REACT_APP_API_URL + "/characters")
  console.log(response)
  console.log(process.env.REACT_APP_API_URL)
  const charactersList: Array<any> = response.data
  for (var character of charactersList) {
    apiCache[character["character_id"]] = character
  }

  return apiCache
}

export default function App() {
  const theme = createTheme({
    typography: {
      fontFamily: 'Lato'
    }
  })

  const dispatch = useAppDispatch()
  const charactersList = useAppSelector(selectCharactersBasic)
  if (Object.keys(charactersList).length === 0) {
    getCharacters()
      .then(apiCache => {
        dispatch(updateCharactersBasic(apiCache))
      })
  }

  if (localStorage.getItem("traveler-gender") === null) {
    localStorage.setItem("traveler-gender", JSON.stringify(false))
    localStorage.setItem("traveler-birthday", "User Set")
    localStorage.setItem("traveler-name", "Traveler")
    localStorage.setItem("wanderer-name", "Wanderer")
  }

  return (
    <ThemeProvider theme={theme}>
      <div>
        {/* Routes nest inside one another. Nested route paths build upon
              parent route paths, and nested route elements render inside
              parent route elements. See the note about <Outlet> below. */}

        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="character/:id" element={<Character />} />
            <Route path="settings" element={<Settings />} />

            {/* Using path="*"" means "match anything", so this route
                    acts like a catch-all for URLs that we don't have explicit
                    routes for. */}
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </div>
    </ThemeProvider>
  )
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  )
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  )
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  )
}
