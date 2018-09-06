CREATE TABLE post (
  ID int NOT NULL AUTO_INCREMENT,
  poster_ip TEXT(20) NOT NULL,
  content TEXT(2000) CHARACTER SET latin1 NOT NULL,
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (ID)
);

INSERT INTO post (poster_ip, content) 
VALUES ('127.0.0.1', "Let's see if this new database works");