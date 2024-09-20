import { model, Schema } from 'mongoose';
import { OrderDocument } from '../types/order';

const orderSchema = new Schema(
  {
    usario: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    itensPedido: [
      {
        nome: {
          type: String,
          required: true,
        },
        qtd: {
          type: Number,
          required: true,
        },
        imagem: {
          type: String,
          required: true,
        },
        preco: {
          type: Number,
          required: true,
        },
        produto: {
          type: Schema.Types.ObjectId,
          required: true,
          ref: 'Product',
        },
      },
    ],
    enderecoParaEnvio: {
      endereco: {
        type: String,
        required: true,
      },
      cidade: {
        type: String,
        required: true,
      },
      codigoPostal: {
        type: String,
        required: true,
      },
      pais: {
        type: String,
        required: true,
      },
    },
    metodoPagamento: {
      type: String,
      required: true,
    },
    resultadoPagamento: {
      id: {
        type: String,
      },
      status: {
        type: String,
      },
      horaAtualização: {
        type: String,
      },
      enderecoEmail: {
        type: String,
      },
    },
    itensPreco: {
      type: Number,
      required: true,
      default: 0.0,
    },
    impostoPreco: {
      type: Number,
      required: true,
      default: 0.0,
    },
    fretePreco: {
      type: Number,
      required: true,
      default: 0.0,
    },
    precoTotal: {
      type: Number,
      required: true,
      default: 0.0,
    },
    estaPago: {
      type: Boolean,
      required: true,
      default: false,
    },
    pagoEm: {
      type: Date,
    },
    estaEntregue: {
      type: Boolean,
      required: true,
      default: false,
    },
    entregueEm: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

export const Order = model<OrderDocument>("Order", orderSchema);