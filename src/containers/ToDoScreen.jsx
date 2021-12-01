import React, { useState } from "react";
import ToDoCreate from "../components/todos/ToDoCreate";
import ToDoItemsList from "../components/todos/ToDoItemsList";
import { initialItems } from "../initialItems";

const ToDoScreen = () => {
    const [items, setItems] = useState(initialItems);

    function createTask(userInput) {
        const newItem = {
            title: userInput,
            isDone: false
        };
        setItems([newItem, ...items]);
    }

    function handleDoneCheck(id) {
        const newItems = items.map((item) => {
            return item.id === id ? { ...item, isDone: !item.isDone } : item;
        });
        setItems(newItems);
    }

    function getDoneItems() {
        return items.filter((item) => item.isDone);
    }

    function getUndoneItems() {
        return items.filter((item) => !item.isDone);
    }

    return (
        <div>
            <ToDoCreate createTask={createTask} />
            <ToDoItemsList
                items={getUndoneItems()}
                handleDoneCheck={handleDoneCheck}
            />
            <h2>Done:</h2>
            <ToDoItemsList
                items={getDoneItems()}
                handleDoneCheck={handleDoneCheck}
            />
        </div>
    );
};

export default ToDoScreen;
