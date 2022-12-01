import React , {Component} from 'react'
import {FaHome} from 'react-icons/fa'
import { IconName } from "react-icons/ai";
import SignIn from './components/pages/Sign in page/SignIn';
import Comp from './components/pages/Dashboard/Dashboard';
import Vehicle_Registration from './components/pages/Registration/Vehicle_Registration';
import Company_registration from './components/pages/Registration/Company_registration';
class App extends Component{
  render(){
  return (
    <div className="App">
         <SignIn></SignIn>
         {/* <Comp></Comp> */}
         {/* <Company_registration></Company_registration> */}
         {/* <Vehicle_Registration></Vehicle_Registration> */}

    </div>
    
  );
}
}

export default App;
