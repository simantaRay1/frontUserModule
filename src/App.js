import Header from "./Components/Header";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="App">
        <Header />
        {/* <Signup /> */}
        <Signin />
    </div>
  );
}

export default App;
