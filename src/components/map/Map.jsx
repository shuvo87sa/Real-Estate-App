import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
// import Pin from './pin'; //not necessry ,just test  ,if import get error
import './map.scss';
import "leaflet/dist/leaflet.css";



function Map({items}){
    // console.log(items);   {/* found dummy data here, okee */}

    return (
        <MapContainer center={[23.7541, 90.3979]} zoom={7} scrollWheelZoom={false} className='map'>
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {/* ****main code 1st---commengt**** */}
        {<Marker position={[23.7541, 90.3979]}>
            
            <Popup>
                test it.
            </Popup>
        </Marker> 
        }

        {/* ***extra code get grom chatgpt,2nd try(not in main code) --dlt this 01** */}
           {/* {items.map(item => (
                <Marker key={item.id} position={[item.latitude, item.longitude]}>
                    <Popup>
                        <h3>{item.title}</h3>
                        <p>{item.adress}</p>
                        <p>Price: {item.price}</p>
                    </Popup>
                </Marker>
            ))} */}

         {/* ***extra code get grom chatgpt,3rd try(not in main code) --dlt this 02** */}
           {/* {items.map(item => (
                <Pin key={item.id} item={item} /> // Use the Pin component here
            ))} */}

        </MapContainer>
        );
}

export default Map;