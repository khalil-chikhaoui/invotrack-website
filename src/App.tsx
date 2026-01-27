import { BrowserRouter as Router, Routes, Route } from "react-router";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Landing from "./pages/Landing";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
        
  <Route path="/" element={<Landing />} />

     
        
        </Routes>
      </Router>
    </>
  );
}
