import "./Section.scss";

const Section = ({ mensaje, nombre, img, color }) => {
	return (
		<section className={`seccion ${color}`}>
			<h1>{mensaje}</h1>
			<h2>{nombre}</h2>
			<img src={img} />
		</section>
	);
};

export default Section;
