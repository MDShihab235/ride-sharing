import React, { useState } from 'react';
import { useParams } from 'react-router';
import vehicleData from '../../fakeData/data.json';

const Destination = () => {
    const { ride } = useParams();
    const currentRide = vehicleData.find(vehicle => vehicle.name === ride);

    console.log(currentRide)
    const [form, setForm] = useState(true); 

    const handleSearch = () => {

    }
    return (
        <div>
            <div>
                <h3>This is search field</h3>
                <form onSubmit={handleSearch}>

                    <label htmlFor=""> Pick from </label>
                    <br/>
                    <input type="text" required/>
                    <br/>
                    <label htmlFor=""> Pick to </label>
                    <br/>
                    <input type="text" required/>
                    <br/>
                    <input type="submit" value="submit"/>
                </form>   
            </div>
            
            <div style={{display:"flex"}}>
                <div>
                    <img src={currentRide.picture} style={{width:"10rem"}} alt=""/>
                </div>
                <div style={{marginLeft:"40%"}}>
                    <iframe width="100%" height="300px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=CDA%20Market,%20Pahartali,%20Chittagong+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                </div>
            </div>
                
        </div>
    );
};

export default Destination;