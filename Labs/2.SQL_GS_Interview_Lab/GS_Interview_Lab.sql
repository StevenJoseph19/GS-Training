-- CREATE a database GS_Interview_Lab
-- Database Setup
-- Run this script to create the environment.

-- Schema Creation
CREATE TABLE Division (id INT PRIMARY KEY, division_name VARCHAR(50));
CREATE TABLE Employee (id INT PRIMARY KEY, name VARCHAR(50), division_id INT, salary INT, manager_id INT, FOREIGN KEY (division_id) REFERENCES Division(id));
CREATE TABLE Report (id INT PRIMARY KEY, title VARCHAR(100), empID INT, submission_date DATE, FOREIGN KEY (empID) REFERENCES Employee(id));
CREATE TABLE Advisor (id INT PRIMARY KEY, name VARCHAR(50), dept_id INT);
CREATE TABLE Student (id INT PRIMARY KEY, name VARCHAR(50), advisor_id INT, gpa DECIMAL(3,2), FOREIGN KEY (advisor_id) REFERENCES Advisor(id));

-- Data Insertion
INSERT INTO Division VALUES (1, 'Engineering'), (2, 'Compliance'), (3, 'Asset Management'), (4, 'Human Resources');
INSERT INTO Employee VALUES (101, 'Alice', 1, 150000, NULL), (102, 'Bob', 1, 120000, 101), (103, 'Charlie', 2, 110000, 101), (104, 'David', 1, 120000, 102), (105, 'Eve', 3, 130000, NULL), (106, 'Frank', 3, 130000, 105);
INSERT INTO Report VALUES (1, 'Q1 Risk', 103, '2023-01-10'), (2, 'Q2 Risk', 103, '2023-04-10'), (3, 'Code Audit', 101, '2023-02-15'), (4, 'Market Analysis', 105, '2023-03-01'), (5, 'Infrastructure', 101, '2023-05-12'), (6, 'Compliance Audit', 103, '2023-06-20');
INSERT INTO Advisor VALUES (1, 'Dr. Smith', 1), (2, 'Dr. Jones', 1), (3, 'Dr. Taylor', 2);
INSERT INTO Student VALUES (1, 'John', 1, 3.8), (2, 'Jane', 1, 3.9), (3, 'Mark', 2, 3.5), (4, 'Lucy', 3, 3.2), (5, 'Zane', NULL, 4.0);