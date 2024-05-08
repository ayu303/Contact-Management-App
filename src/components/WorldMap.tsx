import { Marker, Popup } from "react-leaflet";
import L from 'leaflet';
import markerIcon from '../utils/pin.png';

// Define interface for country data
interface CountryData {
  country: string;
  active: number;
  recovered: number;
  deaths: number;
  countryInfo: {
    _id: string;
    lat: number;
    long: number;
  };
}

// Define props interface
interface Props {
  countriesData: CountryData[]; // Array of country data
}

// WorldMap component
const WorldMap: React.FC<Props> = ({ countriesData }) => {
  // Define custom marker icon
  const customMarker = L.icon({
    iconUrl: markerIcon,
    iconSize: [20, 25],
    iconAnchor: [15, 30]
  });

  return (
    // Container for the world map component
    <div className="w-full pt-20 px-4 pb-8">
      {/* Map through countries data and display markers */}
      {countriesData?.map((country) => (
        <Marker
          icon={customMarker} // Custom marker icon
          key={country.countryInfo._id} // Ensure unique key for each marker
          position={[country.countryInfo.lat, country.countryInfo.long]} // Marker position
        >
          {/* Popup for displaying country information */}
          <Popup>
            <div>
              {/* Country name */}
              <h2>{country.country}</h2>
              {/* Display active, recovered, and deaths cases */}
              <p>
                Active Cases: {country.active} <br />
                Recovered Cases: {country.recovered} <br />
                Deaths: {country.deaths}
              </p>
            </div>
          </Popup>
        </Marker>
      ))}
    </div>
  );
};

export default WorldMap;
