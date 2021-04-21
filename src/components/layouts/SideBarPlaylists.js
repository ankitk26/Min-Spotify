import {
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { SpotifyContext } from "../../context/SpotifyContext";

const useStyles = makeStyles((theme) => ({
  playlist: {
    "&:hover": {
      color: theme.palette.common.white,
    },
  },
  link: {
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

const SideBarPlaylists = () => {
  const classes = useStyles();

  const { fetchMyPlaylists, myPlaylists } = useContext(SpotifyContext);

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchMyPlaylists();
    // eslint-disable-next-line
  }, [token]);

  return (
    <List>
      {myPlaylists &&
        myPlaylists.map((playlist) => (
          <Link
            key={playlist.id}
            to={`/playlist/${playlist.id}`}
            className={classes.link}
          >
            <ListItem>
              <ListItemText disableTypography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  className={classes.playlist}
                >
                  {playlist.name}
                </Typography>
              </ListItemText>
            </ListItem>
          </Link>
        ))}
    </List>
  );
};

export default SideBarPlaylists;
