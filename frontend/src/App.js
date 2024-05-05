import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OutletPage from "./pages/outlet";
import Dashboard from "./layout/dashboard";
import Dosen from "./layout/dosen";
import ListMahasiswa from "./layout/mahasiswa/list-mahasiswa";
import Kelas from "./layout/mahasiswa/kelas";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OutletPage />}>
          <Route path="" element={<Dashboard />} />
          <Route path="/Data-1" element={<Dosen />} />
          <Route path="/List-Data" element={<ListMahasiswa />} />
          <Route path="/Data-M2" element={<Kelas />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
