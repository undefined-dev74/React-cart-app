import React from 'react';

class CartItem extends React.Component{
    constructor() {
        super()
        this.state = {
            title: 'Phone',
            price : '$53',
            qty :1
        }
    }
     increaseQty = () =>{
    console.log(this, this.state)
   }
    render (){
        const {title, price, qty} = this.state
        // all function goes below 
        return (
            <div className = 'cart-item'>
                <div className="right-block">
                    <img style={style.image}/>
                </div>
                <div className="left-block">
                <div style = { {fontSize:25}}>{title}</div>
                <div style = { {color : "#897"}}>{price}</div>
                <div style = {{color : "#458"}}>{qty}</div>
                </div>
                <img alt = "increase" 
                className = "action-icons" 
                src="https://image.flaticon.com/icons/svg/447/447092.svg"
                onClick = {this.increaseQty}/>
                <img alt = "decrease" 
                className = "action-icons" 
                src="https://image.flaticon.com/icons/svg/1341/1341073.svg"/>
                <img alt = "delete"
                className = "action-icons"
                src="https://image.flaticon.com/icons/svg/443/443153.svg"/>
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