import express, { Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";

const PORT = process.env.PORT || 4000;

const app = express();
app.use(cors());

app.use(express.json());

app.use(morgan("dev"));

app.get("/", (req: Request, res: Response) => {
	res.send("A API ESTÁ EM EXECUÇÃO...");
});

app.listen(PORT, () => {
	console.log(`Servidor em execução no modo ${process.env.NODE_ENV} na porta ${PORT}`);
});