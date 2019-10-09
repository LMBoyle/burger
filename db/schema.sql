-- Drops the database if it already exists --
DROP DATABASE IF EXISTS burgers_db;

-- Create the database --
CREATE DATABASE burgers_db;

-- Specify database for use --
USE burgers_db;

-- Create a table --
CREATE TABLE burgers (
  id int NOT NULL AUTO_INCREMENT,
  burgerName varchar(255) NOT NULL,
  served BOOLEAN NOT NULL default false,
  numServed INTEGER,
  devoured BOOLEAN NOT NULL default false,
  numDevoured INTEGER,
  PRIMARY KEY (id)
);