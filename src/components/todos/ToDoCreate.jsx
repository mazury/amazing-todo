import { AddIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React, { useState } from "react";

const ToDoCreate = ({ createTask }) => {
    const [userInput, setUserInput] = useState("");

    function handleChange(e) {
        setUserInput(e.currentTarget.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        createTask(userInput);
        setUserInput("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <InputGroup>
                <InputLeftElement
                    pointerEvents="none"
                    children={<AddIcon color="gray.300" />}
                />
                <Input
                    onChange={handleChange}
                    placeholder="Add task and press enter to save"
                />
            </InputGroup>
        </form>
    );
};

export default ToDoCreate;
