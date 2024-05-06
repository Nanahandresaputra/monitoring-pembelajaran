import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OutletPage from "./pages/outlet";
import Dashboard from "./layout/dashboard";
import Dosen from "./layout/dosen";
import ListMahasiswa from "./layout/mahasiswa/list-mahasiswa";
import Kelas from "./layout/mahasiswa/kelas";
import Jdw from "./layout/aka/jdw";
import Faxu from "./layout/aka/fax";
import Prod from "./layout/aka/prod";
import MK from "./layout/aka/mk";
import Login from "./pages/auth";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OutletPage />}>
          <Route path="" element={<Dashboard />} />
          <Route path="/Data-1" element={<Dosen />} />
          <Route path="/List-Data" element={<ListMahasiswa />} />
          <Route path="/Data-M2" element={<Kelas />} />
          <Route path="/Data-Ak1" element={<Jdw />} />
          <Route path="/Data-Ak2" element={<Faxu />} />
          <Route path="/Data-Ak3" element={<Prod />} />
          <Route path="/Data-Ak4" element={<MK />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
