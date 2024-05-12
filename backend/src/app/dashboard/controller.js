const db = require("../../db/db_connection.js");
const errorCode = require("../../middleware/errorCode");

const dashboardData = async (req, res, next) => {
  try {
    let mahasiswa = await db.query(`select m.id, m.nama, m.nim, p.prodi, f.fakultas, k.kelas, m.status from mahasiswa 
        m join fakultas f on m.fakultas_id = f.id join prodi p on m.prodi_id = p.id join kelas k on m.kelas_id = k.id`);
    let dosen = await db.query(`select * from dosen`);
    let fakultas = await db.query(`select * from fakultas`);
    let admin = await db.query(`select * from useradmin`);

    let dashboard = {
      totalMahasiswa: mahasiswa.rowCount,
      totalDosen: dosen.rowCount,
      totalAdmin: admin.rowCount,
      fakultasMhs: fakultas.rows.map((data) => ({
        fakultas: data.fakultas,
        total: mahasiswa.rows.filter((datas) => datas.fakultas === data.fakultas).length,
      })),
    };

    return res.json(errorCode(1000, "data", dashboard));
  } catch (err) {
    return res.json(errorCode(9002));
  }
};

module.exports = { dashboardData };
