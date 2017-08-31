const db = require("../config/database");

const Hero = {}


Hero.find = () => {
  return db.manyOrNone(`
    SELECT * FROM heroes;
    `)
}


Hero.findByHeroId = (userId, heroId) => {
  return db.oneOrNone(`
      SELECT * fROM favorites
      WHERE hero_id = $1
      AND user_id = $2
  `, [hero_id,user_id]);
}

Hero.create = (hero) => {
  // Hero info is already created at this point, via the body
  return db.oneOrMany(`
    INSERT INTO heroes
    (name, description, thumbnail,)
    VALUES ($1, $2, $3,)
    RETURNING *
  `) [hero.name, hero.description, hero.thumbnail];
}



module.exports = Hero;
