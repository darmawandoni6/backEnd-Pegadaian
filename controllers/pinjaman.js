const Pinjaman = require("../models").pinjaman;
const Barang = require("../models").barang;
const Nasabah = require("../models").NASABAH;
const Perpanjangan = require("../models").PERPANJANGAN;

exports.addPinjaman = async (req, res) => {
  try {
    const {
      NO_PINJAMAN,
      ID_NAS,
      ID_BARANG,
      NILAI_MINIMAL,
      NILAI_MAXIMAL,
      PINJMAN,
      BUNGA,
      TGL_PINJAM,
      TGL_KEMBALI,
      TOT_PINJAMAN
    } = req.body;

    const data = await Barang.create(ID_BARANG);
    if (data) {
      const pinjaman = {
        NO_PINJAMAN,
        ID_NAS,
        ID_BARANG: data.id,
        NILAI_MINIMAL,
        NILAI_MAXIMAL,
        PINJMAN,
        BUNGA,
        TGL_PINJAM,
        TGL_KEMBALI,
        TOT_PINJAMAN
      };
      const data2 = await Pinjaman.create(pinjaman);
      if (data2) {
        await Nasabah.update({ STATUS: "AKTIF" }, { where: { id: ID_NAS } });
        console.log("Jalan");
      }
    }
    res.send({
      msg: true
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).send({
      msg: error.message
    });
  }
};

exports.getPinjaman = async (req, res) => {
  try {
    const data = await Pinjaman.findAll({
      include: [
        {
          model: Perpanjangan,
          attributes: ["id", "TGL_KEMBALI"]
        },
        {
          model: Nasabah,
          attributes: ["NASABAH", "STATUS"],
          where: { STATUS: "AKTIF" }
        }
      ],
      attributes: [
        "id",
        "NO_PINJAMAN",
        "TGL_PINJAM",
        "TOT_PINJAMAN",
        "TGL_KEMBALI"
      ],
      order: [["id", "DESC"]]
    });

    res.send({
      data
    });
  } catch (error) {
    res.status(401).send({
      msg: error.message
    });
  }
};
