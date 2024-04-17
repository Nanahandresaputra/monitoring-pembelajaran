const cors = require("cors");
const dotenv = require("dotenv");
const logger = require("morgan");
const express = require("express");
const config = require("./src/config/config.js");
const { decodeToken } = require("./src/middleware/auth.js");

const authRouter = require("./src/app/auth/router.js");
const userAdminRouter = require("./src/app/userAdmin/router.js");
const dosenRouter = require("./src/app/dosen/router.js");

const { port } = config;

//========================= ENGINE SETUP =========================

const app = express();
dotenv.config();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(decodeToken());

//========================== VIEW ==============================

app.get("/", (req, res) => {
  res.send("<h1>Monitoring Belajar App Server</h1> <p>App monitoring belajar api service</p>");
});

//========================== ROUTES ==============================
app.use("/monitoring/api/v1", authRouter);
app.use("/monitoring/api/v1", userAdminRouter);
app.use("/monitoring/api/v1", dosenRouter);

//============================ 404 ================================

app.use((req, res) => {
  res.status(404);
  res.send({
    status: "error",
    message: `resource ${req.originalUrl} not found`,
  });
});

//========================= APP LISTENER =============================
app.listen(port, console.log(`server running in port ${port}`));
