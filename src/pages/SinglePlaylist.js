import { Box, Divider, Grid, Typography } from "@material-ui/core";
import { useContext, useEffect } from "react";
import thumbnail from "../assets/thumbnail.jpg";
import TracksTable from "../components/TracksTable";
import { SpotifyContext } from "../context/SpotifyContext";

const SinglePlaylist = (props) => {
  const playlistId = props.match.params.playlistId;

  const { fetchPlaylistById, singlePlaylist } = useContext(SpotifyContext);

  useEffect(() => {
    fetchPlaylistById(playlistId);
    // eslint-disable-next-line
  }, [playlistId]);

  return (
    <>
      {singlePlaylist && (
        <>
          <Box pb={5}>
            <Grid container spacing={5} alignItems="flex-end">
              <Grid item>
                <img
                  src={
                    singlePlaylist.images.length > 0
                      ? singlePlaylist.images[0].url
                      : thumbnail
                  }
                  width={250}
                  alt={singlePlaylist.name}
                />
              </Grid>
              <Grid item container sm xs={12} direction="column" spacing={2}>
                <Typography variant="subtitle2">PLAYLIST</Typography>
                <Typography variant="h3">{singlePlaylist.name}</Typography>
                <Typography variant="body1">
                  {singlePlaylist.description}
                </Typography>
                <Box mt={2} display="flex" alignItems="center" gridGap={10}>
                  <Typography variant="body2">
                    {singlePlaylist.owner.display_name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {singlePlaylist.followers.total} likes
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {singlePlaylist.tracks.total} songs
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Divider />

          {
            <TracksTable
              tracks={singlePlaylist.tracks.items.map((track) => track.track)}
              type="playlist"
            />
          }
        </>
      )}
    </>
  );
};

export default SinglePlaylist;
