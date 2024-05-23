import {BrowserRouter,Routes,Route} from "react-router-dom"
import Netflix from "./pages/Netflix";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Player from "./pages/Player";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Netflix/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/signup" element={<Signup/>}/>
      <Route exact path="/player" element={<Player/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
