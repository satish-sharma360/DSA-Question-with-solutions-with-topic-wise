SHOW databases;

CREATE DATABASE if not exists dummy;

SELECT DATABASE();

USE dummy;

CREATE TABLE employee(
	EmpId		INT auto_increment,
	firstName	VARCHAR(20) NOT NULL,
    lastName	VARCHAR(20) NOT NULL,
    age			INT	NOT NULL,
    salary		INT NOT NULL,
    location	VARCHAR(20) NOT NULL,
    PRIMARY KEY(EmpId)
);

SHOW tables;
DROP table employee;
DESC employee;

INSERT INTO employee VALUES(NULL,'Kuldeep', 'Sharma' , 20 , 10000, 'Delhi');
INSERT INTO employee VALUES(NULL,'Nitish', 'Sharma' , 25, 20000, 'Delhi');
INSERT INTO employee VALUES(NULL,'Rohit', 'Bhatiya' , 22 , 30000, 'Delhi'); 
INSERT INTO employee VALUES(NULL,'Kuldeep', 'Singh' , 29 , 100000, 'Delhi'); 
INSERT INTO employee (firstName , lastName , age , salary , Location) VALUES('Rahul','Sharma' , 20 , 10000, 'Delhi');


CREATE TABLE Course(
	CourseId	INT AUTO_INCREMENT,
    CourseName	VARCHAR(50) NOT NULL,
    CourseDuration_months	INT NOT NULL,
    Coursefee	INT NOT NULL,
    
     PRIMARY KEY(CourseId)
);
INSERT INTO Course VALUES(NULL , 'DSA FOR INTERVIEW PREP', 2, 4999);
INSERT INTO Course VALUES(NULL , 'SQL FOR BASIC', 2, 2999);
INSERT INTO Course VALUES(NULL , 'DATA ANALYSIS', 2, 999);
DESC Course;
SELECT * FROM Course;

CREATE TABLE Learners(
	Learner_id	INT AUTO_INCREMENT PRIMARY KEY,
    LearnerFirstName	VARCHAR(50) NOT NULL,
    LearnerLastName	VARCHAR(50) NOT NULL,
    LearnerPhoneNo	VARCHAR(50) NOT NULL,
    LearnerEmailId	VARCHAR(50) NOT NULL,
    LearnerEnrollmentDate  timestamp NOT NULL,
    SelectedCourses  INT NOT NULL,
    YearOfExperience  INT,
    LearnerCompany  VARCHAR(50),
    SourceOfJoining  VARCHAR(50) NOT NULL,
	Batch_start_Date	timestamp NOT NULL,
	Location	VARCHAR(50) NOT NULL,
    
    UNIQUE KEY(LearnerEmailId),
    FOREIGN KEY(SelectedCourses) REFERENCES Course(CourseId)
);

INSERT INTO Learners VALUES
(NULL, 'Rahul', 'Sharma', '9876543210', 'rahul.sharma@gmail.com',
 '2024-01-10', 1, 2, 'TCS', 'LinkedIn',
 '2024-02-01', 'Delhi'),

(NULL, 'Ankit', 'Verma', '9123456789', 'ankit.verma@gmail.com',
 '2024-01-15', 2, 4, 'Infosys', 'Referral',
 '2024-02-05', 'Bangalore'),

(NULL, 'Priya', 'Singh', '9988776655', 'priya.singh@gmail.com',
 '2024-01-20', 1, NULL, NULL, 'YouTube',
 '2024-02-10', 'Mumbai'),

(NULL, 'Neha', 'Gupta', '9090909090', 'neha.gupta@gmail.com',
 '2024-01-25', 3, 1, 'Wipro', 'Instagram',
 '2024-02-15', 'Pune'),

(NULL, 'Amit', 'Kumar', '9012345678', 'amit.kumar@gmail.com',
 '2024-02-01', 2, 6, 'Accenture', 'Website',
 '2024-02-20', 'Noida'),

(NULL, 'Sneha', 'Patel', '9345612789', 'sneha.patel@gmail.com',
 '2024-02-05', 1, NULL, NULL, 'Friend',
 '2024-02-25', 'Ahmedabad');

SELECT COUNT(*) FROM Learners;
DESC Learners;
SELECT * FROM Learners;

#-- Data Analysis [Employee , Course , Learner]
SELECT * FROM employee WHERE salary >= 10000 ORDER BY salary DESC;
SELECT * FROM employee ORDER BY salary DESC LIMIT 1;
SELECT MAX(salary) FROM employee;
SELECT * FROM employee WHERE salary = (
	SELECT MAX(salary) FROM employee
);

SELECT * FROM employee WHERE age >= 25 ORDER BY salary DESC LIMIT 1;

SELECT COUNT(Learner_id) FROM LearnerS WHERE SelectedCourses = 2;

SELECT COUNT(*) FROM Learners WHERE LearnerEnrollmentDate LIKE '%-01-05';


UPDATE Learners SET YearOfExperience = 1,
   LearnerCompany = 'Amazone'
WHERE Learner_id = 3;

SELECT COUNT(DISTINCT LEARNERCOMPANY) FROM LEARNERS