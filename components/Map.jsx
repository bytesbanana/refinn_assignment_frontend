import React from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import Map, { Marker } from 'react-map-gl';

const CustomMap = ({ fake }) => {
  return fake ? (
    <img src='/fakemap.png' className='md:w-[600px] object-contain' />
  ) : (
    <Map
      initialViewState={{
        longitude: 100.492,
        latitude: 13.75,
        zoom: 14,
      }}
      className='md:max-w-[600px]'
      mapStyle='mapbox://styles/mapbox/streets-v9'
      mapboxAccessToken='pk.eyJ1Ijoic2FoYXJhdHBheW5vayIsImEiOiJjbDg1MDA0dnkwaDJ3M3BwODcyaHFkZHozIn0.EFSADJ0GMfJVHzfVtHwtxg'
    >
      <Marker latitude={13.75} longitude={100.492} offsetLeft={-20} offsetTop={-10}>
        <p role='img' className='text-3xl cursor-pointer animate-bounce'>
          📍
        </p>
      </Marker>
    </Map>
  );
};

export default CustomMap;
