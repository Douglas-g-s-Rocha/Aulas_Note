import chalk from "chalk";
import fs from "fs"; 


//console.log(chalk.red.bgYellow("Hello word!"))
//console.log(chalk.bgBlue("Hello word!"))

//const paragrafo = "Texto retornado por uma função";

//function texto(string){
  //  return string
//}

//console.log(texto(paragrafo));

function trataErro(erro){
    throw new Error(chalk.red(erro.code, "ARQUIVO NÃO ENCONTRADO!"));
}

function pegaArquivo(caminhoDoArquivo){
    const encoding = 'utf-8';
    //fs.readFile(caminhoDoArquivo, encoding, (_, texto) => { (o _ da como indefinido)
        fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
            if(erro){
                trataErro(erro);
            }
        console.log(chalk.green(texto));
    })
}

pegaArquivo('./arquivos/texto.md'); //certo
//pegaArquivo('./banana/texto.md'); // errado