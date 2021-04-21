import { Box, Divider, Grid, Typography } from "@material-ui/core";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { SpotifyContext } from "../../context/SpotifyContext";

const AlbumHeader = ({ albumId }) => {
  const { fetchAlbumById, singleAlbum } = useContext(SpotifyContext);

  useEffect(() => {
    fetchAlbumById(albumId);
    // eslint-disable-next-line
  }, [albumId]);

  return (
    <>
      {singleAlbum && (
        <>
          <Box pb={5}>
            <Grid container spacing={5} alignItems="flex-end">
              <Grid item>
                <img
                  src={singleAlbum.images[0].url}
                  width={250}
                  alt={singleAlbum.name}
                />
              </Grid>

              <Grid item container sm xs={12} direction="column" spacing={2}>
                <Typography variant="subtitle2">ALBUM</Typography>
                <Typography variant="h3">{singleAlbum.name}</Typography>
                <Box mt={2} display="flex" alignItems="center" gridGap={10}>
                  <Link to={`/artist/${singleAlbum.artists[0].id}`}>
                    <Typography variant="body2">
                      {singleAlbum.artists[0].name}
                    </Typography>
                  </Link>
                  <Typography variant="body2" color="textSecondary">
                    {new Date(singleAlbum.release_date).getFullYear()}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {singleAlbum.total_tracks} songs
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Divider />
        </>
      )}
    </>
  );
};

export default AlbumHeader;
