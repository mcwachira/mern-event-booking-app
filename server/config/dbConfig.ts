import mongoose, {type ConnectOptions } from 'mongoose';
import chalk from 'chalk';

const connectDb = async (): Promise<void> => {
    console.log(process.env.MONGO_URI);
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI as string, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: 'Events254',
        } as ConnectOptions);

        console.log(chalk.blue(`MongoDB connected: ${connect.connection.host}`));
    } catch (error: any) {
        console.log(chalk.red.underline(`Error: ${error.message}`));
        process.exit(1);
    }
}

export default connectDb;
