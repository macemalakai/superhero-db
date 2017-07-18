const bcrypt = require("bcrypt");

const db = require("../config/database");

const User = {}


User.find = () => {
  return db.manyOrNone(`
    SELECT * FROM users;
    `)
}

User.findByEmail = (email) => {
  return db.oneOrNone(`
      SELECT * fROM users
      WHERE email = $1
  `, email);
}

User.findByHeroId = (heroId) => {
  return db.oneOrNone(`
      SELECT * fROM favorites
      WHERE hero_id = $1

  `, [hero_id]);
}

User.create = (user) => {
  // User info is already created at this point, via the body
  password = bcrypt.hashSync(user.password, 10);
  return db.one(`
    INSERT INTO users
    (f_name, l_name, email, password, photo)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
  `) [user.f_name, user.l_name, user.email, user.password, user.photo];
}



module.exports = User;
