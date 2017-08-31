Favorite.create = (favorite) => {
  // User info is already created at this point, via the body
  user.password = bcrypt.hashSync(user.password, 10);

  return db.oneOrMany(`
    INSERT INTO favorites
    (name, l_name, email, password, photo)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
  `, [user.f_name, user.l_name, user.email, user.password, user.photo]);
}
