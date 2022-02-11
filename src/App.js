
import { Grid, Button } from "semantic-ui-react"
import LandingPage from "./components/landingPage";
import Chef from "./components/chef";
import Login from "./components/Login/Login";
import {Route,Routes,useNavigate} from "react-router-dom"
import Home from "./container/Home";
import UserProfile from "./components/UserProfile/UserProfile";
import { fetchUser } from "./utils/fetchUser";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate()

  useEffect(() => {
    const user = fetchUser()
    if (!user) {
      navigate('/login')
    }
  },[])
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/chef" element={<Chef />} />
        <Route path="login" element={<Login />} />
       
      </Routes>
      

    </div>
  );
}

export default App;
