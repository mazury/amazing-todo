import React from "react";
import { Checkbox } from "@chakra-ui/react";

const ToDoItem = ({ item, handleChange }) => {
    const { title, isDone, id } = item;
    return (
        <div>
            <Checkbox isChecked={isDone} onChange={() => handleChange(id)}>
                {isDone ? <strike>{title}</strike> : title}
            </Checkbox>
        </div>
    );
};

export default ToDoItem;
