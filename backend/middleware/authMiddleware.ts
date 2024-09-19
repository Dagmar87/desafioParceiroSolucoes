import { NextFunction, Request, Response } from "../types/express";
import jwt, { JwtPayload, Secret } from "jsonwebtoken";
import { User } from "../models/";
import asyncHandler from "express-async-handler";

const protect = asyncHandler(
	async (req: Request, res: Response, next: NextFunction) => {
		let token;

		const secret: Secret = process.env.JWT_SECRET!;

		if(
			req.headers.authorization &&
			req.headers.authorization.startsWith("Bearer")
		) {
			try {
				token = req.headers.authorization.split(" ")[1];

				const decoded = jwt.verify(token, secret) as JwtPayload;

				const user = await User.findById(decoded.id).select("-password");

				if(!user) {
					res.status(401);
					throw new Error("Usuário não encontrado");
				}

				req.usario = {
					_id: user._id as string,
					nome: user.nome,
					email: user.email,
					isAdmin: user.isAdmin,
				};

				next();
			} catch (error) {
				console.error(error);
				res.status(401);
				throw new Error("Não autorizado, token falhou");
			}
		}

		if(!token) {
			res.status(401);
			throw new Error("Não autorizado, sem token");
		}
	}
);

const admin = (req: Request, res: Response, next: NextFunction) => {
	if (req.usario && req.usario.isAdmin) {
		next();		
	} else {
		res.status(401);
		throw new Error("Não autorizado como administrador");
	}
};

export { protect, admin };