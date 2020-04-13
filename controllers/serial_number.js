const SN = require("../models").SERIAL_NUMBER;

exports.createSN = async (req, res) => {
  try {
    // const { NAME, NO_URUT } = req.body;
    const cek = await SN.findOne({ where: { NAME: req.params.NAME } });
    if (cek) {
      const data = {
        NAME: req.params.NAME,
        NO_URUT: cek.NO_URUT + 1
      };
      await SN.update(data, {
        where: { NAME: req.params.NAME }
      });
      res.send({
        cek
      });
    } else {
      const data = {
        NAME: req.params.NAME,
        NO_URUT: 1
      };
      const addSN = await SN.create(data);
      res.send({
        addSN
      });
    }
  } catch (error) {
    res.send(401).status({
      msg: error.message
    });
  }
};
