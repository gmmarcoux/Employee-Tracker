USE employeeDB;

INSERT INTO departments(name)
VALUES
("Engineering"), ("HR"), ("Legal"), ("Management");

INSERT INTO roles(title, salary, department_id)
VALUES 
("Engineer", 80000, 1), ("HR Rep", 65000, 2), ("Lawyer", 85000, 3), ("Team Leader", 65000, 4);

INSERT INTO employees(first_name, last_name, role_id)
VALUES
("Ron", "Swanson", 1), ("Leslie", "Knope", 2), ("Anne", "Perkins", 3), ("Peter", "Parker", 4);

