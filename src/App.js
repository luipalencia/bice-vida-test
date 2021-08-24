import NotFound from './views/NotFound'
import Home from './views/Home.js'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
             <NotFound />
            </Route> 
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
