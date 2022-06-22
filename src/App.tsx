import React, { useState } from 'react'
import './App.css'
import InputField from './component/InputField';
import { Todo } from './model';
import TodoList from './component/TodoList';
import {DragDropContext} from 'react-beautiful-dnd'

const App: React.FC = () => {
	const [todo, setTodo] = useState<string>('')
	const [todos, setTodos] = useState<Todo[]>([])
	const [completedTodos, setCompletedTodos] = useState<Todo[]>([])

	const handleAdd = (e: React.FormEvent) => {
		e.preventDefault()

		if(todo) {
			setTodos([...todos, {id: Date.now(), todo, isDone: false}])
			setTodo('')
		}
	}

	return (
		<DragDropContext onDragEnd={() => {}}>
		<div className='App'>
			<span className="heading">Task</span>
			<InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
			{/* {todos.map((t) => (
				<li>{t.todo}</li>
			))} */}
			<TodoList
				todos={todos}
				setTodos={setTodos}
				completedTodos={completedTodos}
				setCompletedTodos={setCompletedTodos}
			/>
		</div>
		</DragDropContext>

	)
}

export default App;
