import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OutletPage from "./pages/outlet";
import Dashboard from "./layout/dashboard";
import Dosen from "./layout/dosen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OutletPage />}>
          <Route path="" element={<Dashboard />} />
          <Route path="/Dosen" element={<Dosen />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
