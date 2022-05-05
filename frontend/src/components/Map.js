import { useEffect, useState, useRef } from "react";
import "../styles/map.css";
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const MapContainer = () => {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    //develpoment code
    if (!process.env.REACT_APP_MAPBOX_TOKEN) {
      return (
        <h1 style={{ color: "red" }}>
          <strong>ERROR!</strong>
          You havent set the REACT_APP_MAPBOX_TOKEN environmental variable for
          the Map! Just add "REACT_APP_MAPBOX_TOKEN=*insert token here* to the
          .env file at the root of the react project!
        </h1>
      );
    }
  }
  //production code
  if (!process.env.REACT_APP_MAPBOX_TOKEN) {
    console.err("Wow! Looks like we didnt set the mapbox token!");
    return <div />;
  }

  return <Map />;
};

const MAP_DEFAULT_CENTER = new mapboxgl.LngLat(-113.02877, 37.297817); //zion national park

const Map = (props) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [zoom, setZoom] = useState(10.5);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: MAP_DEFAULT_CENTER,
      zoom: zoom,
    });
  });

  return <div ref={mapContainer} className="map-container" />;
};

export default MapContainer;
