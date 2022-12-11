import React from "react";
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import './App.css';

import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Start from "./pages/Start";
import ELandingPage from "./pages/ELandingPage";
import EHome from "./pages/EHome";
import Advisees from "./pages/Advisees";
import AHome from "./pages/AHome";
import EmployeeSignUp from "./pages/ESignUp.js";
import Regi from "./pages/regi_new.js";
import Regi2 from "./pages/Regi2.js"
import ISignUp from "./pages/ISignUp.js"
import ASearch from "./pages/ASearch.js"
import Advisors from "./pages/Advisors.js"
import AssignGrades from "./pages/AssignGrades.js"
import ManageCharges from "./pages/ManageCharges.js"
import Applications from "./pages/Applications.js"
import Profile from "./pages/Profile";
import AcademicRecords from "./pages/AcademicRecords";
import Finance from "./pages/Finance";
import RHome from "./pages/RHome";
import Allot from "./pages/Allot";

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Start} />
          <Route path="/landingpage" component={LandingPage} />
          <Route path="/home" component={Home} />
          <Route path="/registration" component={Registration} />
          <Route path="/elandingpage" component={ELandingPage} />
          <Route path="/ehome" component={EHome} />
          <Route path="/rhome" component={RHome} />
          <Route path="/allot-rooms" component={Allot} />
          <Route path="/advisees" component={Advisees} />
          <Route path="/ahome" component={AHome} />
          <Route path="/employee-signup" component={EmployeeSignUp} />
          <Route path="/student-profile" component={Profile} />
          <Route path="/academic-records" component={AcademicRecords} />
          <Route path="/finance" component={Finance} />
          <Route path="/regi_new" component={Regi} />
          <Route path="/regi2" component={Regi2} />
          <Route path="/isignup" component={ISignUp} />
          <Route path="/asearch" component={ASearch} />
          <Route path="/add-advisors" component={Advisors}/>
          <Route path= "/AssignGrades" component={AssignGrades}/>
          <Route path= "/ManageCharges" component={ManageCharges}/>
          <Route path= "/Applications" component={Applications}/>


        </Switch>
      </Router>
  );
}

export default App;