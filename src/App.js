import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import HomePage from "../src/screens/HomePage";
import QuotesPage from "./screens/QuotesPage";
import Resturants from "./screens/Resturants";
import FoodPage from "./screens/FoodPage";
import ContactPage from "./screens/ContactPage";
function App() {
  return (
    <>
    <Router>
 <Routes>
 <Route  path="/" element={<HomePage/> }/>
 <Route path="/quotes" element={<QuotesPage/>} />
 <Route path="/resturants" element={<Resturants/>} />
 <Route path="/food" element={<FoodPage/>} />
 <Route path="/contact" element={<ContactPage/>} />
</Routes>
    </Router>

    </>
  );
}

export default App;
