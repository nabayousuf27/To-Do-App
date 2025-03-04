let listOfTask = [];
while(true){
    console.log('Enter "List" to show All Task');
    console.log('Enter "delete" to delete a Task');
    console.log('Enter "add" to show add a Task');
    console.log('Enter "Quit" to quit the program');
    let entered = prompt("please enter your choice");
    console.log(entered);
    if(entered == "list"){
        console.log("-------------------");
        for(task of listOfTask){
            console.log(task)
        }
        console.log("-------------------");
    }
    else if(entered == "add"){
        let taskEntered = prompt("plese enter the task you want to add");
        listOfTask.push(taskEntered);
        console.log("Task added");
    }
    else if(entered == "delete"){
        let taskEnteredToBeDeleted = prompt("plese enter the task you want to delete");
        for(task of listOfTask){
            if (task == taskEnteredToBeDeleted){
                let index = listOfTask.indexOf(task);
                listOfTask.splice(index,1);
            }
        }
        console.log("Element removed");

    }
    else if(entered == "quit"){
        console.log("Quitting the app");
        break;
    }
    else{
        console.log("Invalid Choice");
    }
}