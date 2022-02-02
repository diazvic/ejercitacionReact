import "./Button.scss";
const Button = ({ mensaje, color }) => {
	return <button className={`boton ${color}`}>{mensaje}</button>;
};
export default Button;
