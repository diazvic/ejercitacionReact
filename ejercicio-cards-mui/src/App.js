import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const App = () => {
	return (
		<Box
			sx={{
				bgcolor: "text.disabled",
				display: "flex",
				justifyContent: "center",
			}}
		>
			<Card sx={{ width: 300, m: 15 }}>
				<CardContent>
					<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
						Word of the Day
					</Typography>
					<Typography variant="h4" component="div">
						be•nev•o•lent
					</Typography>
					<Typography sx={{ mb: 1.5 }} color="text.secondary">
						adjective
					</Typography>
					<Typography variant="body2">
						well meaning and kindly.
						{'"a benevolent smile"'}
					</Typography>
				</CardContent>
				<CardActions>
					<Button color="secondary" size="medium">
						Learn More
					</Button>
				</CardActions>
			</Card>
		</Box>
	);
};

export default App;
