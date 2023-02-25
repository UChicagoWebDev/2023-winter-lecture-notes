-- create table posts_and_comments (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   title VARCHAR(255),
--   slug VARCHAR(30),
--   body TEXT,
--   author VARCHAR(30),
--   post_id INT
-- );

-- migrate the posts first

insert into posts_and_comments
    (id, slug, title, body)
    select id, slug, title, body from posts;

-- then migrate the comments

insert into posts_and_comments
    (post_id, body, author)
    select post_id, body, author from comments;
