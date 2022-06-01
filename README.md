# Pokedex

A Pokédex é conhecida como Poké-Agenda no Brasil (e ainda como Dexter ou Dextette, dependendo da voz masculina ou feminina do aparelho).
Trata-se de uma enciclopédia virtual portátil de alta tecnologia que os treinadores Pokémon transportam para registra todas as espécies diferentes de Pokémon que são encontradas durante a sua viagem como treinadores. 
Em geral, quando são cumpridos determinados requisitos, a capacidade pode ser aumentada permitindo que a Pokédex possa armazenar dados de outros Pokémon, que não são comuns, assim como os Pokémon de outras regiões.



 
##  Requisitos:
* Criar um projeto no GitHub com Readme.md, .gitignore e licença;
* Iniciar um projeto node;
* Instalar as dependências:
> Express
> 
> Nodemon
> 
> EJS
* Alterar os scripts do package.json;
*Criar as pastas:
> public
> 
> css (arquivo style.css)
> 
> js (arquivo script.js)
> 
> img
> 
> views
> 
* Crie um arquivo principal chamado index.js;
* Crie a rota principal, renderizando a view index.ejs;
* Crie a rota de cadastro, renderizando a view cadastro.ejs;
* Crie a rota detalhes, renderizando a view detalhes.ejs;
* Crie uma const chamada pokedex que será um array;
* Insira 3 objetos nesse array, cada objeto deve conter essas informações dos pokemons:
> Número;
> 
> Nome;
> 
> Tipo;
> 
> Imagem;
> 
> Descrição;
> 
> Altura;
> 
> Peso;
> 
> Categoria;
> 
> Habilidade;
> 
* Ao renderizar a view index.ejs, envie esse array como variável;
* Estilize toda a view index.ejs para receber os dados do array, porém só adicione o nome, imagem e tipo do pokemon. Reserve os outros dados para a rota detalhes.
* Crie um menu para navegar entre as rotas

## Projeto Criado com Node e Expres

Para Rodar o Projeto é Necessário Baixar as Dependencias:

>[!npm i nodemon --save-dev]
>
>[!npm i express --save]
>
>[!npm i --save ejs]


Link do Projeto no Heroku: https://poke-thiago.herokuapp.com/

Site que Usei de Referencia Para Cadastrar Novos Pokemons: https://www.pokemon.com/us/pokedex/ 
