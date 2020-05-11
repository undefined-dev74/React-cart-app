import React from 'react';

class CartItem extends React.Component{
    render (){
        return (
            <div className = 'cart-item'>
                <div className="right-block">
                    <img style={style.image}/>
                </div>
                <div className="left-block">
                    <div style = { {fontSize:25}}>Phone</div>
                    <div style = { {color : "#897"}}>item name</div>
                    <div style = {{color : "#458"}}>price: 999</div>
                </div>
            </div>
        );
    }
}
const style = {
    image: {
        height: 110,
        color: "#ccc"
    }
}
export default CartItem;