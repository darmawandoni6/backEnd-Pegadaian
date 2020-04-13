const User = require("../models").user;

exports.cekUser = async (req, res) => {
  try {
    const data = await User.findOne({
      where: { id: req.user.userId },
      attributes: ["user", "foto"],
    });
    res.send({
      data,
    });
  } catch (error) {
    res.status(401).send({
      data: error.message,
    });
  }
};

exports.updateProfil = async (req, res) => {
  try {
    const data = await User.update(req.body, {
      where: { user: req.body.user },
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
