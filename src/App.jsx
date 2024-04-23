import { Container, Grid, Typography, Box } from '@mui/material';
import Form from './components/Form';
import NewsList from './components/NewsList';
import { NewsProvider } from './context/NewsProvider';

function App() {
  return (
    <NewsProvider>
      <Container>
        <header>
          <Box sx={{
            marginTop: 5, 
            marginBottom: 5, 
            textAlign: 'center', 
            padding: 2, 
            backgroundColor: '#f5f5f5', // A light grey background
            borderRadius: '12px', // Rounded corners
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)' // Subtle shadow for depth
          }}>
            <Typography 
              component="h1" 
              variant="h2" // Slightly smaller than h3
              sx={{
                fontWeight: 'normal', // Less bold
                color: '#3f51b5' // A theme-based blue
              }}
            >
              News Finder
            </Typography>
          </Box>
        </header>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={10} md={6} lg={4}>
              <Form />
          </Grid>
        </Grid>

        <NewsList />

      </Container>
    </NewsProvider>
  );
}

export default App;
