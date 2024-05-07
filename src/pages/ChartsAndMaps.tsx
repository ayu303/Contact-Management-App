import axios from "axios";
import 'leaflet/dist/leaflet.css';
import { Line } from "react-chartjs-2";
import { MapContainer, TileLayer } from "react-leaflet";
import WorldMap from "../components/WorldMap";
import { useQuery } from 'react-query';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Function to fetch countries data
const fetchCountriesData = async () => {
  const { data } = await axios.get("https://disease.sh/v3/covid-19/countries");
  return data;
};

// Function to fetch historical graph data
const fetchGraphData = async () => {
  const { data } = await axios.get("https://disease.sh/v3/covid-19/historical/all?lastdays=all");
  return data;
};

// ChartsAndMaps component
const ChartsAndMaps: React.FC = () => {
  // Fetch countries data and historical graph data using react-query
  const { data: countriesData, isLoading: countriesLoading, error: countriesError } = useQuery('countriesData', fetchCountriesData);
  const { data: graphData, isLoading: graphLoading, error: graphError } = useQuery('graphData', fetchGraphData);

  // Define chart data
  const chartData = {
    labels: graphData ? Object.keys(graphData.cases) : [],
    datasets: [
      {
        label: "Cases",
        data: graphData ? Object.values(graphData.cases) : [],
        fill: false,
        borderColor: "#f50057",
        tension: 0.2,
      },
    ],
  };

  return (
    <div className="w-full pt-20 px-4 pb-8">
      {/* Corona Cases Chart */}
      <h1 className="text-4xl font-bold mb-4 text-pink-600">Corona Cases Chart</h1>
      <div className="border-2 border-red-100 w-11/12 m-auto 10 auto 10">
        {/* Line chart */}
        <Line data={chartData} />
      </div>
<br/>
<br/>
      {/* Corona Cases World Map */}
      <h1 className="text-4xl font-bold mb-4 mt-4 text-blue-500">Corona Cases World Map</h1>
      <div className="border-2 border-blue-500 w-11/12  m-auto 5 auto 5 h-72">
        {/* MapContainer for displaying world map */}
        <MapContainer
          className="m-auto w-full border-blue-700 h-72"
          bounds={[[-60, -180], [85, 180]]} zoom={2}
          center={[20, 40]}
          scrollWheelZoom={true}
        >
          {/* TileLayer for map tiles */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          />
          {/* WorldMap component */}
          <WorldMap countriesData={countriesData} />
        </MapContainer>
      </div>
    </div>
  );
};

export default ChartsAndMaps;
