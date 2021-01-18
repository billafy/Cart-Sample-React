export const reducer = (state,action) => {
	if(action.type==='LOADING')
		return {...state,isLoading:true};
	else if(action.type==='ERROR')
		return {...state,isLoading:false,isError:true};
	else if(action.type==='INIT_CART')
		return {...state,isLoading:false,cart:action.payload};
	else if(action.type==='GET_TOTALS')
	{
		let totalPrc = 0, totalQty = 0;
		state.cart.map((item) => {
			totalPrc += item.amount*item.price;
		})
		state.cart.map((item) => {
			totalQty += item.amount;
		})
		return {...state,totalPrice:totalPrc.toFixed(2),totalQuantity:totalQty};
	}
	else if(action.type==='INCREASE')
	{
		return {
			...state,
			cart : state.cart.map((item) => {
				if(item.id===action.payload)
					return {...item,amount:item.amount+1};
				return item;
			})
		};
	}
	else if(action.type==='DECREASE')
	{
		return {
			...state,
			cart : state.cart.map((item) => {
				if(item.id===action.payload)
					return {...item,amount:item.amount-1};
				return item;
			})
		};
	}
	else if(action.type==='REMOVE')
	{
		return {
			...state,
			cart : state.cart.filter((item) => item.id!==action.payload)
		};
	}
	else if(action.type==='CLEAR_CART')
	{
		return {
			...state,
			cart : []
		};
	}
}