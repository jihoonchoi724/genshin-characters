import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container';
import { CharacterList } from '../components/CharacterList'

export const Home = () => {
  return (
    <div style={{ margin: 'auto', backgroundColor: '#3b3149'}}>
      <Container sx={{ marginLeft: { xs: '4vw', md: '240px' }, marginRight: { xs: '4vw', md: '240px' }, padding: '50px'}}>
          <Typography variant="h4" color="white" component="div" marginBottom="20px" fontWeight="bold">Characters</Typography>
          <CharacterList />
      </Container>
    </div>
  )
}
