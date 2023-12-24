import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Login from "./component/login/Login.jsx";
import Register from "./component/register/Register.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Main page</h3>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Register" element={<Register />} />
          </Routes>
          
          
          
          <Link to='/'>Move to Login Page</Link>
        </Router>
      </header>
    </div>
  );
}

export default App;
