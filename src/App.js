// import logo from './logo.svg';
import './App.css';
// import React, { Component } from 'react';
// import './MyComponents/Header'
import HeaderPart  from './MyComponents/Header';
import {Todos} from './MyComponents/Todos';
import {Footer}  from './MyComponents/Footer';
import {AddTodo} from './MyComponents/AddTodo';

//when we update anything it doesnot reflect quickly
import React, { useState, useEffect } from 'react';
// import React, { useState } from 'react';

function App() {
//   let initTodo;
//   if(localStorage.getItem("todos")===null){
// initTodo =  [];
//   }else{
//     initTodo= JSON.parse(localStorage.getItem("todos"));
//   }

  const onDelete = (todo)=>{
    console.log("you have clicked Delete Button which is : ",todo);

    //deleting this way does not work we have to use state hook
  //  let index = todos.indexOf(todo);
  //  todos.splice(index, 1);

    setTodos(todos.filter((e)=>{
      return e !== todo;
    }));
    // localStorage.getItem("todos");
    // localStorage.setItem("todos",JSON.stringify(todos));

  } 
  // writting {} means we want to use javascript in middle
  // ie <div></div>
  //all the code writted inside fucntion is jsx not html 
  // jsx is mixture of javascript and html
// applly all the link scipt /bootstrap in public/index.html file
  let myvar = 45;
  
  // creating object of array
  // let todos = [

  //using state
  //setTodos is a function which will update the todos
  const [todos, setTodos] = useState( [ 
    // initTodo
    // {
    //   sno:1,
    //   title:"Go to Market",
    //   desc:"You Need to Go to Market to get this Job Done"
    // },
    // {
    //   sno:2,
    //   title:"Go to Mall",
    //   desc:"You Need to Go to Market to get this Job Done"
    // },
    // {
    //   sno:3,
    //   title:"Go to School",
    //   desc:"You Need to Go to Market to get this Job Done"
    // }
  ]);

const addTodo = (title,desc)=> {
  console.log("I am Add Todo Function");
  let sno
  if(todos.length == 0){
    sno = 1;
  }else{
     sno = todos[todos.length - 1 ].sno + 1;
  }
 
  const MyTodo = {
    sno: sno,
    title:title,
    desc:desc,
  };
  setTodos([...todos,MyTodo]);

  //usereffect method is call when there is change in todo
  // useEffect(() => {
  //   localStorage.setItem("todos",JSON.stringify(todos));
  // }, [todos])

  console.log(MyTodo);
  // if(localStorage.getItem("todos")){
    // localStorage.setItem("todos",JSON.stringify(todos));
  // }else{

  // }
}

  return (
    // <div classNameNameName="App">
      
    //   <header classNameName="App-header">
    //   <div>{12+45}</div>
    //   <div>{myvar}</div>
    //     <img src={logo} classNameName="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload!
    //       ...
    //     </p>
    //     <a
    //       classNameName="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

//everything should be wrap in opening and closing brackets
/* <>
    <h3>This is My App</h3>
    <p>This App is mine</p>
</> */
//you have to close all the tags which are not closed
// ie <input> just replace <input/>

<>
{/* //creted out own variable to try if else and pass parameter which we like to show */}
{/* <HeaderPart title={12} searchBarrr={false}/> */}
<HeaderPart title="This is Todo List App"  searchBarrr={false}/>
<AddTodo addTodo={addTodo}/>
<Todos todos={todos} onDelete = {onDelete}/>
<Footer/>
</>
  );
}

export default App;
