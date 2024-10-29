import React, { useContext } from 'react'
import ChildC from './ChildC'
// import { UserContext } from './ucApp'

function ChildB() {
	// const user = useContext(UserContext)
  return (
	  <div>
		  <ChildC></ChildC>
	</div>
  )
}

export default ChildB