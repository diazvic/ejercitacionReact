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
import Grid from "@mui/material/Grid";
const App = () => {
	return (
		// <Grid container spacing={2}>
		// 	<Grid item xs={12} sm={6}>
		// 		<TextField
		// 			autoComplete="given-name"
		// 			name="firstName"
		// 			required
		// 			fullWidth
		// 			id="firstName"
		// 			label="First Name"
		// 			autoFocus
		// 		/>
		// 	</Grid>
		// 	<Grid item xs={12} sm={6}>
		// 		<TextField
		// 			required
		// 			fullWidth
		// 			id="lastName"
		// 			label="Last Name"
		// 			name="lastName"
		// 			autoComplete="family-name"
		// 		/>
		// 	</Grid>
		// 	<Grid item xs={12}>
		// 		<TextField
		// 			required
		// 			fullWidth
		// 			id="email"
		// 			label="Email Address"
		// 			name="email"
		// 			autoComplete="email"
		// 		/>
		// 	</Grid>
		// 	<Grid item xs={12}>
		// 		<TextField
		// 			required
		// 			fullWidth
		// 			name="password"
		// 			label="Password"
		// 			type="password"
		// 			id="password"
		// 			autoComplete="new-password"
		// 		/>
		// 	</Grid>
		// 	<Grid item xs={12}>
		// 		<FormControlLabel
		// 			control={<Checkbox value="allowExtraEmails" color="primary" />}
		// 			label="I want to receive inspiration, marketing promotions and updates via email."
		// 		/>
		// 	</Grid>
		// </Grid>

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
				{/* <Stack direction="row" spacing={1}>
					<Checkbox></Checkbox>
					<Typography>
						I want to receive inspiration, marketing promotions and updates via
						email.
					</Typography>
				</Stack> */}

				<FormControlLabel
					control={
						<Checkbox sx={{ mr: 1 }} value="allowExtraEmails" color="primary" />
					}
					label="I want to receive inspiration, marketing promotions and updates via email."
				/>
				<Button fullWidth sx={{ mt: 2, p: 1 }} variant="contained">
					SIGN UP
				</Button>
			</CardActions>
		</Box>
	);
};
export default App;
