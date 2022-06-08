import Header from "./Components/Header";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Details from "./pages/Details";


function App() {
  return (
  <Router>
    <div className="App">
      
       <Header  />
      <Routes >
        <Route path="/"       element={<Details />}/>
        <Route path="/signup" element={<Signup  />}/>
        <Route path="/signin" element={<Signin  />}/>
      </Routes>
     
        
    </div>
     </Router>
  );
}

export default App;
