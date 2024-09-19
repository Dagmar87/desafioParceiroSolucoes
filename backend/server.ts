import express, { Express, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./config/db";

import userRoutes from "./routes/userRoutes";

const PORT = process.env.PORT || 4000;
const app: Express = express();

app.use(cors());
app.use(express.json());

app.use(morgan("dev"));
dotenv.config();

connectDB();

app.get("/", (req: Request, res: Response) => {
	res.send("A API ESTÁ EM EXECUÇÃO...");
});

app.use("/api/users/", userRoutes);

app.listen(PORT, () => {
	console.log(`Servidor em execução no modo ${process.env.NODE_ENV} na porta ${PORT}`);
});