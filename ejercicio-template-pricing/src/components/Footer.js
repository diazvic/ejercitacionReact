import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import CardActions from "@mui/material/CardActions";
const Footer = () => {
	return (
		<footer>
			<Box sx={{ flexGrow: 1, m: 6 }}>
				<Divider />
				<Grid
					container
					direction="row"
					justifyContent="center"
					alignItems="center"
					spacing={4}
					sx={{ m: 3 }}
				>
					<Grid item xs={2} spacing={4}>
						<Box sx={{ display: "flex", flexDirection: "column", mb: 4 }}>
							<Typography variant="h6">Company</Typography>
							<Link href="#" underline="none">
								<Typography variant="h6" sx={{ fontWeight: "bold" }}>
									Team
								</Typography>
							</Link>
							<Link href="#" underline="none">
								<Typography variant="h6" sx={{ fontWeight: "bold" }}>
									History
								</Typography>
							</Link>
							<Link href="#" underline="none">
								<Typography variant="h6" sx={{ fontWeight: "bold" }}>
									Contact us
								</Typography>
							</Link>
							<Link href="#" underline="none">
								<Typography variant="h6" sx={{ fontWeight: "bold" }}>
									Locations
								</Typography>
							</Link>
						</Box>
					</Grid>

					<Grid item xs={2} spacing={4}>
						<Box sx={{ display: "flex", flexDirection: "column" }}>
							<Typography variant="h6">Features</Typography>
							<Link href="#" underline="none">
								<Typography variant="h6" sx={{ fontWeight: "bold" }}>
									Cool stuff
								</Typography>
							</Link>
							<Link href="#" underline="none">
								<Typography variant="h6" sx={{ fontWeight: "bold" }}>
									Random feature
								</Typography>
							</Link>
							<Link href="#" underline="none">
								<Typography variant="h6" sx={{ fontWeight: "bold" }}>
									Team feature
								</Typography>
							</Link>
							<Link href="#" underline="none">
								<Typography variant="h6" sx={{ fontWeight: "bold" }}>
									Developer stuff
								</Typography>
							</Link>
							<Link href="#" underline="none">
								<Typography variant="h6" sx={{ fontWeight: "bold" }}>
									Another one
								</Typography>
							</Link>
						</Box>
					</Grid>

					<Grid item xs={2} spacing={4}>
						<Box sx={{ display: "flex", flexDirection: "column", mb: 4 }}>
							<Typography variant="h6">Resources</Typography>
							<Link href="#" underline="none">
								<Typography variant="h6" sx={{ fontWeight: "bold" }}>
									Resource
								</Typography>
							</Link>
							<Link href="#" underline="none">
								<Typography variant="h6" sx={{ fontWeight: "bold" }}>
									Resource name
								</Typography>
							</Link>
							<Link href="#" underline="none">
								<Typography variant="h6" sx={{ fontWeight: "bold" }}>
									Another resource
								</Typography>
							</Link>
							<Link href="#" underline="none">
								<Typography variant="h6" sx={{ fontWeight: "bold" }}>
									Final resource
								</Typography>
							</Link>
						</Box>
					</Grid>

					<Grid item xs={2} spacing={3}>
						<Box sx={{ display: "flex", flexDirection: "column", mb: 12 }}>
							<Typography variant="h6">Legal</Typography>
							<Link href="#" underline="none">
								<Typography variant="h6" sx={{ fontWeight: "bold" }}>
									Privacy policy
								</Typography>
							</Link>
							<Link href="#" underline="none">
								<Typography variant="h6" sx={{ fontWeight: "bold" }}>
									Terms of use
								</Typography>
							</Link>
						</Box>
					</Grid>
				</Grid>
			</Box>

			<CardActions sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
				<Typography sx={{ color: "text.secondary", mt: 5 }} variant="body2">
					Copyright ©{" "}
					<Link color="primary.main" underline="none" fontWeight="bold">
						Your Website
					</Link>{" "}
					2022.
				</Typography>
			</CardActions>
		</footer>
	);
};

export default Footer;
