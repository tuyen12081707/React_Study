import React, { Component } from 'react'
import {ThemeProvider}from 'styled-components'
import { ToDoListDarkTheme } from '../../Themes/ToDoListDarkTheme'
import { ToDoListLightTheme } from '../../Themes/ToDoListLightTheme'
import { ToDoListPrimaryTheme } from '../../Themes/ToDoListPrimaryTheme'
import { Button } from './ComponentToDoList/Button'
import { Container } from './ComponentToDoList/Container'
import { Dropdown } from './ComponentToDoList/Dropdown'
import { Heading1, Heading2, Heading3 } from './ComponentToDoList/Heading'
import { Table ,Tr,Td,Th,Thead,Tbody} from './ComponentToDoList/Table'
import { TextField } from './ComponentToDoList/TextField'
import { connect } from 'react-redux'
import { ADD_TASK } from '../../Redux/types/ToDoListType'
import { addTaskAction } from '../../Redux/actions/ToDoListAction'
 class TodoList extends Component {
  
  renderTaskToDo =()=>{
    return this.props.taskList.filter(task=>!task.done).map(
      (task,index)=>{
        return <Tr key={index}>
        <Th className='align-middle'>{task.taskName}</Th>
        <Th  className="text-end">
          <Button><i className='fa fa-edit'></i></Button>
          <Button><i className='fa fa-check'></i></Button>
          <Button><i className='fa fa-trash'></i></Button>
        </Th>
      </Tr>
      }
    )
  }
  renderTaskCompleted =()=>{
    return this.props.taskList.filter(task =>task.done).map(
      (task,index)=>{
        return <Tr key={index}>
        <Th className='align-middle'>{task.taskName}</Th>
        <Th  className="text-end">
          <Button><i className='fa fa-trash'></i></Button>
        </Th>
      </Tr>
     
      }
    )
  }
  state={
    taskName:''
  }
  render() {
    return (
      <ThemeProvider theme={this.props.themeToDoList}>
       <div>
            <Container className="w-50">
              <Dropdown> 
                <option>Dark Theme</option>
                <option>Light Theme</option>
                <option>Primary Theme</option>
              </Dropdown>
              <Heading3>To Do List</Heading3>
              <TextField label="Task Name" onChange={e=>
              {this.setState({
                taskName:e.target.value
              },)
              }}></TextField>
              <Button onClick={()=>
                {   
                    let {taskName} = this.state;
                    let newTask = {
                      id : Date.now(),
                      taskName:taskName,
                      done:false,
                    }
                    this.props.dispatch(addTaskAction(newTask))
                }} className='ms-2'><i className='fa fa-plus'></i>Add Task</Button>
              <Button className='ms-2'><i className='fa fa-upload'></i>Add Task</Button>
              <hr></hr>
              <Heading3>Task To Do</Heading3>
              <Table>
                <Thead>
                {this.renderTaskToDo()}

                </Thead>
              </Table>
              <Heading3 >Task Completed</Heading3>
              <Table>
                    <Thead>
                     {this.renderTaskCompleted()}
                    </Thead>
              </Table>
            </Container>
      </div>
      </ThemeProvider>
   
    )
  }
}

const mapStateToProps = state =>{

  return {
    themeToDoList:state.ToDoListReDucer.themeToDoList,
    taskList : state.ToDoListReDucer.taskList
  }
}

export default connect(mapStateToProps)(TodoList)