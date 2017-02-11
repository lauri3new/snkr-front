import React from "react";
import Game from "./game";
import League from "./league";

// App container acts as presentation frame for app.
const App = (props) => {
  return (
    <div >
    <div className="row">
      <Game />
    </div>
    <div style={{ marginTop:'100vh'}} >
    </div>
    <div >
      <League />
    </div>
    </div>
  );
};

App.propTypes = {
  children: React.PropTypes.node
};

export default App;
