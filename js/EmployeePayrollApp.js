window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function () {
        if (name.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try {
            (new EmployeePayroll()).name = name.value;
            textError.textContent = "";
        }
        catch (e) {
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
    date.addEventListener('input', function () {
        let startDate = document.querySelector('#day').value + " " + document.querySelector('#month').value + " " +
            document.querySelector('#year').value;
        try {
            (new EmployeePayroll()).startDate = new Date(Date.parse(startDate));
            setTextValue('.date-error', "");
        } 
        catch (e) {
            setTextValue('.date-error', e);
        }
    });
});
const setTextValue = (id, value) => {
    const element = document.querySelector(id);
    element.textContent = value;
}

