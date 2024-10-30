import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";


export const counterSlice = createSlice({
	name: 'counter',
	initialState: {
		value: 0
	},
	reducers: {
		increment: state => {
			state.value += 1
		},
		decrement: state => {
			state.value -= 1
		},
		incrementByAmount: (state, action) => {
			state.value += Number(action.payload)
		},
		resetCount: state => {
			state.value = 0
		}
	}
})

export const { increment, decrement, resetCount,  incrementByAmount } = counterSlice.actions

export default counterSlice.reducer