import { Marker, Popup } from 'react-leaflet';
import './pin.scss';
// import Map from '../map/Map';

// console.log(Map);
// console.log("test");  //not fount Pin page why??


function Pin({item}){

    // console.log(item);  {/* not found item.why?? */}

    return (
        // <Marker position={[item.latitude, item.longitude]}>
        <Marker position={[23.7541, 90.3979]}>    {/* test code */}
            <Popup>
                
            </Popup>
        </Marker>

    //     {/* ***extra code get grom chatgpt,3rd try(not in main code) --dlt this 02** */}
    //    <Marker position={[item.latitude, item.longitude]}>
    //          <Popup>
    //             <h3>{item.title}</h3>
    //              <p>{item.adress}</p>
    //              <p>Price: {item.price}</p>
    //          </Popup>
    //      </Marker>
    )
}
console.log(item);


export default Pin;