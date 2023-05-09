CREATE DATABASE ideabox_be;
USE ideabox_be;

CREATE TABLE ideas (
  id integer PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  created TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO ideas (title, content)
VALUES 
('dummy title 1', 'dummy description 1');
