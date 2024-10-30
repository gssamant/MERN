import React, { useState } from 'react'
import './rt.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, resetCount, incrementByAmount } from './counterSlice'

const RTapp = () => {

	const [amount, setAmount] = useState(0);

	const count = useSelector((state) => state.counter.value)

	const dispatch = useDispatch();

	function handleIncrement() {
		dispatch(increment());
	}
	function handleDecrement() {
		dispatch(decrement());
	}
	function handleReset() {
		dispatch(resetCount());
	}
	function handleIncByAmount() {
		dispatch(incrementByAmount(amount));
	}
	return (
		<div className='app-container'>
			<button onClick={handleIncrement}>
				+
			</button>
			<p>Count: {count}</p>
			<button onClick={handleDecrement}>
				-
			</button>
			<button onClick={handleReset}>
				Reset count
			</button>
			<input
				type='Number'
				value={amount}
				placeholder='Enter amount'
				onChange={(e) => setAmount(e.target.value)}>
			</input>
			<button onClick={handleIncByAmount}>
				Increase by amount
			</button>
		</div>
	)
}

export default RTapp
