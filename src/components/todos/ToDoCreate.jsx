import { AddIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React, { useRef } from "react";

const ToDoCreate = ({ createTask }) => {
    const userInput = useRef();

    // const handleChange = (e)=> {
    //     setUserInput(e.currentTarget.value);
    // }

    const handleSubmit = (e)=> {
        e.preventDefault();
        createTask(userInput.current.value);
        userInput.current.value = ""
    }

    return (
        <form onSubmit={(e)=>handleSubmit(e)}>
            <InputGroup>
                <InputLeftElement
                    pointerEvents="none"
                    children={<AddIcon color="gray.300" />}
                />
                <Input
                    ref={userInput}
                    placeholder="Add task and press enter to save"
                />
            </InputGroup>
        </form>
    );
};

export default ToDoCreate;
