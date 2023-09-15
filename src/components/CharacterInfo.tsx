import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import React from 'react'

interface CharacterInfoProps {
  children?: React.ReactNode
}

export const CharacterInfo = ({ children }: CharacterInfoProps) => {
  return (
    <Grid container item justifyContent='center' alignItems='flex-start' >
      <Paper sx={{
        backgroundColor: '#514363',
        minWidth: '500px',
        width: '70vw',
        borderStyle: 'solid',
        borderRadius: '15px',
        borderColor: '#806A9E',
        borderWidth: '1px',
        padding: '15px'
      }}
      >
        {children}
      </Paper>
    </Grid>
  )
}