import React from "react";
import {Link, Route, Switch} from "react-router-dom";
import NotFound from "./pages/not-found";
import About from "./pages/aboutpage";
import HomePage from "./pages/Home";
import Signin from "./pages/sign-in";
import TabPanel from "./pages/mui";

function App() {
  return (
    <div className="App">
      <header>
          <TabPanel />
      </header>
        <main>
            <Switch>
                <Route exact path='/'>
                    <HomePage />
                </Route>
                <Route  path='/about'>
                    <About />
                </Route>
                <Route  path='/sign-in'>
                    <Signin />
                </Route>
                <Route>
                    <NotFound />
                </Route>
            </Switch>
        </main>
    </div>
  );
}

export default App
