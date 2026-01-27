import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <Router>

          <Routes>
            {/* Dashboard Layout */}
            <Route path="/" element={<Home />} />
          </Routes>
      
      </Router>
    </>
  ); 
}
