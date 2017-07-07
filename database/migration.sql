
DROP DATABASE IF EXISTS superhero_db CASCADE;
CREATE DATABASE superhero_db;


  DROP TABLE IF EXISTS  users CASCADE;

  CREATE TABLE users (
    id BIGSERIAL PRIMARY KEY,
    f_name VARCHAR(40) NOT NULL,
    l_name VARCHAR(40)  NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    photo VARCHAR(255)
  );

  INSERT INTO users (
  f_name,
  l_name,
  email,
  password,
  photo
) VALUES
('Troy David', 'Cook', 'troydavidcook@gmail.com', 'p@ssword', 'http://imgur.com/CMUXYaJ');


  DROP TABLE IF EXISTS characters CASCADE;

  CREATE TABLE characters (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(100),
    description VARCHAR(255),
    thumbnail VARCHAR(255),
    comics VARCHAR(50),   --comes back as an array..?
    user_id INT REFERENCES users(id)
  );

  DROP TABLE IF EXISTS  comics CASCADE;

  CREATE TABLE comics (
    id BIGSERIAL PRIMARY KEY,
    title VARCHAR(25) NOT NULL,
    description VARCHAR(25)  NOT NULL,
    format VARCHAR(255) NOT NULL,
    series VARCHAR(255),
    thumbnail VARCHAR(255) NOT NULL,
    creators VARCHAR(255) NOT NULL,
    character_id INT REFERENCES characters(id)
  );


  DROP TABLE IF EXISTS favorites CASCADE;

  CREATE TABLE favorites (
    id BIGSERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    character_id INT REFERENCES characters(id),
    comic_id INT REFERENCES comics(id)
);
