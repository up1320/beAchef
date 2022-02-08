
import { Grid, Button } from "semantic-ui-react"
import LandingPage from "./components/landingPage";
import Chef from "./components/chef";
import {Route,Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/chef" element={<Chef />} />
      </Routes>
      

    </div>
  );
}

export default App;
