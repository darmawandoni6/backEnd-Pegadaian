const Pembayaran = require("../models").PEMBAYARAN;
const Pinjaman = require("../models").pinjaman;
const Nasabah = require("../models").NASABAH;

exports.addPembayaran = async (req, res) => {
  try {
    const { ID_PEMINJAMAN, BUKTI_TRANS, TGL_TRANS, TOTAL } = req.body;
    const data = {
      ID_PEMINJAMAN,
      BUKTI_TRANS,
      TGL_TRANS,
      TOTAL,
    };
    await Pembayaran.create(data);
    res.send({
      data,
    });
  } catch (error) {
    res.status(401).send({
      msg: error.message,
    });
  }
};

exports.getPembayaran = async (req, res) => {
  try {
    const data = await Pembayaran.findAll({
      attributes: ["id", "BUKTI_TRANS", "TGL_TRANS", "TOTAL"],
      include: [
        {
          model: Pinjaman,
          attributes: ["NO_PINJAMAN"],
          include: [
            {
              model: Nasabah,
              attributes: ["NASABAH"],
            },
          ],
        },
      ],
      order: [["id", "DESC"]],
    });
    res.send({
      data,
    });
  } catch (error) {
    res.status(401).send({
      msg: error.message,
    });
  }
};
