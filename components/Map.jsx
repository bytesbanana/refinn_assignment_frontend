import React from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import Map, { Marker } from 'react-map-gl';
import { Box } from '@mui/material';

const CustomMap = ({ latitude = 13.75, longitude = 100.492, className }) => {
  return (
    <Box className={`h-[350px] w-full ${className}`}>
      <Map
        initialViewState={{
          longitude,
          latitude,
          zoom: 14,
        }}
        className={`w-full h-full`}
        mapStyle='mapbox://styles/mapbox/streets-v9'
        mapboxAccessToken='pk.eyJ1Ijoic2FoYXJhdHBheW5vayIsImEiOiJjbDg1MDA0dnkwaDJ3M3BwODcyaHFkZHozIn0.EFSADJ0GMfJVHzfVtHwtxg'
      >
        <Marker latitude={latitude} longitude={longitude} offsetLeft={-20} offsetTop={-10}>
          <p role='img' className='text-3xl cursor-pointer animate-bounce'>
            📍
          </p>
        </Marker>
      </Map>
    </Box>
  );
};

export default CustomMap;
