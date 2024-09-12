import React, { useState } from 'react'


function BGcolor() {
	let [color, setColor] = useState("olive")
	return (
		<div className='w-full h-screen' style={{ backgroundColor: color }} >
			<div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
				<div className='flex flex-wrap justify-center gap-3 px-3 py-2 rounded-xl'>
					<button onClick={() => setColor("red")} className=' outline-none px-3 py-1 rounded-2xl text-white bg-red-600'>Red</button>
					<button onClick={() => setColor("green")} className=' outline-none px-3 py-1 rounded-2xl text-white bg-green-400'>Green</button>
					<button onClick={() => setColor("blue")} className=' outline-none px-3 py-1 rounded-2xl text-white bg-blue-700'>Blue</button>
				</div>
			</div>
		</div>
	)
}

export default BGcolor