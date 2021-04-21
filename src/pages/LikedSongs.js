import { Box, Divider, Grid, Typography } from "@material-ui/core";
import { useContext, useEffect } from "react";
import TracksTable from "../components/TracksTable";
import { SpotifyContext } from "../context/SpotifyContext";

const LikedSongs = () => {
  const { fetchLikedTracks, likedTracks } = useContext(SpotifyContext);

  useEffect(() => {
    fetchLikedTracks();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Box pb={5}>
        <Grid container spacing={5} alignItems="flex-end">
          <Grid item>
            <img
              src="https://community.spotify.com/t5/image/serverpage/image-id/104727iC92B541DB372FBC7/image-size/large?v=v2&px=999"
              style={{ objectFit: "contain" }}
              alt="Top tracks thumbnail"
            />
          </Grid>
          <Grid item container sm xs={12} direction="column" spacing={2}>
            <Typography variant="subtitle2">PLAYLIST</Typography>
            <Typography variant="h1">Liked Songs</Typography>
          </Grid>
        </Grid>
      </Box>

      <Divider />

      {likedTracks && (
        <TracksTable
          tracks={likedTracks.items.map((track) => track.track)}
          type="playlist"
        />
      )}
    </>
  );
};

export default LikedSongs;
