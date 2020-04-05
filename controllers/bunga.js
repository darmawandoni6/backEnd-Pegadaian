const Bunga = require("../models").BUNGA;

exports.getBunga = async (req, res) => {
  try {
    const data = await Bunga.findOne({ where: { NAME: "Bunga" } });
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

exports.bunga = async (req, res) => {
  try {
    const { NAME, BUNGA } = req.body;
    const dataV = {
      NAME: "Bunga",
      BUNGA
    };
    const data = await Bunga.findOne({ where: { NAME: "Bunga" } });
    if (data) {
      await Bunga.update(req.body, { where: { NAME: "Bunga" } });
      res.send({
        data
      });
    } else {
      await Bunga.create(dataV);
      res.send({
        msg: "Success"
      });
    }
  } catch (error) {
    console.log(error.message);
    res.status(400).send({
      msg: error.message
    });
  }
};
