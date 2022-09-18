import { Button, Card, CardActions, CardContent, CardMedia, Link, Typography } from '@mui/material';

const AssetCard = ({ asset }) => {
  return (
    <Card variant='outlined' className='md:max-w-[600px] xl:max-w-[500px]'>
      <CardMedia
        component='img'
        className='max-h-[470px]'
        image='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmwroofline.co.uk%2Fwp-content%2Fuploads%2F2019%2F01%2FMock-Tudor-Beams-by-MW-Roofline.jpg&f=1&nofb=1'
        alt='Paella dish'
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {asset.title}
        </Typography>
        <Typography variant='body2' color='text.secondary' className='line-clamp-2'>
          {asset.description}
        </Typography>
      </CardContent>

      <CardActions>
        <Link className='w-full' href={`/assets/${asset?.id}`}>
          <Button size='small' variant='contained' className='w-full'>
            View details
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default AssetCard;
