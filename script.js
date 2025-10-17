 document.addEventListener('DOMContentLoaded', function(){

   //selecting the DOM elements
   const addButton = document.getElementById('add-task-btn');
   const taskInput = document.getElementById('task-input');
   const taskList = document.getElementById('task-list');

   // Initialize tasks array from Local Storage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  // Load tasks from Local Storage when page loads
    function loadTasks() {
        taskList.innerHTML = ''; // Clear existing tasks
        tasks.forEach((task, index) => {
            createTaskElement(task, index);
        });
    }

   //creating the addTask function
   function addTask(){
     
     //retrieve and trim the text
     const taskText = taskInput.value.trim();

     //cheking if the text is empty
     if(taskText === ""){
         alert('Please enter a task!');
        return;
     }

     //checking if the text is not empty
     if(!task === ""){
       
         //create a list item
         const listItem = document.createElement('li');
         listItem.textContent = taskText;

         //create a remove button
         const removebtn = document.createElement('button');
         removebtn.textContent = "Remove";
         removebtn.className = "remove-btn";
         removeButton.classList.add('remove-btn');

        //adding an onclick event to the remove button
        removebtn.onclick = function(){
        taskList.removeChild(listItem);
        }
       
        // Append remove button to li, then li to taskList
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // Clear the task input field
        taskInput.value = '';

       // Attach Event Listeners
       addButton.addEventListener('click', addTask);

      //adding event listener to the enter key
       taskInput.addEventListener('keypress', function(event){
          if (event.key === 'Enter') {
            addTask();
        }
       })
     }
   }
 })
