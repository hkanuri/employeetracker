const fs = require('mysql');
const inquirer = require("inquirer");
// DB cinnection
var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
    // Your port; if not 3306
    port: 3306,
    // Your username
    user: "root",
    // Your password
    password: "password",
    database: "employee_tracker_db"
});
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    viewDepartments();
});
function viewDepartments() {
    inquirer.prompt({
        type: "list",
        name: "path",
        message: "Make a choice from below",
        choices: ['Add Dept', 'Add employe Role', 'Add an employe', 'upate employee role ', 'View dept', 'View employees', 'view roles']
    })
        .then(function (answer) {
            console.log(answer.path);
            // (answer.path === 'BID') ? bidItem() : postItem();
            switch (answer.path) {
                case 'Add Dept':
                    console.log('department');//function instead of cl
                    addDept();
                    break;
                case 'Add Employe Role':
                    console.log('emplopyee ro');
                    break;
                case 'View Dept':
                    console.log('Departments list');
                    break;
                case 'View Employee':
                    console.log('Employee list');
                    break;
                case 'View Roles':
                    console.log('Roles list');
                    break;
                default:
                    break;
            }
        })
    };

function addDept() {
    // user enetr texts  to create a dept and it inserts into DB
    inquirer.prompt({
        type: 'input',
        name: 'choice',
        message: 'Add a dept'
    }).then(function (answer) {
        connection.query("INSERT  INTO department SET ? ",
            { name: answer.choice },
            function (err, res) {
                if (err) throw err
                console.log("Your dept has been entered into DB")
                viewDepartments();
            })
    })
};

function addEmployeRole() {
    inquirer.prompt({
        type: 'input',
        name: 'choice',
        message: 'Add a Role'
    }).then(function (answer) {
        connection.query("INSERT INTO roles SET ?",
            { name: answer.choice },
            function (err, res) {
                if (err) throw err
                console.log("Your role has been entered into DB")
                viewDepartments();
            })
    })
};

function ViewDept() {
    connection.query("SELECT * FROM department", function (err, res) {
        if (err) throw err;
        console.log(res);
        viewDepartments();
        connection.end();
    });
};

function viewEmployee() {
    connection.query("SELECT * FROM employee", function (err, res) {
        if (err) throw err;
        console.log(res);
        viewDepartments();
        connection.end();
    });
};

function viewRoles() {
    connection.query("SELECT * FROM roles", function (err, res) {
        if (err) throw err;
        console.log(res);
        viewDepartments();
        connection.end();
    });
};



function addEmplyoee() { };
function UpdateEmployee() { };


