import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Register from './pages/Register/Register'
import Success from './pages/Success/Success'
import Lead from './pages/Lead/Lead'
import SuccessLead from './pages/SuccessLead/SucessLead'

ReactDOM.render(
  <>
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/Home" component={Home} />
            <Route path="/Registrar" component={Register} />
            <Route path="/Success" component={Success} />
            <Route path="/Lead" component={Lead} />
            <Route path="/SuccessLead" component={SuccessLead} />
            <Route component={NotFound} />
        </Switch>
    </ BrowserRouter>
  </>,
  document.getElementById('root')
);
