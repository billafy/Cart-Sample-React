import React, {useContext} from 'react';
import {AppContext} from './App';
import {BiUpArrow, BiDownArrow} from 'react-icons/bi';

const Item = () => {
	const {state:{cart},increaseQty,decreaseQty,removeItem} = useContext(AppContext);

	return (
		<>
			{cart.map((item) => {
					return (
						item.amount > 0 ? 
							<div className='item' key={item.id}>
								<img className='item-image' src={item.img}/>
								<div className='item-details'>
									<p className='item-title'>{item.title}</p>
									<p>${item.price}</p>
									<button type='button' onClick={()=>removeItem(item.id)}>Remove</button>
								</div>
								<div className='item-incdec'>
									<button type='button' onClick={()=>increaseQty(item.id)}><BiUpArrow/></button>
									<p>{item.amount}</p>
									<button type='button' onClick={()=>decreaseQty(item.id)}><BiDownArrow/></button>
								</div>
							</div>	
						:
							<></>
					);
				})}
		</>
	);
}

export default Item;