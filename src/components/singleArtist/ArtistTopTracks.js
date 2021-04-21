import { Box, Typography } from "@material-ui/core";
import { useContext, useEffect } from "react";
import { SpotifyContext } from "../../context/SpotifyContext";
import TracksTable from "../TracksTable";

const ArtistTopTracks = ({ artistId }) => {
  const { fetchArtistTopTracks, artistTopTracks } = useContext(SpotifyContext);

  useEffect(() => {
    fetchArtistTopTracks(artistId);
    // eslint-disable-next-line
  }, [artistId]);

  return (
    <div>
      <Typography variant="h5">Popular</Typography>
      <Box mt={3}>
        {artistTopTracks && (
          <TracksTable tracks={artistTopTracks} type="artist" />
        )}
      </Box>
    </div>
  );
};

export default ArtistTopTracks;
