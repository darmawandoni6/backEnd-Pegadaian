const Pinjaman = require("../models").pinjaman;
const Barang = require("../models").barang;
const Nasabah = require("../models").NASABAH;

exports.getBarang = async (req, res) => {
  try {
    const data = await Pinjaman.findAll({
      include: [
        {
          model: Nasabah,
          attributes: ["NASABAH", "STATUS"]
        },
        {
          model: Barang,
          attributes: ["MERK", "BARANG", "SPESIFIKASI"]
        }
      ],
      attributes: ["NO_PINJAMAN"]
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
