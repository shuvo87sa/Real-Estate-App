import { listData } from '../../lib/dummydata';
import './listPage.scss';
import Filter from "../../components/filter/Filter";
import Card from "../../components/card/Card";
import Map from "../../components/map/Map";


// console.log(listData);

function ListPage(){
    const data = listData;
    // console.log(listData);
    // console.log(data);
    // console.log({data});
    // console.log(items);   // show not defiend
    
    
    return <div className='listPage'>
        <div className='listContainer'>
            <div className="wrapper">
                <Filter/>
                {data.map(item=>(
                    <Card key={item.id} item={item}/>
                ))}
            </div>
        </div>

        <div className='mapContainer'>
             <Map items={data}/> {/* Pass the data here */}
             
        </div>
        
    </div>;
}
// console.log(Map,"1");







export default ListPage;