import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoItemsList = ({ items, handleDoneCheck }) => {
    return items.map((item) => {
        return (
            <ToDoItem
                item={item}
                handleChange={handleDoneCheck}
            />
        );
    });
};

export default ToDoItemsList;
