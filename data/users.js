import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'admin',
    email: 'admin@email.com',
    password: bcrypt.hashSync('password', 10),
    isAdmin: true,
  },
  {
    name: 'user',
    email: 'user@email.com',
    password: bcrypt.hashSync('password', 10),
  },
];

export default users;
