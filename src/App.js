import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";
import './App.css';

function App() {
  return (
    //creating our app
    <div className="App">
      <Router>
        {/* header component defined and styled in ./components/Header */}
        <Header/>
        
        <Switch> 
          <Route exact path ="/">
            {/* Our login component defined and styled in ./components/Header) */}
            <Login />
          </Route>
          
          <Route exact path ="/home">
            <Home />
          </Route>

          <Route exact path ="/detail/:id">
            <Detail/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
