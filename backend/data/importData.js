import users from './userDummy.js';
import Product from '../models/ProductModel.js';
import User from '../models/UserModel.js';
import Order from '../models/OrderModel.js';
import products from '../data/products.js';
import dotenv from 'dotenv';
import connectToDatabase from '../config/db.js';
import chalk from 'chalk';

dotenv.config();
connectToDatabase();

const importData = async () => {
  try {
    await Product.deleteMany();
    await User.deleteMany();
    await Order.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminObjectId = createdUsers[0]._id;

    const addAdmintoSampleProducts = products.map((product) => {
      return { ...product, user: adminObjectId };
    });

    await Product.insertMany(addAdmintoSampleProducts);
    console.log(
      chalk.black.bgYellow('Data successfully inserted to database')
    );
    process.exit();
  } catch (error) {
    console.error(chalk.black.bgRed(`error: ${error}`));
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Product.deleteMany();
    await User.deleteMany();
    await Order.deleteMany();
    console.log(chalk.black.bgCyan('Data destroyed'));
    process.exit();
  } catch (error) {
    console.error(chalk.black.bgRed(`error: ${error}`));
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
