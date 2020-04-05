"use strict";
module.exports = (sequelize, DataTypes) => {
  const BUNGA = sequelize.define(
    "BUNGA",
    {
      NAME: DataTypes.STRING,
      BUNGA: DataTypes.FLOAT
    },
    {}
  );
  BUNGA.associate = function(models) {
    // associations can be defined here
  };
  return BUNGA;
};
