import "./Modal.scss";
import { BiX } from "react-icons/bi";
const Modal = ({ cerrarModal }) => {
	return (
		<article className="modal">
			<button className="boton-cerrar" onClick={cerrarModal}>
				<BiX />
			</button>
			<p>Se agregó este articulo a tu carrito</p>
		</article>
	);
};

export default Modal;
