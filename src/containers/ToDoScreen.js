import React from "react";
import ToDoCreate from "../components/todos/ToDoCreate";
import ToDoList from "../components/todos/ToDoList";

const ToDoScreen = () => {
	return (
		<div>
			<ToDoCreate />
			<ToDoList />
		</div>
	);
};

export default ToDoScreen;
