import * as React from "react";
import {Switch} from "react-router"
import {Route} from "react-router-dom"

// Components
import Login from './components/login'
import SearchAddress from './components/SearchAddress'

// App Component を定義
const App: React.FC = () => (
  <div>  
      <Route exact path="/" component={Login} />
      <Route exact path="/SearchAddress" component={SearchAddress} />
  </div>
);

export default App