import React, { useState } from "react";
import ToDoCreate from "../components/todos/ToDoCreate";
import ToDoList from "../components/todos/ToDoItemsList";
import { initialItems } from "../initialItems";

const ToDoScreen = () => {
    const [items, setItems] = useState(initialItems);

    function createTask(userInput) {
        const newItem = {
            title: userInput,
            done: false
        };
        setItems([newItem, ...items]);
    }

    return (
        <div>
            <ToDoCreate createTask={createTask} />
            <ToDoList items={items} />
        </div>
    );
};

export default ToDoScreen;
