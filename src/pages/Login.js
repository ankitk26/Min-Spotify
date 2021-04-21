import { Box, Button, Typography } from "@material-ui/core";
import { useEffect } from "react";
import logo from "../assets/spotify_logo.svg";
import history from "../history";

const Login = () => {
  let scopes = [
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
    "user-read-currently-playing",
    "user-follow-read",
    "playlist-read-private",
    "user-read-email",
    "user-read-private",
    "user-library-read",
    "playlist-read-collaborative",
  ];
  scopes = scopes.join("%20");

  const authLink = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=http://localhost:3000/callback&scope=${scopes}&state=34fFs29kd09&show_dialog=true`;

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      history.push("/");
    }
  }, [token]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="100%"
      justifyContent="center"
      mt={10}
      gridGap={20}
    >
      <img src={logo} height={100} width={100} alt="Spotify logo" />
      <Typography variant="h4">Login</Typography>
      <a href={authLink}>
        <Box mt={10}>
          <Button variant="contained">
            <Typography variant="subtitle1">
              <strong>Click to login</strong>
            </Typography>
          </Button>
        </Box>
      </a>
    </Box>
  );
};

export default Login;
