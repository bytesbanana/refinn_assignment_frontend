import { Button, Card, CardActions, CardContent, CardMedia, Link, Typography } from '@mui/material';

const AssetCard = () => (
  <Card variant='outlined' className='md:max-w-[600px]'>
    <CardMedia
      component='img'
      className='max-h-[470px]'
      image='https://mui.com/static/images/cards/paella.jpg'
      alt='Paella dish'
    />
    <CardContent>
      <Typography gutterBottom variant='h5' component='div'>
        Title
      </Typography>
      <Typography variant='body2' color='text.secondary' className='line-clamp-2'>
        Culpa ullamco qui culpa aute dolor nisi aliquip laboris id amet pariatur. Consequat culpa proident fugiat
        laborum. Non et id culpa eiusmod occaecat. Fugiat culpa consequat eiusmod non. Fugiat proident pariatur minim
        culpa. Nulla dolore anim incididunt fugiat ex sint labore veniam minim in aute aliqua duis ad. Aliqua eu aute do
        minim dolor qui dolor cillum ipsum sit ut Lorem.
      </Typography>
    </CardContent>

    <CardActions>
      <Link className='w-full' href='/assets/1'>
        <Button size='small' variant='contained' className='w-full'>
          View details
        </Button>
      </Link>
    </CardActions>
  </Card>
);

export default AssetCard;
