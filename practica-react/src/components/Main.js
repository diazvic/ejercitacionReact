import Section from "./Section";
import Button from "./Button";
const Main = () => {
	return (
		<main>
			<Section
				mensaje="Mi nombre es"
				nombre="Capuchino"
				img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxzzYtyfuewA03H2odWjpjCS_ptap5dZ1zGw&usqp=CAU"
			/>

			<Button mensaje="Primera" color="rosa" />

			<Section
				mensaje="Mi nombre es"
				nombre="Java"
				color="verde"
				img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB6hiXHPFFdqlK_rcIGqZ9tajS7BKt8kWiXA&usqp=CAU"
			/>
			<Button mensaje="Segunda" color="azul" />
		</main>
	);
};

export default Main;
