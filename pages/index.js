import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import Button from '@mui/material/Button';
import { ASSET_TYPES } from '../utils/constant';
const Item = ({ children }) => (
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
  </Card>
);

export default function Home() {
  return (
    <>
      {/* Navigation bar */}
      <div className=' bg-sky-500 w-full h-12 drop-shadow-md shadow-md flex justify-between items-center'>
        <div className='p-2 text-white text-2xl font-bold'>Logo</div>
      </div>

      {/* Search Form */}
      <Box
        component='form'
        autoComplete='off'
        className='py-4 flex flex-col gap-4 px-4 rounded-b-md border-solid border-[1px] border-t-0 border-slate-200 drop-shadow-md md:hidden'
      >
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-readonly-label' className='bg-white pr-1 font-medium'>
            Asset type
          </InputLabel>
          <Select labelId='assetType' id='demo-simple-select' label='Age' onChange={() => {}}>
            {ASSET_TYPES.map(({ name, value }) => (
              <MenuItem key={value} value={value}>
                {name}
              </MenuItem>
            ))}

            {/* <MenuItem value='house'>House</MenuItem>
              <MenuItem value='townhouse'>Townhouse</MenuItem>
              <MenuItem value='land'>Land</MenuItem> */}
          </Select>
        </FormControl>

        <Button variant='contained' className=' bg-blue-500'>
          Search
        </Button>
      </Box>

      {/* Grid */}
      <Box className='py-4'>
        <Grid container spacing={2} className='flex flex-col items-center'>
          <Grid item xs={12}>
            <Item>xs=6 md=8</Item>
          </Grid>
          <Grid item xs={12}>
            <Item>xs=6 md=4</Item>
          </Grid>
          <Grid item xs={12}>
            <Item>xs=6 md=4</Item>
          </Grid>
          <Grid item xs={12}>
            <Item>xs=6 md=8</Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
