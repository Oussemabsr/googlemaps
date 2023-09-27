import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import './App.css';


function App() {
  
  return (

 <div className='body'>   

<div className='box' style={{'width':'100%','height':'100%','position':'relative'}}>
<p>Welcome to my google maps application</p>

<MapContainer center={[36.8684675,10.2039586]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />

</MapContainer>

</div>

</div>
  );
}

export default App;
