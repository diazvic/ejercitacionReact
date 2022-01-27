import "./App.css";
import { useState } from "react";
const App = () => {
	const [color, setColor] = useState("rojo");
	const [mensajeDelBoton, setMensajeDelBoton] = useState("Poner fondo azul");

	const handleClickCambiarARojo = () => {
		color === "rojo" ? setColor("azul") : setColor("rojo");
		mensajeDelBoton === "Poner fondo rojo"
			? setMensajeDelBoton("Poner fondo azul")
			: setMensajeDelBoton("Poner fondo rojo");
	};

	return (
		<div className={color}>
			<button onClick={handleClickCambiarARojo}>{mensajeDelBoton}</button>
		</div>
	);
};

export default App;
