import React from 'react';
import vehiclesData from '../../fakeData/data.json';
import './Home.css';
import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';


const Home = () => {
    const [vehicles, setVehicles] = useState([]);
    
    useEffect(() => {
        setVehicles(vehiclesData[0]);
    }, []);

    return (
        <div className="App">
            <h1>This is home</h1>
            

            <div className="d-flex flex-row">
                {
                    vehiclesData.map(vehicle => <Link to={`/destination/from/${vehicle.name}`}><Cart vehicle={vehicle} key={vehicle.id} ></Cart></Link>)
                }
            </div>
        </div>
    );
};

export default Home;