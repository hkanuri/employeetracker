DROP DATABASE IF EXISTS employee_tracker_db;
CREATE DATABASE employee_tracker_db;

use employee_tracker_db;

CREATE TABLE department (
id int auto_increment,
name varchar(50) not null,
PRIMARY KEY(id)
);

CREATE TABLE roles (
id int auto_increment,
title varchar(100) not null,
salary decimal not null,
department_id int not null,
PRIMARY KEY(id)

);

CREATE TABLE employee (
id int auto_increment,
first_name varchar(100) not null,
last_name varchar(100) not null,
role_id int not null,
PRIMARY KEY(id)

);

-- Inserting a set of records in department table
INSERT INTO department (name) VALUES ("Technology");
INSERT INTO department (name) VALUES ("Quality_assurance");
INSERT INTO department (name) VALUES ("Marketing");
INSERT INTO department (name) VALUES ("Finance");
INSERT INTO department (name) VALUES ("Human_resources");

-- Inserting a set of records in role table
INSERT INTO roles (title, salary, department_id)  VALUES ("Developer_lead" , 120000, 1);
INSERT INTO roles (title, salary, department_id)   VALUES ("QA_lead", 100000, 2);
INSERT INTO roles (title, salary, department_id)   VALUES ("Marketing_lead", 90000, 3);
INSERT INTO roles (title, salary, department_id)   VALUES ("Finance_lead", 100000, 4);
INSERT INTO roles (title, salary, department_id)   VALUES ("HR_lead", 80000, 5);

-- Inserting a set of records in employee table
INSERT INTO employee (first_name, last_name, role_id) VALUES ("John", "doe", 1);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Hemanth", "Kanuri", 2);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Drew", "brees", 3);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("sam", "apple", 4);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Rocky", "ronald", 5);

select * FROM department;
select * FROM roles;
select * FROM employee;






