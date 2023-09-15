import { CardActionArea } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

export interface CharacterButtonProps {
  charID: string
  charName: string
  rarity: number
  vision: string
  context: any
  onClick: any
}

export const CharacterButton = (props: CharacterButtonProps) => {
  const { charID, charName, rarity, vision, context, onClick } = props
  const color = (rarity > 4) ? "#f6ae62" : "#8e72ed"

  var imgPath = context("./characters/" + charID + "/icon.webp")
  var charDisplayName: string = charName

  if (charID.includes("traveler")) {
    const travelerGender: string = JSON.parse(localStorage.getItem("traveler-gender")!) ? ("f") : ("m")
    imgPath = context("./characters/traveler/icon_" + travelerGender + ".webp")
    charDisplayName = localStorage.getItem("traveler-name") + " (" + vision + ")"
  } else if (charID.includes("wanderer")) {
    charDisplayName = localStorage.getItem("wanderer-name")!
  }
  return (
    <Card
      variant="outlined"
      elevation={20}
      sx={{
        width: 120,
        height: 172,
        backgroundColor: color,
        borderRadius: "10px"
      }}
    >
      <CardActionArea onClick={onClick}>
        <CardContent sx={{ padding: "5px" }}>
          <Typography
            variant="button"
            display="block"
            align="center"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '40px',
              fontSize: '12px',
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              borderRadius: "10px"
            }}
          >
            {charDisplayName}
          </Typography>
        </CardContent>
        <img src={imgPath} style={{ height: 120, width: 120 }} alt={charID + '-button'}></img>
      </CardActionArea>
    </Card>
  )
}
