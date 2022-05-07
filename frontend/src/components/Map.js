import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from '@chakra-ui/react'
import MapContainer from './MapContainer';

import apiCalls from '../api/apiCalls';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const MAP_DEFAULT_CENTER = new mapboxgl.LngLat(-113.02877, 37.297817); //zion national park

const Map = (props) => {
  const mapContainer = useRef(null);
  const mapPopup = useRef(null);
  const map = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mswaltek/cl2t1qlnn000e14mq8j5sz8vl',
      center: props.marker || MAP_DEFAULT_CENTER,
      zoom: 10.5
    });

    if(props.loadListings) setupLoadListings();

    mapPopup.current = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
      });
  });

  useEffect(() => {
    if(!map.current) return;
    if(props.loadListings) loadListings();
    if(props.marker) {
      new mapboxgl.Marker()
        .setLngLat(props.marker)
        .addTo(map.current);
    }
  }, [map, props]);

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
            'text-offset': [0, 1.25],
            'icon-allow-overlap': true,
            'icon-size': 1,
          }
      });

      map.current.on('click', 'listingsLayer', (e) => {
        navigate(`/listing/${e.features[0].properties.id}`);
      });

      map.current.on('mouseenter', 'listingsLayer', (e) => {
        map.current.getCanvas().style.cursor = 'pointer';

        // Copy coordinates array.
        const coordinates = e.features[0].geometry.coordinates.slice();
        const title = e.features[0].properties.title;
        const rating = e.features[0].properties.rating;
        mapPopup.current.setLngLat(coordinates)
          .setHTML(`<h1><strong>${title}</strong></h1> <h2>${rating.avg ? `\n rating ${rating.avg}/5` : '\n no ratings'}<h2>`)
          .addTo(map.current);
        });

      map.current.on('mouseleave', 'listingsLayer', () => {
        map.current.getCanvas().style.cursor = '';
        mapPopup.current.remove();
      });
    });
  }

  const loadListings = () => {

    apiCalls.getAllListings().then((res) => {
      let features = [];
      for(const listing of res) {
        // console.log(listing);
        const feature = {
          "type": "Feature",
          "geometry" : {
            "type": "Point",
            "coordinates": [listing.location_lng, listing.location_lat]
          },
          "properties" : { 'hover': false ,...listing},
        }
        features.push(feature);
      }
      map.current.on('load', () => {
        // console.log('features', features);
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
