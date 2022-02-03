import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

const App = () => {
	return (
		<Box
			sx={{
				bgcolor: "text.disabled",
				display: "flex",
				justifyContent: "center",
			}}
		>
			<Card sx={{ m: 15, width: 350, height: 400 }}>
				<CardMedia
					component="img"
					height="200"
					image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Planetatierra.jpg/2048px-Planetatierra.jpg"
					alt="planeta tierra"
				></CardMedia>
				<CardContent>
					<Typography variant="h6">Our Changing Planet</Typography>
					<Typography sx={{ mb: 2 }} variant="body1" color="text.secondary">
						by Kurt Wagner
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Visit ten places on our planet that are undergoing the biggest
						changes today.
					</Typography>
				</CardContent>

				<CardActions>
					<Button sx={{ color: "secondary.main" }} size="small" variant="h6">
						READ
					</Button>
					<Button
						sx={{ color: "secondary.main", mr: 5 }}
						size="small"
						variant="h6"
					>
						BOOKMARK
					</Button>
					<IconButton>
						<FavoriteIcon sx={{ mr: 3 }}></FavoriteIcon>
						<ShareIcon></ShareIcon>
					</IconButton>
				</CardActions>
			</Card>
		</Box>
	);
};
export default App;
