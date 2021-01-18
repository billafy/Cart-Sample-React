import React, {useEffect, useReducer, useContext} from "react";
import {reducer} from './reducer';

import Navbar from './Navbar';
import Cart from './Cart';

import './phone-store.css';

const url = 'https://course-api.com/react-useReducer-cart-project';

const AppContext = React.createContext();

const defaultStates = {
	isLoading : false,
	isError : false,
	cart : [],
	totalPrice : 0,
	totalQuantity : 0
};

const App = () => {
	const [state,dispatch] = useReducer(reducer,defaultStates);

	const increaseQty = (id) => {
		dispatch({type:'INCREASE',payload:id});
	}

	const decreaseQty = (id) => {
		dispatch({type:'DECREASE',payload:id});
	}

	const removeItem = (id) => {
		dispatch({type:'REMOVE',payload:id});
	}

	const clearCart = () => {
		dispatch({type:'CLEAR_CART'});
	}

	useEffect(() => {
		dispatch({type:'GET_TOTALS'});
	}, [state.cart]);

	useEffect(() => {
		dispatch({type:'LOADING'});
		fetch(url)
		.then((response) => {
			if(response.status>=200 && response.status<=299)
				return response.json();
			dispatch({type:'ERROR'});
		})
		.then((cart) => {
			dispatch({type:'INIT_CART',payload:cart});
		})
		.catch((error) => {
			dispatch({type:'ERROR'});
		})
	}, []);

	if(state.isLoading) {
		return (
			<h3 className='heading'>Loading...</h3>	
		);
	}
	else if(state.isError) {
		return (
			<h3 className='heading'>Error Loading Content</h3>	
		);
	}
	return (
		<AppContext.Provider value={{state,increaseQty,decreaseQty,removeItem,clearCart}}>
			<Navbar/>
			<Cart/>
		</AppContext.Provider>
	);
}

export {AppContext};

export default App;