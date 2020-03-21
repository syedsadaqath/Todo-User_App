import React from 'react';
import './App.css';
import { BrowserRouter, NavLink, Route } from 'react-router-dom'
import 'antd/dist/antd.css';

import Home from './Home/IndexTodo';
import HomeUser from './HomeUser/IndexUser';

function App(){
  return(
    <BrowserRouter>
      <>
        <header>
          <NavLink to={"./Home"} activeClassName="active">
            User Todo-List
          </NavLink>
          <NavLink to={"/HomeUser"} activeClassName="active" exact>
            User's Page
          </NavLink>
        </header>
        <Route path={"/Home"} component={Home} />
        <Route path={"/HomeUser"} component={HomeUser} />
      </>
    </BrowserRouter>
  );
}
 

export default App;