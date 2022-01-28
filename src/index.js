import React from 'react';
import ReactDOM from 'react-dom';
import MyForm from './MyForm';
import PropsDemo from './PropsDemo';
import StateDemo2 from './StateDemo2';
import Test from './Test';
import FormData from './FormData';
import ComponentLifeCycle from './ComponentLifeCycle';
import ReactServices from './ReactServices';
import PostRequest from './PostRequest';
import App from './App';
import ContextDemo from './ContextDemo';


// function Demo(){
//   return(
//     <div>
//     <h1>React Hello World!!!</h1>
//     <p>Paragraph.</p>

//   </div>
//   )
// }

class Demo extends React.Component{

   render(){
    return(
      <div>
      <h1>React Hello World!!!</h1>
      <p>Paragraph.</p>
  
      </div>
    )
   }
}

ReactDOM.render(
  <ContextDemo/>
    ,
  document.getElementById('root')
);

