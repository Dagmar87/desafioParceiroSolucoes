import { Model, Document } from "mongoose";

export interface Product {
	nome: string;
	imagem: string;
	descricao: string;
	marca: string;
	categoria: string;
	preco: number;
	contagemEmEstoque: number;
	avaliacao: number;
	numReviews: number;
}

export interface Review {
	usario: string;
	nome: string;
	avaliacao: number;
	comentario: string;
}

interface ProductInDatabase extends Product {
	usario: string;
	reviews: Review[];
}

export interface ProductDocument extends ProductInDatabase, Document {}

export interface ProductModel extends Model<ProductDocument> {}