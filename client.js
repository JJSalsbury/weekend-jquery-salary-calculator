
//Log'd to show javascript sourced.
console.log('js loaded!');
//Jquery call to document initiate starting output to DOM.
$(document).ready(handleReady);

//Created function to handle ready tasks.
function handleReady() {
    //Logged to show jquery sourced.
    console.log('jquery loaded!');
    //jquery call to button element. Should call functions on click.
    $('#submitBtn').on('click', handleClick);
    $('#submitBtn').on('click', addEmployee);
    //Jquery call to button element. Should call button and function on click.
    $('#employeeListId').on('click', '.deleteBtn', deleteEmployee);
}//end of handleReady

//Created handleClick function to manage my click events.
function handleClick() {
    console.log('clicked!');
}

//Created a global variable to collect employee input data in an array.
let ourEmployees = [];
//Created a global variable to collect all salary data in an. Set it's value to match the value used for demonstration in the DOM. 
let monthlySalary = 0;

//Created function to add user input into ourEmployees array.
function addEmployee() {
    //Console log'd to show function initiation in console.
    console.log('in addEmployee');
    //Declared variables for input items and used Jquery call to element id and set the value.
    let firstName = $('#fNameId').val();
    let lastName = $('#lNameId').val();
    let id = $('#idId').val();
    let title = $('#titleId').val();
    let salary = $('#salaryId').val();
    //Created object to name value pairs to contain employee input information and create employee obj with name value pairs to receive 
    //input for every employee added to the ourEmployee Array .
    const employeeObj = {
        firstName: firstName,
        lastName: lastName,
        id: id,
        title: title,
        salary: salary
    }

    //Added employeeObj values to ourEmployee array.
    ourEmployees.push(employeeObj);

    //Jquery call to input elements and cleared value.
    // $(`input`).val('');
    $('#fNameId').val('');
    $('#lNameId').val('');
    $('#idId').val('');
    $('#titleId').val('');
    $('#salaryId').val('');

    //Call to displayEmployee function to initiate in addEmployee function.
    displayEmployees();
    //Call to salaryTracker function to initiate in addEmployee function.
    salaryTracker();

    //Log'd to see employees as they are added in the console.
    console.log('Number of Employees:', ourEmployees.length);
    //Log'd to see ourEmployee array in the console.
    console.log(ourEmployees);
}//end addEmployee

//Created function to display employees added to ourEmployee array.
function displayEmployees() {
    //Jquery call to element id to clear previously pushed data when an employee was previously added.
    $("#employeeListId").empty();
    //Used a for loop to loop through each employee in the ourEmployee array.
    for (let employee of ourEmployees) {
        //Jquery call to target element id and appended employee information into list.
        //Added delete button element to be created upon every new employee object and should display to DOM.  
        $('#employeeListId').append(`
        <tr>
            <td>${employee.firstName}</td> 
            <td>${employee.lastName}</td>
            <td>${employee.id}</td>  
            <td>${employee.title}</td>  
            <td>${employee.salary}</td>
            <td><button class="deleteBtn" data-object="${employee.salary}">Delete</button></td>
        </tr> 
        `)
    }
}//end displayEmployees

//Create a function to gather the total monthly cost for employ salaries in the ourEmployees array to display to DOM.
//Call in addEmployee function, should initiate onclick.
function salaryTracker() {
    monthlySalary = 0;
    for (employee of ourEmployees) {
        //For each employee, add up the total value of annual salaries and divide by twelve to find monthly salary 
        //using the math.floor method to return a whole number and avoid repeating remainders. 
        monthlySalary += Number(employee.salary) / 12;
    }
    //Jquery call to target salary id and empty text.
    $('#salaryTrackerId').empty();
    //Jquery call to target salary id and append price, display to DOM.
    $('#salaryTrackerId').append(Math.floor(monthlySalary));
    //Call to budgetWarning function to initiate in addEmployee function.
    budgetWarning();
}//end salaryTracker

//Created function to delete employee from the DOM.
function deleteEmployee() {
    //When employee is deletes, access salary data and removed from DOM
    let deleteSalary = $(this).data('object');
    monthlySalary = (monthlySalary - deleteSalary / 12);
    //Jquery call to update salary to DOM when employee is deleted.
    $('#salaryTrackerId').text(Math.floor(monthlySalary));
    //Jquery 'this' call to target tr element when initiated by click event, and remove the date from the DOM. 
    $(this).closest('tr').remove();
    //Log'd to see deleteEmployee function initiation in the console.
    console.log('Delete');
    //Call to budget warning function to initiate.
    budgetWarning();
}//end deleteEmployee

//Created a function to turn monthly salary budget displayed to the DOM red
function budgetWarning() {
    //Used an if statement to declare that if monthly salary is greater than $20,000 initiate a warning that 
    //turns that add css styling to the element id.
    if (monthlySalary > 20000) {
        //Jquery call to an element id and added styling input from css by adding a class name to be used in CSS. 
        $("#salaryTrackerId").toggleClass('warning');
    }
}//end budgetWarning
