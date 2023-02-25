-- create table posts (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   slug VARCHAR(30) NOT NULL,
--   title VARCHAR(255) NOT NULL,
--   body TEXT
-- );
--
-- create table comments (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   post_id INT,
--   body TEXT,
--   author VARCHAR(30),
--   FOREIGN KEY(post_id) REFERENCES posts(id)
-- );

create table posts_and_comments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  slug VARCHAR(30),
  body TEXT,
  author VARCHAR(30),
  post_id INT
);
