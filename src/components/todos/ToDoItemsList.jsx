import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoItemsList = ({ items }) => {
    return items.map((item) => {
        return <ToDoItem title={item.title} />;
    });
};

export default ToDoItemsList;
