import React from "react";
import {Checkbox, IconButton} from "@chakra-ui/react";
import {CloseIcon} from "@chakra-ui/icons";

const ToDoItem = ({item, handleChange, handleDelete}) => {
    const {title, isDone, id} = item;

    return (
        <div>
            <Checkbox isChecked={isDone} onChange={() => handleChange(id)}>
                {isDone ? <strike>{title}</strike> : title}
            </Checkbox>
            <IconButton onClick={() => handleDelete(id)} aria-label={'Delete task'} size={'xs'} colorScheme='red'
                        icon={<CloseIcon/>}/>
        </div>
    );
};

export default ToDoItem;
