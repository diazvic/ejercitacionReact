import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import CardActions from "@mui/material/CardActions";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";

const App = () => {
	return (
		<Box sx={{ display: "flex", justifyContent: "center", m: 4 }}>
			<Card sx={{ width: 350 }}>
				<CardMedia
					sx={{ width: 320 }}
					component="img"
					height="220"
					alt="coffee bar"
					image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-d-mEttUBIFTtoiqRHqpUu0kgqfUiYtRNyw&usqp=CAU"
				></CardMedia>
				<CardContent>
					<Typography variant="h5">Cafe Badilico</Typography>
					<Stack direction="row" spacing={1}>
						<Rating
							name="size-small"
							defaultValue={4.5}
							precision={0.5}
							size="small"
						></Rating>
						<Typography variant="body2" sx={{ color: "text.disabled" }}>
							4.5 (413)
						</Typography>
					</Stack>
					<Typography
						sx={{ fontSize: 16 }}
						variant="h6"
						color="text.secondary"
						gutterBottom
					>
						$ · Italian, Cafe
					</Typography>
					<Typography
						variant="body2"
						color="text.secondary"
						gutterBottom
						sx={{ mb: 2 }}
					>
						Small plates, salads & sandwiches an intimate setting with 12 indoor
						seats plus patio seating.
					</Typography>
					<Divider />
				</CardContent>
				<Typography sx={{ ml: 2 }}>Tonight´s availability</Typography>
				<CardActions>
					<Stack direction="row" spacing={2}>
						<Chip
							sx={{
								color: "text.secondary",
							}}
							label="5:30PM"
						/>
						<Chip
							sx={{
								bgcolor: "#6519F0",
								color: "white",
								fontWeight: "bold",
							}}
							label="7:30PM"
						/>
						<Chip
							sx={{
								color: "text.secondary",
							}}
							label="8:00PM"
						/>
						<Chip
							sx={{
								color: "text.secondary",
							}}
							label="9:00PM"
						/>
					</Stack>
				</CardActions>
				<Stack>
					<Button
						sx={{ display: "flex", justifyContent: "flex-start", ml: 1 }}
						color="secondary"
						variant="text"
					>
						RESERVE
					</Button>
				</Stack>
			</Card>
		</Box>
	);
};

export default App;
