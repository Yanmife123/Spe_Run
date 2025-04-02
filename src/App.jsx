import {
  Loader,
  Login,
  Register,
  About,
  Contact,
  Home,
  Events,
  Team,
  NotFound,
} from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path={"/"} element={<Loader />} />
          <Route path="/home" element={<Home />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/contact"} element={<Contact />} />
          <Route path={"/events"} element={<Events />} />
          <Route path={"/team"} element={<Team />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
