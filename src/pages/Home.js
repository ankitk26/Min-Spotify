import { Box, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import homeLinks from "../constants/homeLinks";
import thumbnail from "../assets/thumbnail.jpg";

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(5),
    marginTop: theme.spacing(10),
  },
  thumbnail: {
    maxWidth: "100%",
  },
  homeLinkItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: theme.spacing(1),
    "&:hover": {
      backgroundColor: "#282828",
    },
  },
  text: {
    padding: theme.spacing(2),
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h3">Personalized Playlists</Typography>
      <Box mt={5}>
        <Grid container spacing={7} alignItems="flex-start">
          {homeLinks.map((link, index) => (
            <Grid item xs={12} md={3} key={index}>
              <Link to={link.route} className="link">
                <Paper className={classes.homeLinkItem}>
                  <img
                    src={thumbnail}
                    alt="Playlist"
                    className={classes.thumbnail}
                  />
                  <Typography variant="subtitle1" className={classes.text}>
                    {link.text}
                  </Typography>
                </Paper>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Home;
