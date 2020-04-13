const Perpanjangan = require("../models").PERPANJANGAN;
const Pinjaman = require("../models").pinjaman;
const Nasabah = require("../models").NASABAH;

exports.addPerpanjangan = async (req, res) => {
  try {
    const { NO_PEMINJAMAN, JLH_HARI, TGL_KEMBALI, KET } = req.body;

    const src = await Pinjaman.findOne({
      where: { NO_PINJAMAN: NO_PEMINJAMAN }
    });
    if (src) {
      const insert = {
        ID_PEMINJAMAN: src.id,
        JLH_HARI,
        TGL_KEMBALI,
        KET
      };
      console.log(insert);
      await Perpanjangan.create(insert);
      res.send({
        msg: "Data Berhasil disave",
        status: true
      });
    }
  } catch (error) {
    res.status(401).send({
      msg: error.message
    });
  }
};
