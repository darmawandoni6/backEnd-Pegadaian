//instantiate express module
const express = require("express");
const bodyParser = require("body-parser");
require("express-group-routes");
const cors = require("cors");

const app = express();
// const port = 5000;
const port = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello Express!");
});

app.use(express.static("images"));

const { authenticated } = require("./controllers/auth/midleware");
const SN = require("./controllers/serial_number");
const user = require("./controllers/auth/auth");
const cek = require("./controllers/user");
const nasabah = require("./controllers/nasabah");
const bunga = require("./controllers/bunga");
const pinjaman = require("./controllers/pinjaman");
const barang = require("./controllers/barang");
const perpanjangan = require("./controllers/perpanjangan");
const pembayaran = require("./controllers/pembayaran");

const upload = require("./controllers/upload");

app.use(express.static("images"));
app.group("/api/v1", (router) => {
  // router.post("/auth", login.auth);
  router.post("/login", user.signin);
  router.post("/register", user.signup);
  router.patch("/update-password", user.updatePassword);
  router.get("/cekuser", authenticated, cek.cekUser);
  router.patch("/foto", authenticated, cek.updateProfil);
  router.get("/nasabah", authenticated, nasabah.getNasabah);
  router.get("/nasabah/:KTP", authenticated, nasabah.getKTPNasabah);
  router.get("/browse-nasabah", authenticated, nasabah.getNasabahBrowse);
  router.post("/nasabah", authenticated, nasabah.addNasabah);
  router.patch("/nasabah/:id", authenticated, nasabah.editNasabah);
  router.delete("/nasabah/:id", authenticated, nasabah.deleteNasabah);
  router.patch("/update-status", authenticated, nasabah.updateStatus);
  router.get("/bunga", authenticated, bunga.getBunga);
  router.post("/bunga", authenticated, bunga.bunga);
  router.post("/pinjaman", authenticated, pinjaman.addPinjaman);
  router.get("/pinjaman", authenticated, pinjaman.getPinjaman);
  router.get("/sn/:NAME", authenticated, SN.createSN);
  router.get("/barang", authenticated, barang.getBarang);
  router.post("/perpanjangan", authenticated, perpanjangan.addPerpanjangan);
  router.post("/upload", upload.upload);
  router.post("/pembayaran", authenticated, pembayaran.addPembayaran);
  router.get("/pembayaran", authenticated, pembayaran.getPembayaran);
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
