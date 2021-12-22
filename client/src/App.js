import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";


import FibinaciView from './views/FibinaciView';
import OtherView from './views/OtherView';

function App() {
  return (
    <Router>
      <div className="App p-4">
        <header className="">
        <h2 className='text-start'>Navigation</h2>
          <ul className='row'> 
            <li className='col col-2'><Link className='btn btn-link' to={"/"}>Go to fib</Link></li>
            <li className='col col-2'><Link className='btn btn-link' to={"/other"}>Other</Link></li>
          </ul>
          
          <hr></hr>

         <Routes>
            <Route exact path="/" element={<FibinaciView></FibinaciView>}></Route>
            <Route path="/other" element={<OtherView></OtherView>}></Route>
          </Routes>
        </header>

      </div>
    </Router>
  );
}


export default App;
