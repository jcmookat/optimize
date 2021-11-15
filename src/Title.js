import React from 'react'

const Title = () => {
	console.log('Title is rendered')
	return (
		<div>
			<h1>Hi Pogi!</h1>
		</div>
	)
}
// Good use, pag walang nagbabago sa props
export default React.memo(Title)
