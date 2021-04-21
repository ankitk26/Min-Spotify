import { Avatar, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import FallbackArtist from "../layouts/FallbackArtist";

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
    padding: theme.spacing(2),
    gap: theme.spacing(1),
    "&:hover": {
      backgroundColor: "#282828",
    },
  },
  text: {
    padding: theme.spacing(2),
  },
}));

const Artists = ({ artists }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={7} alignItems="flex-start">
      {artists.map((artist) => (
        <Grid key={artist.id} item xs={6} md={3}>
          <Link to={`/artist/${artist.id}`} className="link">
            <Paper className={classes.homeLinkItem} elevation={0}>
              {artist.images.length > 0 ? (
                <Avatar
                  src={
                    artist.images[0].url ||
                    artist.images[1].url ||
                    artist.images[2].url
                  }
                  alt={artist.name}
                  className={classes.thumbnail}
                />
              ) : (
                <Avatar className={classes.thumbnail}>
                  <FallbackArtist />
                </Avatar>
              )}
              <Typography variant="subtitle1" className={classes.text}>
                {artist.name}
              </Typography>
            </Paper>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default Artists;
