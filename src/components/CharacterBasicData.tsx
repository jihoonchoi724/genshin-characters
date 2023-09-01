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
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useAppSelector } from '../hooks'
import { selectCharacter } from '../api_cache/api_cache_slice'
import { capitalize } from '../utils'
import { store } from '../store/api_cache'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.body}`]: {
    border: 0,
    color: 'white',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#63527a',
  },
  '&:nth-of-type(even)': {
    backgroundColor: '#806A9E',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const createData = (
  field: string,
  data: string
) => {
  return { field, data };
}

export interface CharacterBasicDataProps {
  id: string | undefined
}

export const CharacterBasicData = (props: CharacterBasicDataProps) => {
  const { id } = props
  const character = useAppSelector((state) => selectCharacter(state, id!))
  const title: string = character.title
  const vision: string = capitalize(character.vision)
  const weapon: string = capitalize(character.weapon)
  const birthday: string = character.birthday
  const nation: string = capitalize(character.nation)
  const affiliation: string = character.affiliation

  const parsedBirthday = birthday.split("-")
  const storedBirthday = localStorage.getItem("traveler-birthday")!.split("-")
  var displayBirthday = "User Set"

  if (parsedBirthday.length == 3) {
    displayBirthday = parsedBirthday[1].replace(/^0+/, '') + "/" + parsedBirthday[2].replace(/^0+/, '')
  } else {
    displayBirthday = storedBirthday!.length == 3 ? (storedBirthday[1].replace(/^0+/, '') + "/" + storedBirthday[2].replace(/^0+/, '')) : ("User Set")
  }
  
  var constellation: string = character.constellation_name

  if (id!.includes("traveler")) {
    if (JSON.parse(localStorage.getItem("traveler-gender")!)) {
      constellation = "Viatrix"
    } else {
      constellation = "Viator"
    }
  }

  const rows = [
    createData('Title', title),
    createData('Vision', vision),
    createData('Weapon', weapon),
    createData('Constellation', constellation),
    createData('Birthday', displayBirthday),
    createData('Nation', nation),
    createData('Affiliation', affiliation),
  ];

  return (
    <Box>
      <TableContainer 
        component={Paper} 
        sx={{
          borderStyle:'solid', 
          borderRadius:'15px', 
          borderColor:'#806A9E',
          borderWidth:'1px', 
          backgroundColor:'#806A9E', 
          minWidth: '225px'
        }}
      >
        <Typography fontSize={25} fontWeight={'bold'} color={'white'} margin={'15px'}>Basic Info</Typography>
        <Table aria-label="character basic data">
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.field}>
                <StyledTableCell component="th" scope="row">
                  <Typography>{row.field}</Typography>
                </StyledTableCell>
                <StyledTableCell align="right"><Typography>{row.data}</Typography></StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> 
    </Box>
  )
}