import React, {useState} from "react";
import ToDoCreate from "../components/todos/ToDoCreate";
import ToDoItemsList from "../components/todos/ToDoItemsList";
import {initialItems} from "../initialItems";

const ToDoScreen = () => {
    const [items, setItems] = useState(initialItems);

    function createTask(userInput) {
        const newItem = {
            id: Math.max(...items.map(item => item.id)) + 1,
            title: userInput,
            isDone: false
        };
        setItems([newItem, ...items]);
    }

    function handleDelete(id) {
        setItems(items.filter((item) => {
            return item.id !== id
        }));
    }

    function handleDoneCheck(id) {
        const newItems = items.map((item) => {
            return item.id === id ? {...item, isDone: !item.isDone} : item;
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
            <ToDoCreate createTask={createTask}/>
            <ToDoItemsList
                items={getUndoneItems()}
                handleDoneCheck={handleDoneCheck}
                handleDelete={handleDelete}
            />
            <h2>Done:</h2>
            <ToDoItemsList
                items={getDoneItems()}
                handleDoneCheck={handleDoneCheck}
                handleDelete={handleDelete}
            />
        </div>
    );
};

export default ToDoScreen;
