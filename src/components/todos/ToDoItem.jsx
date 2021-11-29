import React from "react";
import { Checkbox } from "@chakra-ui/react";

const ToDoItem = ({ title }) => {
    return (
        <div>
            <Checkbox>{title}</Checkbox>
        </div>
    );
};

export default ToDoItem;
