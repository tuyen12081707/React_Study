import { ToDoListDarkTheme } from "../../Themes/ToDoListDarkTheme"
import { ADD_TASK } from "../types/ToDoListType"

const initialState = {
  themeToDoList:ToDoListDarkTheme,
  taskList : [
    {id:'task-1',taskName:'task 1',done:true},
    {id:'task-2',taskName:'task 2',done:true},
    {id:'task-3',taskName:'task 3',done:false},
    {id:'task-4',taskName:'task 4',done:true},
    {id:'task-5',taskName:'task 5',done:true},

  ]
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState,action) => {
  switch (action.type) {
    // eslint-disable-next-line no-lone-blocks
    case ADD_TASK:{
      console.log(action.newTask)
        if(action.newTask.taskName.trim()=== ''){
          alert('Task Name is required');
        }
          // check exists
          let taskListUpdate = [...state.taskList];
          let index = taskListUpdate.findIndex(task=>task.taskName === action.newTask.taskName);
          if(index !== -1){
            alert('task name already exists!');
            return {...state};
          }
          taskListUpdate.push(action.newTask);
          state.taskList = taskListUpdate;
          return {...state};
        
      }

  // eslint-disable-next-line no-fallthrough
  default:
    return {...state}
  }
}
