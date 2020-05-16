import React from 'react';
<<<<<<< HEAD
import CartItem from './CartItem';

const Cart = (props) => {
  const { products } = props;
  return (
    <div className="cart">
      {products.map((product) => {
        return (
          <CartItem
            product={product}
            key={product.id}
            onIncreaseQuantity={props.onIncreaseQuantity}
            onDecreaseQuantity={props.onDecreaseQuantity}
            onDeleteProduct={props.onDeleteProduct}
          />
        )
      })}
    </div>
  );
=======
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
>>>>>>> 8878bd83361db53cbfc61d6dd8a0e2341a406434
}

export default Cart;