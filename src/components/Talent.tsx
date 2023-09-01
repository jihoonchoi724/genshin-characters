import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import localizedData from '../data/characters_localized.json'
import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import ButtonBase from '@mui/material/ButtonBase'
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

export interface TalentProps {
  id: string | undefined,
  img: any
}

export const Talent = (props: TalentProps) => {
  const { id } = props
  const character = useAppSelector((state) => selectCharacter(state, id!))
  const talents = character.talents

  const [showTalentsDetail, setShowTalentsDetail] = useState<boolean>(false)
  const [talentsDetailLevel, setTalentsDetailLevel] = useState<number>(0)

  const talentsList = (
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
        <Typography fontSize={25} fontWeight={'bold'} color={'white'} margin={'15px'}>Talents</Typography>
        <Table aria-label="talents">
          <TableBody>
            {talents.map((talent: any, index: number) => (
              <StyledTableRow key={index + 1}>
                <StyledTableCell>
                  <ButtonBase
                    onClick={() => {
                        setShowTalentsDetail(true)
                        setTalentsDetailLevel(index)
                      }
                    }
                  >
                    <Typography textAlign={'left'}>{talent.talent_name}</Typography>
                  </ButtonBase>                  
                </StyledTableCell>
                <StyledTableCell>
                  <Typography textAlign={'right'}>{talent.talent_type}</Typography>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )

  const talentsDetail = (
    <Box>
      <Paper
        sx={{
          borderStyle:'solid', 
          borderRadius:'15px', 
          borderColor:'#806A9E',
          borderWidth:'1px', 
          backgroundColor:'#806A9E', 
          minWidth: '225px',
          minHeight: '405px'
        }}
      >
        <Typography fontSize={25} fontWeight={'bold'} color={'white'} margin={'15px'}>{talents[talentsDetailLevel].talent_type}</Typography>
        <Box sx={{backgroundColor: '#63527A'}} >
          <Table aria-label={"talent-description"}>
            <TableBody>
              <StyledTableRow>
                <StyledTableCell>
                  <Typography style={{whiteSpace: 'pre-line'}}>{talents[talentsDetailLevel].talent_desc}</Typography>
                </StyledTableCell>
                <StyledTableCell>
                  <ButtonBase
                    onClick={() => setShowTalentsDetail(false)}
                  >
                    Back
                  </ButtonBase>
                </StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </Box>
      </Paper>
    </Box>
  )

  return (
    <React.Fragment>
      {showTalentsDetail ? talentsDetail : talentsList}
    </React.Fragment>
  )
}