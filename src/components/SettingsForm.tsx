import { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles'
import ButtonBase from '@mui/material/ButtonBase'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { CardActionArea } from '@mui/material'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid'

export const SettingsForm = () => {
  const parsedBirthday = localStorage.getItem("traveler-birthday")!.split("-")
  const validDate = (parsedBirthday.length == 3)
  const [travelerGender, setTravelerGender] = useState<boolean>(JSON.parse(localStorage.getItem("traveler-gender")!)) //false == m, true = f
  const [travelerBirthdayMonth, setTravelerBirthdayMonth] = useState<string>(validDate ? (parsedBirthday[1]) : ("1"))
  const [travelerBirthdayDay, setTravelerBirthdayDay] = useState<string>(validDate ? (parsedBirthday[2]) : ("1"))
  const [travelerName, setTravelerName] = useState<string>(localStorage.getItem("traveler-name")!)
  const [wandererName, setWandererName] = useState<string>(localStorage.getItem("wanderer-name")!)

  useEffect(() => {
    localStorage.setItem("traveler-gender", JSON.stringify(travelerGender))
  }, [travelerGender])

  useEffect(() => {
    localStorage.setItem("traveler-birthday", "0000-" + travelerBirthdayMonth + "-" + travelerBirthdayDay)
  }, [travelerBirthdayMonth, travelerBirthdayDay])

  useEffect(() => {
    localStorage.setItem("traveler-name", travelerName)
  }, [travelerName])
  
  useEffect(() => {
    localStorage.setItem("wanderer-name", wandererName)
  }, [wandererName])
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
              Settings
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box component="form" maxWidth='600px' margin='auto' paddingTop='50px'>
        <Grid container rowSpacing={1}>
          <Grid xs={6} margin='auto'>
            <Typography fontSize={25} fontWeight={'bold'} color={'white'} margin={'15px'}>Traveler's gender</Typography>
          </Grid>
          <Grid xs={6} margin='auto'>
            <Switch 
              checked={travelerGender}
              onChange={(e) => setTravelerGender(e.target.checked)}
            />
          </Grid>
          <Grid xs={6} margin='auto'>
            <Typography fontSize={25} fontWeight={'bold'} color={'white'} margin={'15px'}>Traveler's birthday</Typography>
          </Grid>
          <Grid xs={6} margin='auto'>
            <TextField 
              required
              id="traveler-birthday-month"
              label="Month"
              variant='filled'
              value={travelerBirthdayMonth}
              type="number"
              onChange={(e) => setTravelerBirthdayMonth(e.target.value)}
              sx={{
                width: "100px",
                input: { color: 'white' },
                "& .MuiFormLabel-root": {
                  color: 'white'
                },
                "& .MuiInputBase-root.MuiFilledInput-root:before": {
                  borderBottomColor: '#806A9E',
                },
                "& .MuiInputBase-root.MuiFilledInput-root:after": {
                  borderBottomColor: 'white',
                },
              }}
            />
            <TextField 
              required
              id="traveler-birthday-day"
              label="Day"
              variant='filled'
              value={travelerBirthdayDay}
              type="number"
              onChange={(e) => setTravelerBirthdayDay(e.target.value)}
              sx={{
                width: "100px",
                input: { color: 'white' },
                "& .MuiFormLabel-root": {
                  color: 'white'
                },
                "& .MuiInputBase-root.MuiFilledInput-root:before": {
                  borderBottomColor: '#806A9E'
                },
                "& .MuiInputBase-root.MuiFilledInput-root:after": {
                  borderBottomColor: 'white',
                },
              }}
            />
          </Grid>
          <Grid xs={6} margin='auto'>
            <Typography fontSize={25} fontWeight={'bold'} color={'white'} margin={'15px'}>Traveler's name</Typography>
          </Grid>
          <Grid xs={6} margin='auto'>
            <TextField
              required
              id="traveler-name"
              variant="filled"
              defaultValue="Traveler"
              value={travelerName}
              onChange={(e) => setTravelerName(e.target.value)}
              sx={{
                input: { color: 'white' },
                "& .MuiInputBase-root.MuiFilledInput-root:before": {
                  borderBottomColor: '#806A9E'
                },
                "& .MuiInputBase-root.MuiFilledInput-root:after": {
                  borderBottomColor: 'white',
                },
              }}
            />
          </Grid>
          <Grid xs={6} margin='auto'>
            <Typography fontSize={25} fontWeight={'bold'} color={'white'} margin={'15px'}>Wanderer's name</Typography>
          </Grid>
          <Grid xs={6} margin='auto'>
            <TextField
              required
              id="wanderer-name"
              variant="filled"
              defaultValue="Wanderer"
              value={wandererName}
              onChange={(e) => setWandererName(e.target.value)}
              sx={{
                input: { color: 'white' },
                "& .MuiInputBase-root.MuiFilledInput-root:before": {
                  borderBottomColor: '#806A9E'
                },
                "& .MuiInputBase-root.MuiFilledInput-root:after": {
                  borderBottomColor: 'white',
                },
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
