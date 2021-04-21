import { Avatar, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import thumbnail from "../assets/thumbnail.jpg";

const useStyles = makeStyles((theme) => ({
  thumbnail: {
    height: theme.spacing(20),
    width: theme.spacing(20),
    maxWidth: "100%",
    objectFit: "contain",
  },
  homeLinkItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: theme.spacing(1),
    padding: theme.spacing(2),
    "&:hover": {
      backgroundColor: "#282828",
    },
  },
  text: {
    padding: theme.spacing(2),
    maxWidth: "100%",
  },
}));

const Playlists = ({ playlists }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={7} alignItems="flex-start">
      {playlists.map((playlist) => (
        <Grid key={playlist.id} item xs={12} md={3}>
          <Link to={`/playlist/${playlist.id}`} className="link">
            <Paper className={classes.homeLinkItem} elevation={0}>
              <Avatar
                src={playlist.images[0] ? playlist.images[0].url : thumbnail}
                alt={playlist.name}
                variant="square"
                className={classes.thumbnail}
              />
              <Typography variant="subtitle1" className={classes.text} noWrap>
                {playlist.name}
              </Typography>
            </Paper>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default Playlists;
