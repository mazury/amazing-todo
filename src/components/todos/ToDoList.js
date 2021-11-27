import React from "react";
import ToDoItem from "./ToDoItem";
import { items } from "../../items";

const ToDoList = () => {
	return items.map((item) => {
		return <ToDoItem title={item.title} />;
	});
};

export default ToDoList;
