import { Avatar, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import thumbnail from "../assets/thumbnail.jpg";
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

const ItemsGrid = ({ items, type }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={7} alignItems="flex-start">
      {items.map((item) => (
        <Grid key={item.id} item xs={12} md={3}>
          <Link to={`/${type}/${item.id}`} className="link">
            <Paper className={classes.homeLinkItem} elevation={0}>
              {item.images.length > 0 && (
                <Avatar
                  src={item.images[0].url}
                  alt={item.name}
                  variant={type === "artist" ? "circular" : "square"}
                  className={classes.thumbnail}
                />
              )}

              {/* No images available  */}
              {item.images.length === 0 &&
                (type === "artist" ? (
                  <Avatar className={classes.thumbnail}>
                    <FallbackArtist />
                  </Avatar>
                ) : (
                  <Avatar
                    src={thumbnail}
                    alt={item.name}
                    variant="square"
                    className={classes.thumbnail}
                  />
                ))}
              <Typography variant="subtitle1" className={classes.text} noWrap>
                {item.name}
              </Typography>
            </Paper>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default ItemsGrid;
