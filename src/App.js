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
          <Route path="/addclass" component={AddClass} />

          <Route exact path="/searchclass" component={SearchClass}/>
            <Route path="/searchclass/:id" component={SearchClassUnique}/>

        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
