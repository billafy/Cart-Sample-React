import React, {useContext} from 'react';
import {AppContext} from './App';
import CartItems from './CartItems';

const Cart = () => {
	const {state:{totalPrice, totalQuantity},clearCart} = useContext(AppContext);
	if(!totalQuantity)
		return (
			<div className='cart-container'>
				<h1 className='heading'>Your Cart</h1>
				<h3 className='heading'>is empty</h3>
			</div>
		);
	return (
		<div className='cart-container'>
			<h1 className='heading'>Your Cart</h1>
			<section className='cart-items'>
				<CartItems/>
			</section>
			<div className='underline'></div>
			<div className='total'>
				<span className='total-text'>Total &nbsp;</span>
				<span className='total-price'>${totalPrice}</span>
			</div>
			<div className='clear-cart-btn'>
				<button type='button' onClick={clearCart}>Clear Cart</button>
			</div>
		</div>	
	);
}

export default Cart;