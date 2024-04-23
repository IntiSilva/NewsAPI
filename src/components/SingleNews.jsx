import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

const SingleNews = ({ singleNews }) => {
    const { media, link, title, summary, source } = singleNews;

    const StyledTypography = styled(Typography)({
        '&::-webkit-scrollbar': {
            width: '6px',
            backgroundColor: 'transparent',
        },
        '&::-webkit-scrollbar-track': {
            borderRadius: '10px',
            backgroundColor: 'transparent', 
        },
        '&::-webkit-scrollbar-thumb': {
            borderRadius: '10px',
            backgroundColor: '#ADD8E6',
        },
        maxHeight: '300px',
        overflowY: 'auto'
    });

    return (
        <Grid item md={6} lg={4}>
            <Card>
                {media && (
                    <CardMedia
                        component="img"
                        alt={`${title} news image`}
                        image={media}
                        height={'250'}
                    />
                )}
                <CardContent>
                    <Typography variant='body1' color="error">
                        {source}
                    </Typography>
                    <Typography variant='h5' component="div">
                        {title}
                    </Typography>
                    <StyledTypography variant='body2'
                                sx={{
                                    maxHeight: '200px',  // Set the maximum height
                                    overflowY: 'auto',    // Enable scrolling for overflow
                                    textOverflow: 'ellipsis' // Add ellipsis if the text is too long
                                }}>
                                    
                        {summary}
                    </StyledTypography>
                </CardContent>
                <CardActions>
                    <Link
                        href={link}
                        target="_blank"
                        variant='button'
                        width={'100%'}
                        textAlign={'center'}
                        sx={{ textDecoration: 'none' }}
                    >Read More</Link>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default SingleNews;
