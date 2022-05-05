import { useEffect, useRef } from 'react';
import { Box } from '@chakra-ui/react'
import MapContainer from './MapContainer';

import apiCalls from '../api/apiCalls';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const MAP_DEFAULT_CENTER = new mapboxgl.LngLat(-113.02877, 37.297817); //zion national park

const Map = (props) => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mswaltek/cl2t1qlnn000e14mq8j5sz8vl',
      center: props.marker || MAP_DEFAULT_CENTER,
      zoom: 10.5
    });

    if(props.loadListings) setupLoadListings();
  });

  useEffect(() => {
    if(!map.current) return;
    if(props.loadListings) loadListings();
    if(props.marker) {
      new mapboxgl.Marker()
        .setLngLat(props.marker)
        .addTo(map.current);
    }
  });

  const setupLoadListings = () => {
    map.current.on('load', () => {
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
            'icon-image': 'listing-marker',
            // get the title name from the source's "title" property
            'text-field': ['get', 'title'],
            'text-font': [
              'Open Sans Semibold',
              'Arial Unicode MS Bold'
            ],
            'text-offset': [0, 1.25],
            'text-anchor': 'top',
            'icon-allow-overlap': true,
            'icon-size': 1.25,
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
  }

  const loadListings = () => {

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
  }

  return (
    <Box w={ props.w || '100%'} h={ props.h || '500px' } ref={mapContainer} className="map-container"/>
  );
};


const MapElement = (props) => <MapContainer element={ <Map {...props} /> } />;
export default MapElement;
