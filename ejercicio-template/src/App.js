import LockIcon from "@mui/icons-material/Lock";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "@mui/material/Link";

const App = () => {
	return (
		<Box
			component="form"
			sx={{
				display: "flex",
				justifyContent: "center",
				mt: 3,
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			<Avatar sx={{ bgcolor: "#6519F0", width: 45, height: 45 }}>
				<LockIcon />
			</Avatar>
			<Typography variant="h5" sx={{ mb: 2 }}>
				Sign up
			</Typography>
			<Box sx={{ display: "flex" }}>
				<TextField sx={{ m: 1 }} label="First Name *"></TextField>
				<TextField sx={{ m: 1 }} label="Last Name *"></TextField>
			</Box>
			<Box>
				<TextField fullWidth sx={{ m: 1 }} label="Email Address *"></TextField>
				<TextField fullWidth sx={{ m: 1 }} label="Password *"></TextField>
			</Box>

			<CardActions
				sx={{ width: 400, display: "flex", flexDirection: "column" }}
			>
				<FormControlLabel
					control={
						<Checkbox sx={{ mr: 1 }} value="allowExtraEmails" color="primary" />
					}
					label="I want to receive inspiration, marketing promotions and updates via email."
				/>
				<Button fullWidth sx={{ mt: 2, p: 1 }} variant="contained">
					SIGN UP
				</Button>

				<Link sx={{ mt: 2, ml: 22 }} href="#" variant="body2">
					Already have an account? Sign in
				</Link>

				<Typography sx={{ color: "text.secondary", mt: 5 }} variant="body2">
					Copyright © <Link color="inherit">Your Website</Link> 2022.
				</Typography>
			</CardActions>
		</Box>
	);
};
export default App;
