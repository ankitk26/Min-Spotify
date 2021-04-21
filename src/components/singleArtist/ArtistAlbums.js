import {
  Box,
  Divider,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import { SpotifyContext } from "../../context/SpotifyContext";

const useStyles = makeStyles((theme) => ({
  thumbnail: {
    maxWidth: "100%",
  },
  homeLinkItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: theme.spacing(1),
  },
  text: {
    padding: theme.spacing(2),
  },
  scrollWrapper: {
    all: "initial",
  },
}));

const ArtistAlbums = ({ artistId }) => {
  const classes = useStyles();

  const { artistAlbums, setArtistAlbums, fetchArtistAlbums } = useContext(
    SpotifyContext
  );

  // const [artistAlbums, setArtistAlbums] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchArtistAlbums(artistId);
    // eslint-disable-next-line
  }, [artistId]);

  const fetchMore = async () => {
    try {
      if (artistAlbums.items.length >= artistAlbums.total) {
        return setHasMore(false);
      }

      const res = await axios.get(artistAlbums.next);
      setArtistAlbums({
        ...artistAlbums,
        items: artistAlbums.items.concat(res.data.items),
        next: res.data.next,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box mt={8}>
      <Typography variant="h5">Albums</Typography>
      <Box mt={3}>
        {artistAlbums && (
          <InfiniteScroll
            dataLength={artistAlbums.items.length}
            next={() => fetchMore()}
            hasMore={hasMore}
            className={classes.scrollWrapper}
            loader={<h3>Loading...</h3>}
            endMessage={
              <Box mt={3}>
                <Divider />
              </Box>
            }
          >
            <Grid container spacing={7} alignItems="flex-start">
              {artistAlbums.items.map((album) => (
                <Grid key={album.id} item xs={12} md={3}>
                  <Paper className={classes.homeLinkItem}>
                    <img
                      src={
                        album.images[0]
                          ? album.images[0].url
                          : album.images[1]
                          ? album.images[1].url
                          : album.images[2].url
                      }
                      alt={album.name}
                      className={classes.thumbnail}
                    />
                    <Link to={`/album/${album.id}`} className={classes.text}>
                      <Typography variant="subtitle1">{album.name}</Typography>
                    </Link>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </InfiniteScroll>
        )}
      </Box>
    </Box>
  );
};

export default ArtistAlbums;
