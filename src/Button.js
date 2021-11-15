import React from 'react'

const Button = (props) => {
	console.log('button is rendered')
	const { increment } = props
	return (
		<div>
			<button onClick={increment}>Increment</button>
		</div>
	)
}

export default React.memo(Button)
