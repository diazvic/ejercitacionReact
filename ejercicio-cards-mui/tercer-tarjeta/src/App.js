import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ShareIcon from "@mui/icons-material/Share";
const App = () => {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				width: 380,
				ml: 6,
				mt: 6,
			}}
		>
			<Card sx={{ display: "flex" }}>
				<CardMedia
					sx={{ width: 220, m: 2 }}
					component="img"
					height="220"
					image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJvHBsAI6SEuT0UgKWFg89PVYhovxlSeqvSA&usqp=CAU"
					alt="wallpaper"
				></CardMedia>
				<CardActions
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						mt: 2,
						mr: 1,
					}}
				>
					<IconButton aria-label="heart" sx={{ mb: 1, ml: 1 }}>
						<FavoriteIcon fontSize="small"></FavoriteIcon>
					</IconButton>
					<IconButton sx={{ m: 0, mb: 1 }} aria-label="bookmark">
						<BookmarkIcon fontSize="small"></BookmarkIcon>
					</IconButton>
					<IconButton aria-label="share" sx={{ m: 0 }}>
						<ShareIcon fontSize="small"></ShareIcon>
					</IconButton>
				</CardActions>
			</Card>
		</Box>
	);
};

export default App;
