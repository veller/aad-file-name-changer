import chalk from "chalk";
import { readdirSync, rename } from "fs";

// Modificar a linha abaixo com o caminho para a pasta contendo os arquivos que serão renomeados
const sourceFolderPath = "/Users/veller/Desktop/folder bem interessante";
// Modificar a linha abaixo com o prefixo que todos os arquivos devem conter após renomeados
const prefixToBeAddedToEachFileName = "ela-me-falou-que-quer-rave";
// Modificar a linha abaixo com o número de caracteres no fim do nome do arquivo original
// que devem ser mantidos após renomeados. Incluir a extensão.
// por exemplo: preencher com "10" para um arquivo original com nome abcdefghixxx_example_101222.pdf
// isto é, 101222.pdf (10 caracteres incluindo o ponto e extensão)
const numberOfCharactersToKeep = "10";

const files = readdirSync(sourceFolderPath);
files.forEach((file) => {
  const newFileName =
    prefixToBeAddedToEachFileName +
    file.slice(Number(`-` + numberOfCharactersToKeep));
  rename(
    sourceFolderPath + `/${file}`,
    sourceFolderPath + `/${newFileName}`,
    () =>
      console.log(chalk.magenta(file), `renamed to`, chalk.green(newFileName))
  );
});
