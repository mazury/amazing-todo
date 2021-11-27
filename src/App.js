import React from "react";
import {
	ChakraProvider,
	Box,
	Text,
	Link,
	VStack,
	Code,
	Grid,
	theme,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import ToDoScreen from "./containers/ToDoScreen";

function App() {
	return (
		<ChakraProvider theme={theme}>
			<h1>TO DO APP</h1>
			<ColorModeSwitcher />
			<ToDoScreen />
		</ChakraProvider>
	);
}

export default App;
