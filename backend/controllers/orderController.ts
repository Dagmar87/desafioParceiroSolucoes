import asyncHandler from "express-async-handler";
import { Order } from "../models/";
import { Request, Response } from "../types";

const addOrderItens = asyncHandler(async (req: Request, res: Response) => {
	const {
		itensPedido,
		enderecoParaEnvio,
		metodoPagamento,
		itensPreco,
		impostoPreco,
		fretePreco,
		precoTotal,
	} = req.body;

	if(itensPedido && itensPedido.length === 0) {
		res.status(400);
		throw new Error("Nenhum item de pedido");
		return;
	} else {
		const order = new Order({
      itensPedido,
			usario: req.usario?._id,
      enderecoParaEnvio,
      metodoPagamento,
      itensPreco,
      impostoPreco,
      fretePreco,
      precoTotal,
    });

		const createOrder = await order.save();

		res.status(201).json(createOrder);
	}
});

const getOrderById = asyncHandler(async (req: Request, res: Response) => {
	const order = await Order.findById(req.params.id).populate(
		"usario",
		"nome email"
	);

	if(order) {
		res.json(order);
	} else {
		res.status(404);
		throw new Error("Pedido não encontrado");
	}
});

const updateOrderToPaid = asyncHandler(async (req: Request, res: Response) => {
	const order = await Order.findById(req.params.id);

	if(order) {
		order.estaPago = true;
		order.pagoEm = Date.now();
		order.resultadoPagamento = {
			id: req.body.id,
			status: req.body.status,
			horaAtualização: req.body.horaAtualização,
			enderecoEmail: req.body.enderecoEmail,
		};

		const updatedOrder = await order.save();
		res.json(updatedOrder);
	} else {
		res.status(404);
		throw new Error("Pedido não encontrado");
	}
});

const updateOrderToDelivered = asyncHandler(
	async (req: Request, res: Response) => {
		const order = await Order.findById(req.params.id);

		if (order) {
      order.estaEntregue = true;
      order.entregueEm = Date.now();

      const updatedOrder = await order.save();
      res.json(updatedOrder);
    } else {
      res.status(404);
      throw new Error('Pedido não encontrado');
    }
	}
);

const getMyOrders = asyncHandler(async (req: Request, res: Response) => {
	if(!req.usario) throw new Error("Usuário não encontrado");

	const orders = await Order.find({ usario: req.usario._id });

	if (orders) {
    res.json(orders);
  } else {
    res.status(404);
    throw new Error('Pedido não encontrado');
  }
});

const getOrders = asyncHandler(async (req: Request, res: Response) => {
	const orders = await Order.find({}).populate("usario", "id nome");

	if (orders) {
    res.json(orders);
  } else {
    res.status(404);
    throw new Error('Pedido não encontrado');
  }
});

export {
	addOrderItens,
	getOrderById,
	updateOrderToPaid,
	updateOrderToDelivered,
	getMyOrders,
	getOrders,
};