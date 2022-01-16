import react,{useState} from "react";
import { TodoForm } from "./todoform";
import { TodoList } from "./todolist";
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'

export const Todo = () => {
    const [edit,setEdit] = useState({
        id:null,
        value:''
    })
    return TodoList.map((todo,index) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row' }key={index}>
            <div key={todo.id} onClick={()=> completeTodo(todo.id)}>
                <div className="icons"></div>
                <RiCloseCircleLine></RiCloseCircleLine>
                <TiEdit></TiEdit>

            </div>
        </div>
    ))
}