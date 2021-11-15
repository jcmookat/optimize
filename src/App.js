// import React, { useCallback, useState } from 'react'
// import Button from './Button'
// import Title from './Title'

// const App = () => {
// 	console.log('App is rendered')
// 	const [count, setCount] = useState(0)
// 	const increment = useCallback(() => {
// 		// useCallback, binabato lang ung FUNCTION PERO Hindi nya ineexecute
// 		setCount((prevCount) => prevCount + 1) // setCount(count + 1)
// 	}, [setCount])
// 	return (
// 		<div>
// 			<Title />
// 			<h2>Count: {count}</h2>
// 			<Button increment={increment} />
// 		</div>
// 	)
// }

// export default App

import React, { useCallback, useMemo, useState } from 'react'

const App = () => {
	const [count1, setCount1] = useState(0)
	const [count2, setCount2] = useState(0)

	const increment1 = () => {
		setCount1(count1 + 1)
	}

	const increment2 = () => {
		setCount2(count2 + 1)
	}

	// useMemo, VALUE ang binabato (ung nirereturn)
	const isEven = useMemo(() => {
		let i = 0
		while (i < 2000000000) i++
		return count1 % 2 === 0
	}, [count1])

	const isEvenMemo = useMemo(() => {
		let i = 0
		while (i < 2000000000) i++
		return count1 % 2 === 0
	})

	const isEvenCallback = useCallback(() => {
		let i = 0
		while (i < 2000000000) i++
		return count1 % 2 === 0
	})

	console.log('isEvenMemo: ', isEvenMemo)
	console.log('isEvenCallback: ', isEvenCallback)
	return (
		<div>
			<h1>Count 1 is: {isEven ? 'EVEN' : 'ODD'}</h1>
			<h1>Count 1: {count1}</h1>
			<button onClick={increment1}>Increment 1</button>
			<h1>Count 2: {count2}</h1>
			<button onClick={increment2}>Increment 2</button>
		</div>
	)
}

export default App
