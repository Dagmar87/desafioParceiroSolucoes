import { Model, Document } from "mongoose";
import { ProductDocument } from "./";

export interface OrderItems {
	nome: string;
	qtd: number;
	imagem: string;
	preco: number;
	produto: ProductDocument;
}

export interface ShippingAddress {
	endereco: string;
	cidade: string;
	codigoPostal: string;
	pais: string;
}

export interface PaymentResult {
	id: string;
	status: string;
	horaAtualização: string;
	enderecoEmail: string;
}

export interface Order {
	usario: string;
	itensPedido: OrderItems[];
	enderecoParaEnvio: ShippingAddress;
	metodoPagamento: string;
	resultadoPagamento: PaymentResult;
	itensPreco: number;
	impostoPreco: number;
	fretePreco: number;
	precoTotal: number;
	estaPago: boolean;
	pagoEm: number;
	estaEntregue: boolean;
	entregueEm: number;
}

export interface OrderDocument extends Order, Document {}

export interface OrderModel extends Model<OrderDocument> {}