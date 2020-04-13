const jwt = require("jsonwebtoken");
const { security } = require("./midleware");
const User = require("../../models").user;
const bcrypt = require("bcrypt");
const saltRounds = 10;

exports.signup = async (req, res) => {
  try {
    const { user, pass } = req.body;
    const cek = await User.findOne({ where: { user } });
    if (cek) res.send({ status: false, msg: "username sudah digunakan" });
    else {
      const dataRegister = {
        user,
        pass: bcrypt.hashSync(pass, saltRounds),
      };
      const data = await User.create(dataRegister);
      const token = jwt.sign({ userId: data.id }, security);
      res.send({
        status: true,
        token,
      });
    }
  } catch (error) {
    res.status(401).send({
      message: error.message,
    });
  }
};

exports.signin = async (req, res) => {
  try {
    const { user, pass } = req.body;
    const data = await User.findOne({ where: { user } });
    if (data) {
      const cek = bcrypt.compareSync(pass, data.pass);
      const token = jwt.sign({ userId: data.id }, security);
      if (cek)
        res.send({
          statLogin: true,
          user: data.user,
          token,
        });
      else
        res.send({
          statPass: false,
          passErr: "Password Salah !!",
        });
    } else
      res.send({
        statUser: false,
        userErr: "Username Tidak Ada !!",
      });
  } catch (error) {
    res.status(401).send({
      message: error.message,
    });
  }
};

exports.updatePassword = async (req, res) => {
  try {
    const { user, passLama, passBaru } = req.body;
    const data = await User.findOne({ where: { user } });
    if (data) {
      const cek = bcrypt.compareSync(passLama, data.pass);
      if (cek) {
        const changePass = {
          pass: bcrypt.hashSync(passBaru, saltRounds),
        };
        await User.update(changePass, { where: { user } });
        res.send({ status: true });
      } else res.send({ status: false, string: "Password Salah" });
    } else res.send({ status: false, string: "Username tidak ada" });
  } catch (error) {
    res.status(401).send({
      msg: error.message,
    });
  }
};
