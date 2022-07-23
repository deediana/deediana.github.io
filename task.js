'use strict';
window.onload = function () {
  document.getElementById('addTask').onclick = createTask;
  document.getElementById('clear').onclick = clearTask;
}

function newTask(name) {
  var taskname = name;
  
  var task = {

    'getTaskName': function () {
      return taskname;
    }, 
    'setTaskName': function (name) {
      taskname = name;
    } 
  };
  return task;
}

var myList = new Array();

function createTask() {
  var taskName = document.getElementById('text').value;

  var tk = newTask(taskName);

  myList.push(tk);

  var output = "";
  for (var i = 0; i < myList.length; i++) {
    output += myList[i].getTaskName() + "\n";
  }
  document.getElementById('saved').value = output;
  
}

function clearTask(){
    var taskName = document.getElementById('saved').value;
  
    myList.pop(taskName);
  
    var output = "";
    for (var i = 0; i > myList.length; i++) {
      output -= myList[i].getTaskName() + "\n";
    }
    document.getElementById('saved').value = output; 
}