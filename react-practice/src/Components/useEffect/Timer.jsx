import React, { useState, useEffect} from 'react'

function Timer() {
	const [currtime, setTime] = useState(0);
	
	useEffect(() => {
		const handleTimer = setInterval(() => {
			setTime(currtime => currtime + 1);
		}, 1000);
		return () => {
			clearInterval(handleTimer)
		}
	}, [])
	
  return (
	  <div>
		  <h1>Time: {currtime}</h1>
	</div>
  )
}

export default Timer