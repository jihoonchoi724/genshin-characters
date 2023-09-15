import Box from '@mui/material/Box'
import ButtonBase from '@mui/material/ButtonBase'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import React, { useState } from 'react'
import { selectCharacter } from '../api_cache/api_cache_slice'
import { useAppSelector } from '../hooks'

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

export interface ConstellationProps {
  id: string | undefined,
  img: any
}

export const Constellation = (props: ConstellationProps) => {
  const { id } = props

  const character = useAppSelector((state) => selectCharacter(state, id!))
  const constellations = character.constellations
  const [showConsDetail, setShowConsDetail] = useState<boolean>(false)
  const [consDetailLevel, setConsDetailLevel] = useState<number>(0)

  const consList = (
    <Box>
      <TableContainer
        component={Paper}
        sx={{
          borderStyle: 'solid',
          borderRadius: '15px',
          borderColor: '#806A9E',
          borderWidth: '1px',
          backgroundColor: '#806A9E',
          minWidth: '225px'
        }}
      >
        <Typography fontSize={25} fontWeight={'bold'} color={'white'} margin={'15px'}>Constellation</Typography>
        <Table aria-label="constellation">
          <TableBody>
            {constellations.map((con: any, index: number) => (
              <StyledTableRow key={index + 1}>
                <StyledTableCell>
                  <ButtonBase
                    onClick={() => {
                      setShowConsDetail(true)
                      setConsDetailLevel(index)
                    }
                    }
                  >
                    <Typography textAlign={'left'}>{con.con_name}</Typography>
                  </ButtonBase>
                </StyledTableCell>
                <StyledTableCell>
                  <Typography textAlign={'right'}>{"C" + (index + 1).toString()}</Typography>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )

  const consDetail = (
    <Box>
      <Paper
        sx={{
          borderStyle: 'solid',
          borderRadius: '15px',
          borderColor: '#806A9E',
          borderWidth: '1px',
          backgroundColor: '#806A9E',
          minWidth: '225px',
          minHeight: '405px'
        }}
      >
        <Typography fontSize={25} fontWeight={'bold'} color={'white'} margin={'15px'}>{"Constellation - Level " + (consDetailLevel + 1).toString()}</Typography>
        <Box sx={{ backgroundColor: '#63527A' }} >
          <Table aria-label={"constellation-level-" + (consDetailLevel + 1).toString()}>
            <TableBody>
              <StyledTableRow>
                <StyledTableCell>
                  <Typography style={{ whiteSpace: 'pre-line' }}>{constellations[consDetailLevel].con_desc}</Typography>
                </StyledTableCell>
                <StyledTableCell>
                  <ButtonBase
                    onClick={() => setShowConsDetail(false)}
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
      {showConsDetail ? consDetail : consList}
    </React.Fragment>
  )
}