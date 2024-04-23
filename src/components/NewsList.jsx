import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import useNews from '../hooks/useNews';
import SingleNews from './SingleNews';
import './spinner-styles.css'

const NewsList = () => {
    const { news, totalNews, handleChangePage, page, loading } = useNews();

    const filteredNews = news.filter(n => n.media);  

    const totalPages = Math.ceil(totalNews / 20);  // Assuming 20 articles per page as set in NewsProvider
    
    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <div class="spinner">
                    <div class="cube1"></div>
                    <div class="cube2"></div>
                </div>
            </div>
        );
    }

    return (
        <>
            <Typography
                textAlign={'center'}
                marginY={5}
                variant='h3'
                component={'h2'}
            >
                Latest News
            </Typography>

            <Grid container spacing={2}>
                {filteredNews.map(singleNews => (
                    <SingleNews
                        key={singleNews._id} // Changed to use the unique identifier provided by NewsCatcher
                        singleNews={singleNews}
                    />
                ))}
            </Grid>

            <Stack
                sx={{ marginY: 5 }}
                spacing={2}
                direction={'row'}
                justifyContent='center'
                alignItems='center'
            >
                <Pagination
                    count={totalPages}
                    color="primary" 
                    onChange={handleChangePage}
                    page={page}
                />
            </Stack>
        </>
    );
};

export default NewsList;
