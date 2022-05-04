import { useEffect, useRef } from 'react';
import { Box } from '@chakra-ui/react'
import MapContainer from './MapContainer.js';

import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;


const MAP_DEFAULT_CENTER = new mapboxgl.LngLat(-113.028770, 37.297817);//zion national park

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: MAP_DEFAULT_CENTER,
    zoom: 10.5
    });
  });

  return (
    <Box w='100%' height='500px' ref={mapContainer} className="map-container"/>
  );
};


const MapElement = (props) => <MapContainer element={ <Map {...props} /> } />;
export default MapElement;
