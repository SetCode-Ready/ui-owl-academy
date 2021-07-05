import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import switchLogin from './components/Home/switchLogin'
import Login from './components/Home/login'
import Recovery from './components/Home/recoveryPassword'
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
import DashboardAluno from './components/Home/DashboardAluno';
import DocumentRequest from './components/Home/DocumentRequest';
import {UserStorage} from './components/UserContext'
import AddStudant from './components/Admin/AddStudant';
import { ModalContextStorage } from './components/ModalContext';


function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <UserStorage>
        <ModalContextStorage>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/admin" component={DashboardAdmin}/>
            <Route path="/switch-login/" component={switchLogin}/>
            <Route path="/login/:user?" component={Login}/>
            <Route path="/recovery-password" component={Recovery}/>
            <Route path="/teste" component={AddStudant}/>
            
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
            <Route path="/student/dashboard" component={DashboardAluno}/>
            
            <Route path="/student/documents" component={DocumentRequest}/>
          </Switch>
        </ModalContextStorage>
        </UserStorage>
      </BrowserRouter>
    </>
  );
}

export default App;
