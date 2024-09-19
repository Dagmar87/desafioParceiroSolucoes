import { Request as Req, Response as Res, NextFunction as Next } from "express";

interface User {
	usario?: {
		_id: string;
		nome: string;
		email: string;
		isAdmin?: boolean;
	};
}

export type Request = Req & User;
export type Response = Res & User;
export type NextFunction = Next;