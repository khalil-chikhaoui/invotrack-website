import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";

export default function App() {
  return (
    <>
      <Router>

          <Routes>
            {/* Dashboard Layout */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfUse />} />
          </Routes>
      
      </Router>
    </>
  ); 
}
