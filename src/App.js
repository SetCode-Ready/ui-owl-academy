import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import DashboarAdmin from './components/Admin/DashboarAdmin';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/admin" component={DashboarAdmin}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
