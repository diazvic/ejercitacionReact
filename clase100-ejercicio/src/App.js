import "./App.css";
import { useState } from "react";
const App = () => {
	const [color, setColor] = useState("rojo");

	const handleClickCambiarDeColor = () => {
		setColor("azul");
	};

	const handleClickCambiarARojo = () => {
		setColor("rojo");
	};

	const handleClickCambiarAAzul = () => {
		setColor("azul");
	};
	return (
		<div className={color}>
			<button onClick={handleClickCambiarDeColor}>Poner el fondo azul</button>
			<button onClick={handleClickCambiarARojo}>Fondo rojo</button>
			<button onClick={handleClickCambiarAAzul}>Fondo azul</button>
		</div>
	);
};

export default App;
