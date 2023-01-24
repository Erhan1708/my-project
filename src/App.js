import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCustomers } from './asyncActions/customers'
import { addCustomerAction, removeCustomerAction } from './store/customerReducer'
// import State from './components/State'

const App = () => {

	const dispatch = useDispatch()
	const cash = useSelector(state => state.cash.cash)
	const customers = useSelector(state => state.customers.customers)

	const addCash = (cash) => {
		dispatch({ type:'ADD_CASH', payload: cash })
	}

	const getCash = (cash) => {
		dispatch({ type: 'GET_CASH', payload: cash })
	}

	const addCustomer = (name) => { 
		const customer = {
			name,
			id: Date.now(),
		}
		dispatch(addCustomerAction(customer))
	}

	const removeCustomer = (customer) => { 
		dispatch( removeCustomerAction(customer.id))
	}
	

	return (
		<div>
			{/* <State /> */}
			<div className='app'>
				<div style={{ fontSize: "3rem" }}>{cash}</div>
				<div style={{ display: "flex" }}>
					<button onClick={() => addCash(Number(prompt()))}>пополнить счет</button>
					<button onClick={() => getCash(Number(prompt()))}>снять со счета</button>
					<button onClick={() => addCustomer(prompt())}>добавить клиента</button>
					<button onClick={() => dispatch(fetchCustomers())}>получить клиентов из базы</button>
				</div>
				<div>
					{
						customers.length > 0 ? (
							<div>
								{customers.map(customer => 
									<dir key={customer.id}>
										<p onClick={()=> removeCustomer(customer)} >{customer.name}</p>
									</dir>
								)}
							</div>
						) : (
								<div>
									<p>клиенты отсутсвуют !!!</p>
								</div>
						)
					}
				</div>
			</div>
		</div>
	)
}

export default App