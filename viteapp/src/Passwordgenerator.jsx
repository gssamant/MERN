import React, { useCallback, useEffect, useRef, useState } from 'react'

function Passwordgenerator() {
	const [length, setLength] = useState(8)
	const [numbersAllowed, setNumbersAllowed] = useState(false)
	const [charactersAllowed, setCharactersAllowed] = useState(false)
	const [password, setPassword] = useState("")

	const passwordref = useRef(null)

	const passwordGenerator = useCallback(() => {
		let pass = ""
		let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
		if (numbersAllowed) str += "0123456789"
		if (charactersAllowed) str += "!@#$%^&*()-_=+[]{}`~"
		for (let i = 1; i <= length; i++) {
			let char = Math.floor(Math.random() * str.length + 1)
			pass += str.charAt(char)
		}
		setPassword(pass)
	}, [length, numbersAllowed, charactersAllowed, setPassword])

	const copyPassword = useCallback(() => { 
		passwordref.current?.select()
		
		window.navigator.clipboard.writeText(password)
	}, [password])

	useEffect(() => {passwordGenerator()}, [length, numbersAllowed, charactersAllowed, passwordGenerator])

	return (
		<div className='w-full max-w-md mx-auto rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-600 text-center'>
			<h1 className='text-white text-center'>Password Generator</h1>
			<div className='flex rounded-lg overflow-hidden mb-4'>
				<input
					type="text"
					value={password}
					className='outline-none w-full px-1 py-3'
					placeholder='Password'
					readOnly
					ref={passwordref}
				/>
				<button onClick={copyPassword} className='outline-none bg-blue-600 text-white px-5 py-0.5 shrink-0 '>Copy</button>
			</div>
			<div className='flex text-sm gap-x-2'>
				<div className='flex items-center gap-x-1'>
					<input
						type='range'
						min={6}
						max={100}
						value={length}
						className='cursor-pointer'
						onChange={(e) => { setLength(e.target.value) }}
					/>
					<label>Length: {length}</label>
				</div>
				<div className='flex items-center gap-x-l'>
					<input
						type='checkbox'
						defaultChecked={numbersAllowed}
						id="numberInput"
						onChange={() => {
							setNumbersAllowed((prev) => !prev);
						}}
					/>
					<label>Numbers</label>
				</div>
				<div className='flex items-center gap-x-l'>
					<input
						type='checkbox'
						defaultChecked={charactersAllowed}
						id="characterInput"
						onChange={() => {
							setCharactersAllowed((prev) => !prev)
						}}
					/>
					<label>Characters</label>
				</div>
			</div>
		</div>
	)
}

export default Passwordgenerator