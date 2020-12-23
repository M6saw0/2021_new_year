import React from "react"
import {BrowserRouter, Route} from "react-router-dom"
import {Home, defaultPath} from "./component/Home"
import {Greet} from "./component/Greet"
import {Work} from "./component/Work"
import {Closing} from "./component/Closing"
import {Header} from "./component/Header"
import {Footer} from "./component/Footer"


function App() {
  return (
    <div className="App">
      {/* <meta charSet="UTF-8"/> */}
      <BrowserRouter>
          <Header/>
          <Route exact path={defaultPath} component={Home}/>
          <Route path={defaultPath + "/greeting"} component={Greet}/>
          <Route path={defaultPath + "/work"} component={Work}/>
          <Route path={defaultPath + "/closing"} component={Closing}/>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
