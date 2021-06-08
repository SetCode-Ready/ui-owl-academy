import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import DashboardAdmin from './components/Admin/DashboardAdmin';
import AddClass from './components/Admin/AddClass';
import SearchClass from './components/Admin/SearchClass'
import SearchClassUnique from './components/Admin/SearchClassUnique';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/admin" component={DashboardAdmin}/>
          <Route path="/add-class" component={AddClass} />

          <Route exact path="/search-class" component={SearchClass}/>
          <Route path="/search-class/:id" component={SearchClassUnique}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
