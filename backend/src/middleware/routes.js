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

const app = express();

app.use("/monitoring/api/v1", authRouter);
app.use("/monitoring/api/v1", userAdminRouter);
app.use("/monitoring/api/v1", dosenRouter);
app.use("/monitoring/api/v1", matkulRouter);
app.use("/monitoring/api/v1", fakultasRouter);
app.use("/monitoring/api/v1", jadwalRouter);
app.use("/monitoring/api/v1", prodiRouter);
app.use("/monitoring/api/v1", kelasRouter);
app.use("/monitoring/api/v1", mahasiswaRouter);
app.use("/monitoring/api/v1", dashboardRouter);

module.exports = app;
