const Nasabah = require("../models").NASABAH;

exports.getNasabah = async (req, res) => {
  try {
    const data = await Nasabah.findAll({
      order: [["id", "DESC"]]
    });
    res.send({
      data
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).send({
      msg: error.message
    });
  }
};

exports.getKTPNasabah = async (req, res) => {
  try {
    const data = await Nasabah.findOne({ where: { KTP: req.params.KTP } });
    res.send({
      data
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).send({
      msg: error.message
    });
  }
};

exports.getNasabahBrowse = async (req, res) => {
  try {
    const data = await Nasabah.findAll({
      where: { status: "NON AKTIF" },
      order: [["id", "DESC"]]
    });
    res.send({
      data
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).send({
      msg: error.message
    });
  }
};

exports.addNasabah = async (req, res) => {
  try {
    const find = await Nasabah.findOne({ where: { KTP: req.body.KTP } });
    if (find) {
      res.send({
        data
      });
    } else {
      const data = await Nasabah.create(req.body);
      res.send({
        data
      });
    }
  } catch (error) {
    console.log(error.message);
    res.status(400).send({
      msg: error.message
    });
  }
};

exports.editNasabah = async (req, res) => {
  try {
    await Nasabah.update(req.body, { where: { id: req.params.id } });
    res.send({
      msg: "update data berhasil"
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).send({
      msg: error.message
    });
  }
};

exports.deleteNasabah = async (req, res) => {
  try {
    await Nasabah.destroy({ where: { id: req.params.id } });
    res.send({
      msg: "delete data berhasil"
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).send({
      msg: error.message
    });
  }
};
