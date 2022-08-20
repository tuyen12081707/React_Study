import { ADD_TASK } from "../types/ToDoListType";



export const addTaskAction = (newTask) => ({
  type: ADD_TASK,
  newTask
})
