const authRouter = require("../app/auth/router.js");
const userAdminRouter = require("../app/userAdmin/router.js");
const dosenRouter = require("../app/dosen/router.js");
const matkulRouter = require("../app/matkul/router.js");
const fakultasRouter = require("../app/fakultas/router.js");
const jadwalRouter = require("../app/jadwal_dosen/router.js");
const prodiRouter = require("../app/prodi/router.js");
const kelasRouter = require("../app/kelas/router.js");
const mahasiswaRouter = require("../app/mahasiswa/router.js");
const dashboardRouter = require("../app/dashboard/router.js");

const express = require("express");

const app = express.Router();

const routes = app
  .use(authRouter)
  .use(userAdminRouter)
  .use(dosenRouter)
  .use(matkulRouter)
  .use(fakultasRouter)
  .use(jadwalRouter)
  .use(prodiRouter)
  .use(kelasRouter)
  .use(mahasiswaRouter)
  .use(dashboardRouter);

module.exports = app.use("/monitoring/api/v1", routes);
