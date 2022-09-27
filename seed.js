import dotenv from 'dotenv';
import connectDataBase from './config/mongodb.js';
import products from './data/products.js';
import users from './data/users.js';
import Product from './models/Product.js';
import User from './models/User.js';

dotenv.config();

const seed = async () => {
  try {
    await connectDataBase();

    await User.deleteMany();
    await User.insertMany(users);

    await Product.deleteMany();
    await Product.insertMany(products);

    console.log('Seed success');
    process.exit(0);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

seed();
