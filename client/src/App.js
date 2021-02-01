import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Champions from "./routes/Champions";
import ChampionDetails from "./routes/ChampionDetails";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/champions" component={Champions} />
          <Route
            exact
            path="/champions/:id/details"
            component={ChampionDetails}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
