import "./Card.scss";
const Card = ({ name }) => {
	return (
		<div className="card">
			<p>{name}</p>
		</div>
	);
};
export default Card;
