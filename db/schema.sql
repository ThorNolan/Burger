-- this schema can be reused to create a new database and table --

CREATE DATABASE butters_db;
USE butters_db;

CREATE TABLE butters
(
	id int NOT NULL AUTO_INCREMENT,
	butter_name varchar(255) NOT NULL,
	passed BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);