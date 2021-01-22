'use strict'

var taskList = document.getElementById('rightSection');
var tasksArray = [];


function Task(taskName, taskDate) {
    this.taskName = taskName;
    this.taskDate = taskDate;

    tasksArray.push(this)

    storeData();







}




var month = new Array();
month[0] = "JAN";
month[1] = "FEB";
month[2] = "MAR";
month[3] = "APR";
month[4] = "MAY";
month[5] = "JUN";
month[6] = "JUL";
month[7] = "AUG";
month[8] = "SEP";
month[9] = "OCT";
month[10] = "NOV";
month[11] = "DEC";

var dateH = new Date();
var dateD = dateH.getDate();
var monthD = month[dateH.getMonth()];
var yearD = dateH.getFullYear();


var submitCount=0;



var currentDateH = document.getElementById('currentDate');
currentDateH.textContent = `${monthD} ${dateD} ${yearD}`;

var task = document.getElementById('task');
var inputtedTaskDate = document.getElementById('dateInput');

var taskForm = document.getElementById('taskForm');

taskForm.addEventListener('submit', addtask);

function addtask(event) {
    event.preventDefault();

    var taskName = event.target.task.value;
   

    var firstTask = new Task(taskName, inputtedTaskDate.value);
    renderData()


}

function renderData(){

    taskList.innerHTML=" "


    for (let index = 0; index < tasksArray.length; index++) {


        var object=tasksArray[index]

        var task1name = document.createElement('h2');
        task1name.textContent = `${submitCount}. ${object.taskName}`;
        taskList.appendChild(task1name);
    
    
        var task1Date = document.createElement('p');
        task1Date.textContent = inputtedTaskDate.value;
        taskList.appendChild(task1Date);
        submitCount++;

        

    }

        
    

    var deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'x';
    task1Date.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', deleteTask);
    function deleteTask(){
        task1name.innerHTML = '';
        task1Date.innerHTML = '';
        localStorage.removeItem('Task');



    }

   

}

function storeData(){
    localStorage.setItem('lists',JSON.stringify(tasksArray))


}

function checkAndRestore() {
    
    if (localStorage.length > 0 ) { // check if the local storage has any values in it
        tasksArray = JSON.parse(localStorage.getItem('lists')); // restore the data from the local storage
        renderData();
    }
}


checkAndRestore()




