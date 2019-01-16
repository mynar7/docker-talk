USE my_db;

DROP TABLE IF EXISTS cool_people;

CREATE TABLE cool_people (
    id INTEGER(7) NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    coolness INTEGER(4) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO cool_people (name, coolness)
VALUES ("Lee", 100), ("Ryan", 200), ("Eddie", 300);

