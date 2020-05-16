import React from 'react';

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> fetalrecovery
const CartItem = (props) => {
	const { price, title, qty } = props.product;
	const {
		product,
<<<<<<< HEAD
		onIncreaseQuantity,
		onDecreaseQuantity,
=======
		onDecreaseQunatity,
		onIncreaseQuantity,
>>>>>>> fetalrecovery
		onDeleteProduct,
	} = props;
	return (
		<div className="cart-item">
<<<<<<< HEAD
			<div className="left-block">
				<img style={styles.image} src={product.img} />
=======
			{props.jsx}
			<div className="left-block">
				<img style={styles.image} />
>>>>>>> fetalrecovery
			</div>
			<div className="right-block">
				<div style={{ fontSize: 25 }}>{title}</div>
				<div style={{ color: '#777' }}>Rs {price} </div>
				<div style={{ color: '#777' }}>Qty: {qty} </div>
				<div className="cart-item-actions">
					{/* Buttons */}
					<img
						alt="increase"
						className="action-icons"
						src="https://image.flaticon.com/icons/svg/992/992651.svg"
						onClick={() => onIncreaseQuantity(product)}
					/>
					<img
						alt="decrease"
						className="action-icons"
						src="https://image.flaticon.com/icons/svg/1665/1665612.svg"
<<<<<<< HEAD
						onClick={() => onDecreaseQuantity(product)}
=======
						onClick={() => onDecreaseQunatity(product)}
>>>>>>> fetalrecovery
					/>
					<img
						alt="delete"
						className="action-icons"
						src="https://image.flaticon.com/icons/svg/1214/1214428.svg"
						onClick={() => onDeleteProduct(product.id)}
					/>
				</div>
			</div>
		</div>
	);
};

const styles = {
	image: {
		height: 110,
		width: 110,
		borderRadius: 4,
		background: '#ccc',
	},
};
<<<<<<< HEAD

export default CartItem;
=======
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
         this.setState( prevState => {
             return {
                 qty: prevState.qty +1
             }
         })
   }
   
   decreaseQty = () => {
        const {qty} = this.state;
        if(qty !== 0){
           this.setState(sta => {
              return{ qty : sta.qty -1}
           })
       }
   }

   
    render (){
        const {title, price, qty} = this.state
        // all function goes below 
        return (
            <div className = 'cart-item'>
                <div className="right-block">
                    <img style={style.image} alt=''/>
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
                src="https://image.flaticon.com/icons/svg/1341/1341073.svg"
                onClick = {this.decreaseQty}/>
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
>>>>>>> 8878bd83361db53cbfc61d6dd8a0e2341a406434
=======

export default CartItem;
>>>>>>> fetalrecovery
