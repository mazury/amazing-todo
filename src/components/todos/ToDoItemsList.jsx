import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoItemsList = ({ items, handleDoneCheck, handleDelete }) => {
    return items.map((item) => {
        return (
            <ToDoItem
                item={item}
                handleChange={handleDoneCheck}
                handleDelete={handleDelete}
            />
        );
    });
};

export default ToDoItemsList;
