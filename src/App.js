import About from "./reactrouter/About";
import Home from "./reactrouter/Home";
import Services from "./reactrouter/Services";

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>

      <ul>
         <li><a href='/home'>Home</a></li>
         <li><a href='/about'>About</a></li>
         <li><a href='/services'>Services</a></li>
      </ul>

      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/services' element={<Services/>}/>
        </Routes> 
      </BrowserRouter> 
    </div>
  );
}

export default App;
