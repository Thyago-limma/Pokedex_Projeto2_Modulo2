require("dotenv").config();
const express = require('express'); //Importando o Módulo Express
const app = express(); //Criando uma Váriavel App e Chamando Todas as Funções do Express Nela
const path = require('path'); //Adiciona Arquivos Estáticos

const port = process.env.PORT || 3000; //Rodando na Porta do Servidor
let message = ''; //Mensagem de Cadastro com Sucesso do Usuário

const pokedex = [
	{
		id: 1,
		numero: 1,
		nome: 'Bulbasaur',
		tipo: 'Grama',
		imagem: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
		descricao:
			'Há uma semente de planta em suas costas desde o dia em que este Pokémon nasce. A semente lentamente cresce.',
		altura: "0.7m",
		peso: "6.9kg",
		categoria: 'Semente',
		habilidade: 'Overgrow',
	},
	{
		id: 2,
		numero: 2,
		nome: 'Ivysaur',
		tipo: 'Grama',
		imagem: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png',
		descricao:
			'Quando a lâmpada em suas costas cresce grande, parece perder a capacidade de ficar em suas patas traseiras.',
		altura: `1.0m`,
		peso: '13.0kg',
		categoria: 'Semente',
		habilidade: 'Overgrow',
	},
	{
		id: 3,
		numero: 3,
		nome: 'Venusaur',
		tipo: 'Grama',
		imagem: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png',
		descricao:
			'Sua planta floresce quando está absorvendo energia solar. Ele fica em movimento para buscar a luz solar.',
		altura: `2.0m`,
		peso: '100kg',
		categoria: 'Semente',
		habilidade: 'Overgrow',
	},
];

app.set('view engine', 'ejs'); //Definindo o Motor de visualização
app.use(express.static(path.join(__dirname, 'public'))); //Indicando diretorio dos arquivos estáticos
app.use(express.urlencoded());

app.get('/', (req, res) => {
	setTimeout(() => {
		message = '';
	}, 5000);

	res.render('index', { pokedex, message });
}); //Arquivo a ser renderizado dentro da views

app.get('/cadastro', (req, res) => {
	res.render('cadastro');
});

app.get('/detalhes/:id', (req, res) => {
	const id = +req.params.id;
	pokemon = pokedex.find((pokemon) => pokemon.id === id);
	res.render('detalhes', { pokemon });
});

app.post('/new', (req, res) => {
	const pokemon = req.body;
	pokemon.id = pokedex.length + 1;
	pokedex.push(pokemon);
	message = `Pokemon ${pokemon.nome} cadastrado com sucesso!`;
	res.redirect('/');
});

app.listen(port, () =>
	console.log(`Servidor rodando em http://localhost:${port}`)
); //Liga o servidor na porta definida