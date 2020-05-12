import React from 'react';
import CartItem from './CartItem'
class Cart extends React.Component{

    render (){
       return (
        //    <div>{CartItem}</div>
        <div className='cart'>
            < CartItem />
            < CartItem />
            < CartItem />
        </div>
       )
    }
}

export default Cart;