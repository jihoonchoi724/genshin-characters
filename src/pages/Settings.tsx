import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { SettingsForm } from '../components/SettingsForm'

export const Settings = () => {
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
              <SettingsForm />
            </Paper>
          </Grid>

        </Grid>
      </Grid>
    </Box>
  )
}