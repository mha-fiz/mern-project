import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin',
    email: 'admin@admin.com',
    isAdmin: true,
    password: bcrypt.hashSync('admin', 12),
  },
  {
    name: 'Evan You',
    email: 'evan@user.com',
    isAdmin: true,
    password: bcrypt.hashSync('evanyou', 12),
  },
  {
    name: 'Dan Abramox',
    email: 'danabramov@user.com',
    isAdmin: true,
    password: bcrypt.hashSync('danabramov', 12),
  },
];

export default users;
