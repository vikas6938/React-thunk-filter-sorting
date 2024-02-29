import logo from './logo.svg';
import './App.css';
// import Header from './Routing-PR/Admin-panel/Header';
import { BrowserRouter as Router, Route, Switch, BrowserRouter, Routes } from 'react-router-dom';
import Dashboard from './Routing-PR/Admin-panel/Dashboard';
import Users from './Routing-PR/Admin-panel/Users';
import { useEffect, useState } from 'react';


function App() {
  const [user, setUser] = useState(() => {})


  return (
    <BrowserRouter>
      <div className="d-flex vh-100 ">
        <main className='w-100 dark-theme'>
          <div className="w-100">
            {/* <Header /> */}
          </div>
          <Routes >
            {/* <Route path="/" element={<Dashboard />} ></Route> */}
            <Route path="/" element={<Users user={user} setUser={setUser} />} ></Route>
            <Route path='*' element={<h1 className='container text-white '>404 Page Error...</h1>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>

 
  );
}

export default App;
