// components/Map.js
import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  useEffect(() => {
    // Initialize the map
    const map = L.map('map').setView([51.505, -0.09], 13);

    // Add a tile layer (you can use OpenStreetMap or other tile providers)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Cleanup function to remove the map when the component unmounts
    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" style={{ height: '500px', width: '100%' }} />;
};

export default Map;