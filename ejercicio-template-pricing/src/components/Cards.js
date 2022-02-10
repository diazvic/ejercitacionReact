import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const Cards = () => {
	return (
		<div>
			<Box sx={{ flexGrow: 1 }}>
				<Grid
					container
					direction="row"
					justifyContent="center"
					alignItems="center"
					spacing={4}
				>
					<Grid item xs={3} spacing={3}>
						<Card sx={{ width: "100%" }}>
							<Typography
								variant="h4"
								sx={{
									display: "flex",
									justifyContent: "center",
									color: "primary.main",
									bgcolor: "#E7EBEF",
									fontWeight: "medium",
								}}
							>
								Free
							</Typography>

							<CardContent>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										alignItems: "center",
									}}
								>
									<Typography variant="h4" sx={{ m: 2 }}>
										$0/mo
									</Typography>
									<Typography sx={{ fontSize: 18, fontWeight: "medium" }}>
										10 users included
									</Typography>
									<Typography sx={{ fontSize: 18, fontWeight: "medium" }}>
										2 GB of storage
									</Typography>
									<Typography sx={{ fontSize: 18, fontWeight: "medium" }}>
										Help center access
									</Typography>
									<Typography sx={{ fontSize: 18, fontWeight: "medium" }}>
										Email support
									</Typography>
								</Box>
							</CardContent>
							<CardActions
								sx={{
									display: "flex",
									justifyContent: "center",
								}}
							>
								<Button
									size="large"
									variant="outlined"
									sx={{
										fontWeight: "bold",
										textTransform: "capitalize",
										width: "95%",
									}}
								>
									Sign up for free
								</Button>
							</CardActions>
						</Card>
					</Grid>
					<Grid item xs={3} spacing={3}>
						<Card sx={{ width: "100%" }}>
							<Typography
								variant="h4"
								sx={{
									display: "flex",
									justifyContent: "center",
									color: "primary.main",
									bgcolor: "#E7EBEF",
									fontWeight: "medium",
								}}
							>
								Pro
								<StarBorderIcon
									sx={{
										color: "text.primary",
									}}
								></StarBorderIcon>
							</Typography>
							<Typography
								variant="subtitle1"
								sx={{
									color: "text.secondary",
									textAlign: "center",
								}}
							>
								Most popular
							</Typography>
							<CardContent>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										alignItems: "center",
									}}
								>
									<Typography variant="h4" sx={{ m: 2 }}>
										$15/mo
									</Typography>
									<Typography sx={{ fontSize: 18, fontWeight: "medium" }}>
										20 users included
									</Typography>
									<Typography sx={{ fontSize: 18, fontWeight: "medium" }}>
										10 GB of storage
									</Typography>
									<Typography sx={{ fontSize: 18, fontWeight: "medium" }}>
										Help center access
									</Typography>
									<Typography sx={{ fontSize: 18, fontWeight: "medium" }}>
										Priority email support
									</Typography>
								</Box>
							</CardContent>
							<CardActions
								sx={{
									display: "flex",
									justifyContent: "center",
								}}
							>
								<Button
									size="large"
									variant="contained"
									sx={{
										fontWeight: "bold",
										textTransform: "capitalize",
										width: "95%",
									}}
								>
									Get started
								</Button>
							</CardActions>
						</Card>
					</Grid>

					<Grid item xs={3}>
						<Card sx={{ width: "100%" }}>
							<Typography
								variant="h4"
								sx={{
									display: "flex",
									justifyContent: "center",
									color: "primary.main",
									bgcolor: "#E7EBEF",
									fontWeight: "medium",
								}}
							>
								Enterprise
							</Typography>
							<CardContent>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										alignItems: "center",
									}}
								>
									<Typography variant="h4" sx={{ m: 2 }}>
										$30/mo
									</Typography>
									<Typography sx={{ fontSize: 18, fontWeight: "medium" }}>
										50 users included
									</Typography>
									<Typography sx={{ fontSize: 18, fontWeight: "medium" }}>
										30 GB of storage
									</Typography>
									<Typography sx={{ fontSize: 18, fontWeight: "medium" }}>
										Help center access
									</Typography>
									<Typography sx={{ fontSize: 18, fontWeight: "medium" }}>
										Phone & email support
									</Typography>
								</Box>
							</CardContent>
							<CardActions
								sx={{
									display: "flex",
									justifyContent: "center",
								}}
							>
								<Button
									size="large"
									variant="outlined"
									sx={{
										fontWeight: "bold",
										textTransform: "capitalize",
										width: "95%",
									}}
								>
									Contact us
								</Button>
							</CardActions>
						</Card>
					</Grid>
				</Grid>
			</Box>
		</div>
	);
};

export default Cards;
