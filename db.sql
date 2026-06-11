CREATE DATABASE smartcity;

USE smartcity;

CREATE TABLE dati (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tipo VARCHAR(50),
    valore INT,
    data TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);