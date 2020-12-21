import mongoose from 'mongoose';
import chalk from 'chalk';

const connectToDatabase = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(
      chalk.black.bgGreen(
        `Connected to MongoDB on ${connect.connection.host}`
      )
    );
  } catch (error) {
    console.error(chalk.white.bgRed(error.message));
    process.exit(1);
  }
};

export default connectToDatabase;
