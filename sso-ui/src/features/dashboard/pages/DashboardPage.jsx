import { useAuth0 } from "@auth0/auth0-react";
import { Box, Typography, Button } from "@mui/material";

const DashboardPage = () => {
  const { user, logout } = useAuth0();

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5">Welcome, {user?.name} 🎉</Typography>
      <Typography>Email: {user?.email}</Typography>

      <Button
        sx={{ mt: 2 }}
        variant="outlined"
        color="error"
        onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
      >
        Logout
      </Button>
    </Box>
  );
};

export default DashboardPage;
