import "./Card.scss";
import { ImStarFull } from "react-icons/im";
import { GrCart } from "react-icons/gr";
import { useState } from "react";
import Modal from "./Modal";
import Rating from "@mui/material/Rating";

const Card = ({
	titulo,
	tipo,
	precio,
	imagen,
	isAvailable,
	onSale,
	rating,
}) => {
	const [bordeColor, setbordeColor] = useState("");
	const [abrirModal, setAbrirModal] = useState(false);
	const handleClick = () => {
		setbordeColor("azul");
	};
	const handleClickAbrirModal = () => {
		setAbrirModal(true);
	};
	const handleClickCerrarModal = () => {
		setAbrirModal(false);
	};
	return (
		<div
			className={`card ${isAvailable === false && "fondo-gris"} ${bordeColor}`}
			onMouseEnter={handleClick}
		>
			<img src={imagen}></img>
			<h3>
				{titulo} {onSale === true && <span className="on-sale">ON SALE</span>}
			</h3>
			<div className="contenedor-tipo">
				<p>{tipo}</p>

				<p className="precio">${precio}</p>
			</div>
			<div className="caja-iconos">
				<span>
					<Rating name="read-only" value={rating} readOnly />
				</span>
				<GrCart onClick={handleClickAbrirModal} className="carrito"></GrCart>
			</div>
			<p className="fondo-gris">{isAvailable}</p>
			<p>{onSale}</p>
			{abrirModal && <Modal cerrarModal={handleClickCerrarModal} />}
		</div>
	);
};

export default Card;
