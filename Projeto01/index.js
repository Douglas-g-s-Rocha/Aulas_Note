import chalk from "chalk";

console.log(chalk.red.bgYellow("Hello word!"))
console.log(chalk.bgBlue("Hello word!"))

const paragrafo = "Texto retornado por uma função";

function texto(string){
    return string
}

console.log(texto(paragrafo));

