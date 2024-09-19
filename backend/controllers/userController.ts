import { Request, Response } from "../types/express";
import asyncHandler from "express-async-handler";
import { User } from "../models/";
import generateToken from "../utils/generateToken";
import { UserDocument } from "../types";

const authUser = asyncHandler(async (req: Request, res: Response) => {
	const { email, password } = req.body as { email: string; password: string };

	const user = await User.findOne({ email }) as UserDocument;

	if (user && (await user.matchPassword(password))) {
		res.json({
			_id: user.id,
			nome: user.nome,
			email: user.email,
			isAdmin: user.isAdmin,
			token: generateToken(user._id as string),
		});
	} else {
		res.status(401);
		throw new Error("E-mail ou senha inválidos");
	}
});

const registerUser = asyncHandler(async (req: Request, res: Response) => {
	const { nome, email, password } = req.body as {
		nome: string;
		email: string;
		password: string;
	};

	const userExists = await User.findOne({ email }) as UserDocument;

	if(userExists) {
		res.status(400);
		throw new Error("O usuário já existe");
	}

	const user = await User.create({
		nome,
		email,
		password,
	});

	if(user) {
		res.status(201).json({
			_id: user._id,
			nome: user.nome,
			email: user.email,
			isAdmin: user.isAdmin,
			token: generateToken(user._id as string),
		});
	} else {
		res.status(400);
		throw new Error("Dados de usuário inválidos");
	}
});

export {
	authUser,
	registerUser,
};