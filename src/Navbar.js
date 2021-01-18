import React, {useContext} from 'react';
import {AppContext} from './App';
import {FaShoppingBag} from 'react-icons/fa';

const Navbar = () => {
	const {state:{totalQuantity}} = useContext(AppContext);
	return (
		<>
			<nav className='navbar'>
				<h1>BillaTech</h1>
				<div>
					<button type='button'><FaShoppingBag style={{marginRight:'10px'}}/>{totalQuantity}</button>
				</div>
			</nav>	
		</>	
	);
}

export default Navbar;