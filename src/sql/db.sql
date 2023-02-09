CREATE BATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employee (
  id INT(15) NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) DEFAULT NULL,
  salary DECIMAL(10, 2) DEFAULT NULL,
  PRIMARY KEY (id)
);

DESCRIBE employee;

INSERT INTO employee VALUES
(1,'Joe', 1000),
(2, 'Henry', 2000),
(3, 'Sam', 2500),
(4, 'Max', 1500);
