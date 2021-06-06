import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import DashboardAdmin from './components/Admin/DashboardAdmin';
import addClass from './components/Admin/AddClass';
import SearchClass from './components/Admin/SearchClass';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/admin" component={DashboardAdmin}/>
          <Route path="/addclass" component={addClass}/>
          <Route path="/searchclass" component={SearchClass}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
