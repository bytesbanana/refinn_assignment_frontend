import { Button, Card, CardActions, CardContent, CardMedia, Link, Typography } from '@mui/material';
import dayjs from 'dayjs';

const AssetCard = ({ asset }) => {
  return (
    <Card variant='outlined' className='md:max-w-[600px] xl:max-w-[500px]'>
      <CardMedia component='img' className='max-h-[470px]' image={`${asset.imgUrl}`} alt='Paella dish' />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {asset.title}
        </Typography>
        <Typography variant='body2' color='text.secondary' className='line-clamp-2'>
          {asset.description}
        </Typography>
        <Typography variant='body2' color='text.secondary' className='line-clamp-2'>
          {asset.description}
        </Typography>
        <Typography variant='span' className='text-sm text-slate-500 text-end'>
          {`Listed on: ${dayjs().to(dayjs(asset.createdAt))}`}
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
