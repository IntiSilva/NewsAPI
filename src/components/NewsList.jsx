import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import useNews from '../hooks/useNews'
import SingleNews from './SingleNews'

const NewsList = () => {
    const { news, totalNews, handleChangePage, page } = useNews()

    const totalPages = Math.ceil(totalNews / 20)

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

            <Grid
                container
                spacing={2}
            >

                {news.map(singleNews => (
                    <SingleNews
                        key={singleNews.url}
                        singleNews={singleNews}
                    />
                ))}
            </Grid>

            <Stack
                sx={{
                    marginY: 5
                }}
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
    )
}

export default NewsList