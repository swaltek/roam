import { useEffect, useState, useRef } from 'react';
import { Box } from '@chakra-ui/react'
import MapContainer from './MapContainer';

import apiCalls from '../api/apiCalls';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const MAP_DEFAULT_CENTER = new mapboxgl.LngLat(-113.028770, 37.297817);//zion national park

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [listings, setListings] = useState(null);

  useEffect(() => {
    if(!map.current) return;
    if(listings) return;

    apiCalls.getAllListings().then((res) => {
      let features = [];
      for(const listing of res) {
        console.log(listing);
        const feature = {
          "type": "Feature",
          "geometry" : {
            "type": "Point",
            "coordinates": [listing.location_lng, listing.location_lat]
          },
          "properties" : { ...listing},
        }
        features.push(feature);
      }
      map.current.on('load', () => {
        console.log('features', features);
        map.current.getSource('listings').setData({
          "type": "FeatureCollection",
          "features": features
        });
      });
    });
  });

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: MAP_DEFAULT_CENTER,
      zoom: 10.5
    });

    map.current.on('load', () => {
      map.current.loadImage(
        'https://docs.mapbox.com/mapbox-gl-js/assets/cat.png',
        (error, image) => {
          if (error) throw error;
          // Add the image to the map style.
          map.current.addImage('cat', image);
      });

      map.current.addSource('listings', {
        'type': 'geojson',
        'data': {
          'type': 'FeatureCollection',
          'features': [],
        }
      });
      map.current.addLayer({
          'id': 'listingsLayer',
          'type': 'symbol',
          'source': 'listings',
          'layout': {
            'icon-image': 'cat',
            // get the title name from the source's "title" property
            'text-field': ['get', 'title'],
            'text-font': [
              'Open Sans Semibold',
              'Arial Unicode MS Bold'
            ],
            'text-offset': [0, 1.25],
            'text-anchor': 'top',
            'icon-allow-overlap': true,
            'icon-size': 0.25,
          }
      });
      map.current.on('click', 'listingsLayer', (e) => {
        // Copy coordinates array.
        const coordinates = e.features[0].geometry.coordinates.slice();
        const id = e.features[0].properties.id;
        const title = e.features[0].properties.title;
        const rating = e.features[0].properties.rating;
        new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(`id:${id} ${title} rating:${rating}`)
          .addTo(map.current);
      });

      map.current.on('mouseenter', 'listingsLayer', () => {
        map.current.getCanvas().style.cursor = 'pointer';
      });
      map.current.on('mouseleave', 'listingsLayer', () => {
        map.current.getCanvas().style.cursor = '';
      });
    });
  });

  return (
    <Box w='100%' height='500px' ref={mapContainer} className="map-container"/>
  );
};


const MapElement = (props) => <MapContainer element={ <Map {...props} /> } />;
export default MapElement;
