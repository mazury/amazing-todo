import React from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const ToDoCreate = () => {
	return (
		<div>
			<InputGroup>
				<InputLeftElement
					pointerEvents="none"
					children={<AddIcon color="gray.300" />}
				/>
				<Input placeholder="Add task and press enter to save" />
			</InputGroup>
		</div>
	);
};

export default ToDoCreate;
