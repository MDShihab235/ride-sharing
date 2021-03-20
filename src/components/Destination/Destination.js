import React from 'react';

const Destination = () => {

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
            <div>
                
            </div>
        </div>
    );
};

export default Destination;