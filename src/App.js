import React from 'react';
import Background from './component/background';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import MyWorks from './component/MyWorks';



const App=()=>{
  return(
    <div>
    <BrowserRouter>
    <Switch>
    <Route exact path='/' component={Background}/>
    <Route  path='/MyWorks' component={MyWorks}/>
    </Switch>
    </BrowserRouter>
    </div>
  );
}
export default App;

