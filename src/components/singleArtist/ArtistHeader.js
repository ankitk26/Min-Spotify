import { Box, Chip, Grid, Typography } from "@material-ui/core";
import { useContext, useEffect } from "react";
import { SpotifyContext } from "../../context/SpotifyContext";

const ArtistHeader = ({ artistId }) => {
  const { fetchArtistInfo, artistInfo } = useContext(SpotifyContext);

  useEffect(() => {
    fetchArtistInfo(artistId);
    // eslint-disable-next-line
  }, [artistId]);

  return (
    <>
      {artistInfo && (
        <Box pb={5}>
          <Grid container spacing={7} alignItems="center">
            <Grid item>
              <img
                src={artistInfo.images[0].url}
                width={350}
                alt={artistInfo.name}
              />
            </Grid>
            <Grid item container sm xs={12} direction="column" spacing={2}>
              <Typography variant="h3">{artistInfo.name}</Typography>
              <Box display="flex" alignItems="center" gridGap={16} mt={2}>
                {artistInfo.genres.map((genre) => (
                  <Chip key={genre} label={genre} />
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
};

export default ArtistHeader;
