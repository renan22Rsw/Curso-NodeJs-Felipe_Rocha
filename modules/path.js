const path = require("path");

//Mostra o nome do arquivo atual

console.log(path.basename(__filename));

//Mostra o nome do diretório atual

console.log(path.dirname(__filename));

//Mostra extenção do arquivo

console.log(path.extname(__filename));

// Cria objeto path

console.log(path.parse(__filename));

// Juntar caminhos de arquivos

console.log(path.join(__dirname, "test"));
