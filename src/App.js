import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import switchLogin from './components/Home/switchLogin'
import Login from './components/Home/login'
import DashboardAdmin from './components/Admin/DashboardAdmin';
import AddClass from './components/Admin/AddClass';
import SearchClass from './components/Admin/SearchClass'
import SearchClassUnique from './components/Admin/SearchClassUnique';
import {ToastContainer } from 'react-toastify';
import SearchStudent from './components/Admin/SearchStudent';
import SearchTeacher from './components/Admin/SearchTeacher';
import AddStudent from './components/Admin/addStudent';
import AddTeacher from './components/Admin/addTeacher';
import SearchUniqueTeacher from './components/Admin/SearchUniqueTeacher'
import SearchUniqueStudent from './components/Admin/SearchUniqueStudent'
import DashboardTeacher from './components/Teacher/DashboardTeacher';
import CreateRoll from './components/Teacher/CreateRoll';


function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Switch>

          <Route exact path="/" component={Home} />
          <Route path="/admin" component={DashboardAdmin}/>
          <Route path="/switch-login/" component={switchLogin}/>
          <Route path="/login-student/" component={Login}/>
          <Route path="/login-teacher/" component={Login}/>
          
          <Route exact path="/search-class" component={SearchClass}/>
          <Route path="/add-class/:id?" component={AddClass} />
          <Route path="/search-class/:id" component={SearchClassUnique}/>

          <Route exact path="/search-student" component={SearchStudent} />
          <Route path="/search-student/:id" component={SearchUniqueStudent} />
          <Route path="/add-student/:id?" component={AddStudent} />

          <Route exact path="/search-teacher" component={SearchTeacher} />
          <Route path="/add-teacher/:id?" component={AddTeacher} />
          <Route path="/search-teacher/:id" component={SearchUniqueTeacher}/>

          <Route exact path="/teacher/dashboard" component={DashboardTeacher} />
          <Route exact path="/teacher/create-roll" component={CreateRoll} />

        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
