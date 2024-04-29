import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OutletPage from "./pages/outlet";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OutletPage />} />
      </Routes>
    </Router>
  );
}

export default App;
