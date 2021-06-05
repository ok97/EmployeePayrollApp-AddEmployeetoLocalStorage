window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function () 
    {
        if (name.value.length == 0) 
        {
            textError.textContent = "";
            return;
        }
        try 
        {
            (new EmployeePayroll()).name = name.value;
            textError.textContent = "";
        }
        catch (e) 
        {
            textError.textContent = e;
        }
    });
/* UC2:- Ability to set Event Listeners when Document is loaded so as to.
         - Set Event Listener on Salary Range to display appropriate value.
         - Validation of Name and Date
*/
    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary—output');
    output.textContent = salary.value;
    salary.addEventListener('input', function () {
         output.textContent = salary.value;
    });

    const date = document.querySelector('#date');
    date.addEventListener('input', function () 
    {
        let startDate = document.querySelector('#day').value + " " + document.querySelector('#month').value + " " +
            document.querySelector('#year').value;
        try 
        {
            (new EmployeePayroll()).startDate = new Date(Date.parse(startDate));
            setTextValue('.date-error', "");
        } 
        catch (e) 
        {
            setTextValue('.date-error', e);
        }
    });
});
const setTextValue = (id, value) => {
    const element = document.querySelector(id);
    element.textContent = value;
}

/* UC3:- Ability to create Employee Payroll Object On Save. 
         - Validation of Name and Date and if failed then set the UI accordingly. */
const save = () => {
    try {
        let EmployeePayRoll = createEmployeePayroll();
    }
    catch (e) {
        alert(e);
    }
}

const createEmployeePayroll = () => {
    let employeePayrollData = new EmployeePayroll();
    try {
        employeePayrollData.name = getInputValueById('#name');
    }
    catch (e) {
        setTextValue('.text-error', e);
        throw e;
    }

    employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
    employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
    employeePayrollData.department = getSelectedValues('[name=department]');
    employeePayrollData.salary = getInputValueById('#salary');
    employeePayrollData.note = getInputValueById('#notes');
    let date = getInputValueById('#day') + "," + getInputValueById('#month') + "," + getInputValueById('#year');
    employeePayrollData.startDate = new Date(date);
    alert(employeePayrollData.toString());
    return employeePayrollData;
}

const getSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    let sellItems = [];
    allItems.forEach(item => {
        if (item.checked)
            sellItems.push(item.value);
    });
    return sellItems;
}

const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}

