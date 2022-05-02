const connection = require("./credentials");
const inquirer = require("inquirer");



connection.connect(function (){
    runapp();
})

function runapp() {
    inquirer.prompt([
      {
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a new department",
          "Add a new role",
          "Add a new employee",
          "Exit"
        ]
      }])
      .then(function (answer) {
        switch (answer.action) {
          case "View all departments":
            viewDepartments();
            break;
          case "View all roles":
            viewAllRoles();
            break;
          case "View all employees":
            viewAllEmployees();
            break;
          case "Add a new department":
            addAllDepartments();
            break;
          case "Add a new role":
            addRole();
            break;
          case "Add a new employee":
            addEmployee();
            break;
          case "exit":
            connection.end();
            break;
        }
      });
  };


  
function viewDepartments () {
    connection.query("SELECT * FROM departments", function(err, res){
        if (err) throw err 
        console.table(res)
        runapp();
    });
};

const connection = require("./credentials");
const inquirer = require("inquirer");



connection.connect(function (){
    runapp();
})



function runapp() {
    inquirer.prompt([
      {
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a new department",
          "Add a new role",
          "Add a new employee",
          "Exit"
        ]
      }])
      .then(function (answer) {
        switch (answer.action) {
          case "View all departments":
            viewDepartments();
            break;
          case "View all roles":
            viewAllRoles();
            break;
          case "View all employees":
            viewAllEmployees();
            break;
          case "Add a new department":
            addAllDepartments();
            break;
          case "Add a new role":
            addRole();
            break;
          case "Add a new employee":
            addEmployee();
            break;
          case "exit":
            connection.end();
            break;
        }
      });
  };
  
  
function viewDepartments () {
    connection.query("SELECT * FROM departments", function(err, res){
        if (err) throw err 
        console.table(res)
        runapp();
    });
};

function viewAllRoles () {
    connection.query("SELECT * FROM roles", function(err, res){
        if (err) throw err 
        console.table(res)
        runapp();
    });
};

function addRole() {
  connection.query("SELECT * FROM departments", function (err, res) {
    inquirer.prompt([
      {
        name: "title",
        type: "input",
        message: "What is the new role?"
      },
      {
        name: "salary", 
        type: "number",
        message: "What is the new salary?",
      },
      {
        name: "departmentID",
        type: "rawlist",
        message: "Choose which department this new role belongs to.",
        choice: res.map(item => item.name)
      }

    ]) .then(function(answer) {
      const selectDepartment = res.find(deptparment => deptparment.name === answer.deparmentID);
        connection.query("INSERT INTO roles SET ?",
          {
            title: answer.title,
            salary: answer.salary,
            department_id: selectDepartment
          },
          function (err, res) {
            if (err) throw err;
            console.log("Succesfully added new role!");
            start();
          }
        );
    });
  })
};

function addEmployee() {
  connection.query("SELECT * FROM deptparments", function (err, res) {
    if (err) throw err;
    inquirer.prompt([
      {
        name: "title",
        type: "input",
        message: "What is the name of the new employee?",
      },
      {
        name: "departmentID",
        type: "rawlist",
        message: "Choose which department this new role belongs to.",
        choice: res.map(item => item.name)
      }

    ]) .then(function(answer) {
      const selectDepartment = res.find(deptparment => deptparment.name === answer.deparmentID);
        connection.query("INSERT INTO roles SET ?",
          {
            title: answer.title,
            salary: answer.salary,
            department_id: selectDepartment
          },
          function (err, res) {
            if (err) throw err;
            console.log("Succesfully added new role!");
            start();
          }
        );
    });
  })
};