import React from 'react'
// adding css to footer
// import './footer.css'
export const Footer = () => {

let footerStyles = { 
	position: 'relative',
	// top: '50vh',
	
	width: '100%',
	border:'2px solid grey'

}

	return (
		<footer className="bg-dark text-light py-3" 
		style={footerStyles}
		>
			<p className="text-center">
				Copyright &copy; MyTodosList.com
			</p>
		</footer>
	)
}


