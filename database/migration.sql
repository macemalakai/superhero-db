
DROP DATABASE IF EXISTS superhero_db CASCADE;
CREATE DATABASE superhero_db;
DROP TABLE IF EXISTS  comics CASCADE;

  DROP TABLE IF EXISTS  users CASCADE;

  CREATE TABLE users (
    id BIGSERIAL PRIMARY KEY,
    f_name VARCHAR(40) NOT NULL,
    l_name VARCHAR(40)  NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    photo VARCHAR(255),
    CONSTRAINT email_unique UNIQUE(email)
  );

  INSERT INTO users (
  f_name,
  l_name,
  email,
  password,
  photo
) VALUES
('Troy David', 'Cook', 'troydavidcook@gmail.com', 'p@ssword', 'http://imgur.com/CMUXYaJ');


  DROP TABLE IF EXISTS heroes CASCADE;

  CREATE TABLE heroes (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(100),
    description VARCHAR(255),
    thumbnail VARCHAR(255),
    comics VARCHAR(50),   --comes back as an array..?
    user_id INT REFERENCES users(id)
  );

  INSERT INTO heroes (
  name,
  description,
  thumbnail,
  comics
) VALUES
('Cyclops', 'This mutant is one of the originals and can shoot lasers out of his freaking eyes!! Laser beams!!!!', '', '');


  DROP TABLE IF EXISTS favorites CASCADE;

  CREATE TABLE favorites (
    id BIGSERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    character_id INT REFERENCES heroes(id),
    comic_id INT REFERENCES comics(id)
);
