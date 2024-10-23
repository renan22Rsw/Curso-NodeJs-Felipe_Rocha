const mongoose = require("mongoose");

const connectToDataBase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_ULR);
    console.log("A conexão foi ao banco de dados foi realizada com sucesso");
  } catch (error) {
    console.log("Houve um error ao conectar ao banco de dados!", error);
  }
};

module.exports = connectToDataBase;
