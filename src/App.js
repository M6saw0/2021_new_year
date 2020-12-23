import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import {Home} from "./component/Home"
import {Greet} from "./component/Greet"
import {Work} from "./component/Work"
import {Closing} from "./component/Closing"

function App() {
  return (
    <div className="App">
      {/* <meta charSet="UTF-8"/> */}
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/greeting" component={Greet}/>
          <Route path="/work" component={Work}/>
          <Route path="/closing" component={Closing}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
