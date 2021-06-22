// import React from 'react'
import React, { useState } from 'react';

export const AddTodo = (props) => {

	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");

	//e is event
	const submit = (e) =>{
		//page will not reload because of this statement
		e.preventDefault();


		//if title or desc is empty,
		if(!title || !desc){
			alert("Title Or Description Cannot be Blank")
		}else{
			// alert("Good to go")
			props.addTodo(title,desc);
		}
		}

	return (
		<div className="container my-3">
			<h3> Add A Task</h3>
		<form onSubmit={submit}>
			<div className="mb-3">
				<label htmlFor="title" className="form-label">Todo Title </label>
				<input type="text" value= {title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp" />
			</div>
			<div className="mb-3">
				<label htmlFor="desc" className="form-label">Todo Description</label>
				<input type="text" value = {desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc" />
			</div>
			
			<button type="submit" className="btn btn-sm btn-success">Submit</button>
		</form>
		</div>
	)
}


// import React, { useState } from 'react';

// export const AddTodo = ({ addTodo }) => {
//     const [title, setTitle] = useState("");
//     const [desc, setDesc] = useState("");


//     const submit = (e) => {
//         e.preventDefault();
//         if (!title || !desc) {
//             alert("Title or Description cannot be blank");
//         }
//         else {
//             addTodo(title, desc);
//             setTitle("");
//             setDesc("");
//         }
//     }
//     return (
//         <div classNameName="container my-3">
//             <h3>Add a Todo</h3>
//             <form onSubmit={submit}>
//                 <div classNameName="mb-3">
//                     <label htmlhtmlFor="title" classNameName="form-label">Todo Title</label>
//                     <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} classNameName="form-control" id="title" aria-describedby="emailHelp" />

//                 </div>
//                 <div classNameName="mb-3">
//                     <label htmlhtmlFor="desc" classNameName="form-label">Todo Description</label>
//                     <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} classNameName="form-control" id="desc" />
//                 </div>
//                 <button type="submit" classNameName="btn btn-sm btn-success">Add Todo</button>
//             </form>
//         </div>
//     )
// }