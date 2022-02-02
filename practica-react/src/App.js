// 1. crear de cero un proyecto con react
// 2. Una barra de navegacion, un componente principal y un footer
// 3. dentro del componente principal quiero dos secciones que sean iguales
// 4. las dos secciones tienen que tener un titulo, un subtitulo y una imagen
// 5. el titulo, subtitulo, imagen, se tienen que pasar por props
// 6 ademas cada seccion va a llamar al componente boton
// 7. en la primera seccion el componente va a decir "primera"
// 8 en la segunda va a decir "segunda"
// 9. si quieren estilar, que sea con sass

import "./App.scss";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
	return (
		<div className="container">
			<Nav />
			<Main />
			<Footer />
		</div>
	);
};
export default App;
