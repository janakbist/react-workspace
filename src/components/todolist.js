import react from "react";
import { useState } from "react/cjs/react.development";
import { Todo } from "./todo";
import { TodoForm } from "./todoform";

export const TodoList =()=>{
    const [todos,setTodos] = useState([]);
    const addTodo = todo =>{
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return
        }
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
    };
    const completeTodo = id =>{
        let updatedTodos = todos.map(todo =>{
            if(todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo;
        })
        setTodos(updatedTodos);
    }
    return(
        <div>
            <h1>Whats the plan for today?</h1>
            <TodoForm onSubmit={addTodo}></TodoForm>
            <Todo todos={todos} completeTodo={completeTodo}></Todo>
        </div>
        
    )
}