import { Box, Divider, Grid, Typography } from "@material-ui/core";
import { useContext, useEffect } from "react";
import thumbnail from "../assets/thumbnail.jpg";
import TracksTable from "../components/TracksTable";
import { SpotifyContext } from "../context/SpotifyContext";

const TopTracks = () => {
  const { fetchTopTracks, topTracks } = useContext(SpotifyContext);

  useEffect(() => {
    fetchTopTracks();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Box pb={5}>
        <Grid container spacing={5} alignItems="flex-end">
          <Grid item>
            <img src={thumbnail} width={400} alt="Top tracks thumbnail" />
          </Grid>
          <Grid item container sm xs={12} direction="column" spacing={2}>
            <Typography variant="subtitle2">PLAYLIST</Typography>
            <Typography variant="h1">Top Tracks</Typography>
          </Grid>
        </Grid>
      </Box>

      <Divider />

      {topTracks && <TracksTable tracks={topTracks} type="playlist" />}
    </>
  );
};

export default TopTracks;
