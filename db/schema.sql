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
  menu BOOLEAN NOT NULL default true,
  served BOOLEAN NOT NULL default false,
  devoured BOOLEAN NOT NULL default false,
  PRIMARY KEY (id)
);