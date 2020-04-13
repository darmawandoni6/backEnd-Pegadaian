const Nasabah = require("../models").NASABAH;
const Pinjaman = require("../models").pinjaman;
const Pembayaran = require("../models").PEMBAYARAN;

exports.getNasabah = async (req, res) => {
  try {
    const data = await Nasabah.findAll({
      order: [["id", "DESC"]],
    });
    res.send({
      data,
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).send({
      msg: error.message,
    });
  }
};

exports.getKTPNasabah = async (req, res) => {
  try {
    const data = await Nasabah.findOne({ where: { KTP: req.params.KTP } });
    res.send({
      data,
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).send({
      msg: error.message,
    });
  }
};

exports.getNasabahBrowse = async (req, res) => {
  try {
    const data = await Nasabah.findAll({
      where: { status: "NON AKTIF" },
      order: [["id", "DESC"]],
    });
    res.send({
      data,
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).send({
      msg: error.message,
    });
  }
};

exports.addNasabah = async (req, res) => {
  try {
    const find = await Nasabah.findOne({ where: { KTP: req.body.KTP } });
    if (find) {
      res.send({
        data,
      });
    } else {
      const data = await Nasabah.create(req.body);
      res.send({
        data,
      });
    }
  } catch (error) {
    console.log(error.message);
    res.status(400).send({
      msg: error.message,
    });
  }
};

exports.editNasabah = async (req, res) => {
  try {
    await Nasabah.update(req.body, { where: { id: req.params.id } });
    res.send({
      msg: "update data berhasil",
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).send({
      msg: error.message,
    });
  }
};

exports.deleteNasabah = async (req, res) => {
  try {
    await Nasabah.destroy({ where: { id: req.params.id } });
    res.send({
      msg: "delete data berhasil",
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).send({
      msg: error.message,
    });
  }
};

exports.updateStatus = async (req, res) => {
  try {
    const { ID_PEMINJAMAN, STATUS } = req.body;

    let pj = 0;
    let pb = 0;
    const dataPinjaman = await Pinjaman.findOne({
      where: { id: ID_PEMINJAMAN },
      attributes: ["PINJMAN", "ID_NAS"],
    });

    const totalPembayaran = await Pembayaran.sum("TOTAL", {
      where: { ID_PEMINJAMAN },
    });

    pb = totalPembayaran;
    pj = dataPinjaman.PINJMAN;

    if (pb >= pj) {
      const data = {
        STATUS,
      };
      await Nasabah.update(data, {
        where: { id: dataPinjaman.ID_NAS },
      });
      res.send({
        dataPinjaman,
        total: totalPembayaran,
        msg: "update",
      });
    }
    res.send({
      status: false,
      msg: "Belum melakukan pembayaran",
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).send({
      msg: error.message,
    });
  }
};
