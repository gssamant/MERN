import React, { useCallback, useState } from 'react'

function Passwordgenerator() {
	const [length, setLength] = useState(8)
	const [numbersAllowed, setNumbersAllowed] = useState(false)
	const [charactersAllowed, setCharactersAllowed] = useState(false)
	const [password, setPassword] = useState("")

	const passwordGenerator = useCallback(() => {
		let pass = ""
		let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
		if (numbersAllowed) str += "0123456789"
		if (charactersAllowed) str += "!@#$%^&*()-_=+[]{}`~"
		for (let i = 1; i <= length; i++) {
			let char = Math.floor(Math.random() * str.length + 1)
			pass = str.charAt(char)
		}
		setPassword(pass)
	}, [length, numbersAllowed, charactersAllowed, setPassword])

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
			  />
			  <button className='outline-none bg-blue-600 text-white px-5 py-0.5 shrink-0 rounded-xl'>Copy</button>
		  </div>
	</div>
  )
}

export default Passwordgenerator