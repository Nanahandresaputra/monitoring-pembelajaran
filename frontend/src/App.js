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
import DataAdmin from "./layout/admin";
import PrivateRouter from "./pages/private-router";
import PageNotFound from "./pages/404";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            // <PrivateRouter>
            <OutletPage />
            // </PrivateRouter>
          }
        >
          <Route path="" element={<Dashboard />} />
          <Route path="/Dosen" element={<Dosen />} />
          <Route path="/List-Mahasiswa" element={<ListMahasiswa />} />
          <Route path="/Kelas" element={<Kelas />} />
          <Route path="/Jadwal" element={<Jdw />} />
          <Route path="/Fakultas" element={<Faxu />} />
          <Route path="/Program-Studi" element={<Prod />} />
          <Route path="/Mata-Kuliah" element={<MK />} />
          <Route path="/Admin" element={<DataAdmin />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
