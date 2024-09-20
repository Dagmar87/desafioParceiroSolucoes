import { model, Schema } from "mongoose";
import { ProductDocument } from "../types";

const reviewSchema = new Schema (
	{
		usario: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},
		nome: {
			type: String,
			required: true,
		},
		avaliacao: {
			type: Number,
			required: true,
		},
		comentario: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

const productSchema = new Schema (
	{
		usario: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},
		nome: {
			type: String,
			required: true,
		},
		imagem: {
			type: String,
			required: true,
		},
		marca: {
			type: String,
			required: true,
		},
		categoria: {
			type: String,
			required: true,
		},
		descricao: {
			type: String,
			required: true,
		},
		reviews: [reviewSchema],
		avaliacao: {
			type: Number,
			required: true,
			default: 0,
		},
		numReviews: {
			type: Number,
			required: true,
			default: 0,
		},
		preco: {
			type: Number,
			required: true,
			default: 0,
		},
		contagemEmEstoque: {
			type: Number,
			required: true,
			default: 0,
		},
	},
	{
		timestamps: true,
	}
);

export const Product = model<ProductDocument>("Product", productSchema);