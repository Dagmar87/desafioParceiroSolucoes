import mongoose from "mongoose";

const connectDB = async () => {
	if(process.env.MONGO_URI != undefined) {
		try {
			const conn = await mongoose.connect(process.env.MONGO_URI);
			console.log(`MongoDB conectado com sucesso a: ${conn.connection.host}`);
		} catch (error: any) {
			console.error(`Erro: ${error.message}`);
			process.exit(1);
		}
	}
};

export default connectDB;