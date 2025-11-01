import React, { useEffect } from "react";
import Auth0Lock from "auth0-lock";
import { Box, Typography } from "@mui/material";

const LoginPage = () => {
  useEffect(() => {
    // Initialize Auth0 Lock
    const lock = new Auth0Lock(
      import.meta.env.VITE_AUTH0_CLIENT_ID,     // 🔸 Replace with your Auth0 Client ID
      import.meta.env.VITE_AUTH0_DOMAIN,        // 🔸 Replace with your Auth0 Domain (e.g., dev-xxxxxx.us.auth0.com)
      {
        auth: {
          redirectUrl: window.location.origin + "/dashboard", // 🔸 Redirect after login
          responseType: "token id_token",
          params: {
            scope: "openid profile email",
          },
        },
        theme: {
          primaryColor: "#1976d2", // MUI Blue
        },
        languageDictionary: {
          title: "Welcome Back 👋",
        },
        allowSignUp: true,
        closable: false, // ❌ Cannot close login box
        container: "auth0-login-container", // 👈 Where to render
      }
    );

    // Display the lock widget
    lock.show();

    // Cleanup on unmount
    return () => lock.hide();
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      sx={{ bgcolor: "#f5f5f5" }}
    >
      <Typography variant="h5" sx={{ mb: 3 }}>
        Please log in to continue
      </Typography>
      {/* Auth0 login frame renders inside this container */}
      <div id="auth0-login-container" style={{ width: "400px" }}></div>
    </Box>
  );
};

export default LoginPage;
