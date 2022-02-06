import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Create from './pages/create/Create';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Project from './pages/project/Project';
import NotFound from './pages/notFound/NotFound';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

//styles
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <div className="container">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/project/:id">
              <Project />
            </Route>
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
