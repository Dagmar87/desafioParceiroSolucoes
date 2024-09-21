import { Product } from "../../types/product";

const products: Product[] = [
	{
		nome: "Nintendo Switch OLED",
		imagem: "/uploads/nintendoSwitchOled.jpg",
		descricao: "Inovador e versátil, o Nintendo Switch OLED veio para trazer ainda mais imersão à sua experiência ao jogar. Com a tela de 7 polegadas OLED e o áudio aprimorado, você pode sentir as cores vibrarem e os sons ressoarem. Desenvolvido para ser um console portátil e doméstico, o Nintendo Switch se desdobra em 3 modos: modo TV, modo semiportátil e modo portátil. Seus controles, os Joy-Con, também são adaptáveis e podem ser compartilhados, ou explorados da melhor forma, quando você estiver jogando sozinho. A bateria do video game possui entre 4.5 horas e 9 horas de autonomia, permitindo que você aproveite cada jogo ao máximo, podendo ser carregada enquanto joga. Além disso, o armazenamento extenso, de 64GB, permite que você não limite sua biblioteca de games e experiencia o que desejar. Estão inclusos na caixa do seu Nintendo Switch: dois Joy-Con (esquerdo e direito), um suporte para Joy-Con, um console Nintendo Switch, uma base, duas alças Joy-Con e um adaptador CA.",
		marca: "Nintendo",
		categoria: "Console",
		preco: 2500.00,
		contagemEmEstoque: 50,
		avaliacao: 9.0,
		numReviews: 300,
	},
	{
		nome: "Persona 5 Royal",
		imagem: "/uploads/persona5Royal.jpg",
		descricao: "Prepare-se para a aclamada experiência de RPG com esta edição definitiva de Persona 5 Royal, incluindo diversos conteúdos adicionais! Após ser obrigado a se transferir para um colégio em Tóquio, o protagonista tem um sonho estranho. 'Você é um prisioneiro do destino. Em breve, a ruína chegará para você.' Para se 'reabilitar', ele deve usar a máscara de um Phantom Thief para salvar os outros dos desejos distorcidos.",
		marca: "Sega",
		categoria: "Jogo",
		preco: 330.00,
		contagemEmEstoque: 15,
		avaliacao: 9.5,
		numReviews: 1500,
	},
	{
		nome: "Case Para Nintendo Switch Oled",
		imagem: "/uploads/nintendoSwitchOledCase.jpg",
		descricao: "Capa Protetora Para Nintendo Switch Oled Com 6 Compartimentos Bolsa Perfeita Para Viagens Estojo Bag de Proteção e Acessórios Para Nintendo Switch Oled.",
		marca: "4Leader",
		categoria: "Acessórios",
		preco: 87.00,
		contagemEmEstoque: 35,
		avaliacao: 7.5,
		numReviews: 40,
	}
]

export default products;