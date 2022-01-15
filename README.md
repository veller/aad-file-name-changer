# Se preparando para rodar o script

Estes passos só precisarão ser feitos na primeira vez...

1. Fazer download e instalar o Node (qualquer versão) [aqui](https://nodejs.org/en/)
2. Baixar o .zip deste repositório e descompactar em uma pasta qualquer do computador
3. No Mac, abrir o terminal (_command + space_ e digitar _terminal_)
4. No terminal, [navegar](https://macpaw.com/how-to/use-terminal-on-mac) até a pasta onde o script foi descompactado (passo 2)
5. Quando estiver dentro da pasta do script, executar via terminal o comando `npm install`

# Executando o script

Cada vez que for executar o script, seguir este guia

1. Acessar a pasta descompactada do script e abrir o arquivo `file-reader.js` no aplicativo textEdit.app do mac
2. Dentro deste arquivo, editar as variáveis `sourceFolderPath`, `prefixToBeAddedToEachFileName` e `numberOfCharactersToKeep` de acordo com as instruções descritas naquele arquivo
3. Salvar o arquivo `file-reader.js`
4. Abrir o terminal e navegar até a pasta descompactada do script
5. Dentro da pasta, no terminal, digitar o comando `node file-reader.js`
6. Acessar a pasta dos arquivos e verificar se a renomeação funcionou

> Cuidado: **Os arquivos antigos serão renomeados para sempre**: Crie uma cópia antes de executar o script
