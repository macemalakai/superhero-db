const bcrypt = require("bcrypt");

const db = require("../config/database");

const User = {}

User.findByEmail = (email) => {
  return db.oneOrNone(`
      SELECT * fROM users
      WHERE email = $1
  `, [email]);
}

User.create = (user) => {
  user.password = bcrypt.hashSync(user.password, 10);
  return db.one(`
    INSERT INTO users
    (f_name, l_name, email, password)
    VALUES ($1, $2, $3, $4)
    RETURNING *
  `) [user.f_name, user.l_name, user.email, user.password];
}

module.exports = User;
