import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
const App = () => {
	return (
		<div>
			<Box>
				<AppBar position="static" sx={{ bgcolor: "#E7EBEF" }}>
					<Toolbar>
						<Typography
							variant="h6"
							sx={{ color: "text.primary", flexGrow: 1 }}
						>
							Company name
						</Typography>
						<nav>
							<Box
								sx={{
									display: "flex",
									flexWrap: "wrap",
									justifyContent: "flex-end",
									fontWeight: "bold",
									m: 2,
								}}
							>
								<Link href="#" underline="none" sx={{ m: 1 }}>
									Features
								</Link>
								<Link href="#" underline="none" sx={{ m: 1 }}>
									Enterprise
								</Link>
								<Link href="#" underline="none" sx={{ m: 1 }}>
									Support
								</Link>
							</Box>
						</nav>
						<Button
							variant="outlined"
							sx={{ fontWeight: "bold", textTransform: "capitalize" }}
						>
							Login
						</Button>
					</Toolbar>
				</AppBar>
			</Box>

			<Container sx={{ maxWidth: "sm" }}>
				<Box
					sx={{
						textAlign: "center",
						m: 10,
					}}
				>
					<Typography variant="h4" component="div" fontWeight="bold">
						Pricing
					</Typography>
					<Typography
						variant="h6"
						fontWeight="bold"
						sx={{ color: "#3E4F5F", fontSize: 24 }}
					>
						Quickly build an effective pricing table for your potential
						customers with this layout. It's built with default MUI components
						with little customization.
					</Typography>
				</Box>
			</Container>
			<Cards />
			<Footer />
		</div>
	);
};

export default App;
