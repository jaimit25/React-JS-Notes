import React from 'react'
import PropTypes from 'prop-types'


//props is used to pass parameter from parent to child ie props.title will give me title
// we can also use {} brackets inside () to directly pass 
//to use we can simply write {title} instead of {props.title}
// export default function HeaderPart({title} {  
export default function HeaderPart(props) {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">{props.title}</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#">Home</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">About</a>
						</li>
					</ul>

					{
						props.searchBarrr ?
						<form className="d-flex">
						<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
						<button className="btn btn-outline-success" type="submit" >Search</button>
					       	</form>:
						       "No Search Bar"


					}


					
				</div>
			</div>
		</nav>
	)
}
//this will be set if user has not pass the parameters
HeaderPart.defaultProps = {
	title : "Default Type",
	searchBarrr : true,
}
//Proptype is use to valid that the passing parameter should always be of the type which is mention below
HeaderPart.protoTypes = {
	title: PropTypes.string,
	searchBarrr: PropTypes.bool.isRequired
}