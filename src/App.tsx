import React, { useState } from 'react'
import './App.css'
import InputField from './component/InputField';
import { Todo } from './model';
import TodoList from './component/TodoList';

const App: React.FC = () => {
	const [todo, setTodo] = useState<string>('')
	const [todos, setTodos] = useState<Todo[]>([])

	const handleAdd = (e: React.FormEvent) => {
		e.preventDefault()

		if(todo) {
			setTodos([...todos, {id: Date.now(), todo, isDone: false}])
			setTodo('')
		}
	}

	return (
		<div className='App'>
			<span className="heading">Task</span>
			<InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
			{/* {todos.map((t) => (
				<li>{t.todo}</li>
			))} */}
			<TodoList todos={todos} setTodos={setTodos}/>
		</div>
	)
}

export default App;
