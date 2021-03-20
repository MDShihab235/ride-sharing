import React from 'react';

const Cart = (props) => {
    console.log(props)
    
    const { name, picture } = props.vehicle;

    return (
        <div>

            <div className="card text-center " style={{width:"15rem",height:"15rem",margin:"5px"}}>
            <img src={picture} style={{width:"13rem",height:"13rem"}} className="card-img-top card-images" alt=""/>
                <div className="card-body">
                    <h2 className="card-text"> {name} </h2>
                </div>
            </div> 
            
        </div>
    );
};

export default Cart;