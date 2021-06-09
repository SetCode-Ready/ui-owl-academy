import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import DashboardAdmin from './components/Admin/DashboardAdmin';
import AddClass from './components/Admin/AddClass';
import SearchClass from './components/Admin/SearchClass'
import SearchClassUnique from './components/Admin/SearchClassUnique';
import {ToastContainer } from 'react-toastify';
import SearchStudent from './components/Admin/SearchStudent';
import SearchTeacher from './components/Admin/SearchTeacher';

function App() {


  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/admin" component={DashboardAdmin}/>
          
          <Route exact path="/search-class" component={SearchClass}/>
          <Route path="/add-class/:id?" component={AddClass} />
          <Route path="/search-class/:id" component={SearchClassUnique}/>

          <Route path="/search-student" component={SearchStudent} />

          <Route exact path="/search-teacher" component={SearchTeacher} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
