import { Box, Typography } from "@material-ui/core";
import { useContext, useEffect } from "react";
import ItemsGrid from "../components/ItemsGrid";
import { SpotifyContext } from "../context/SpotifyContext";

const TopArtists = () => {
  const { fetchTopArtists, topArtists } = useContext(SpotifyContext);

  useEffect(() => {
    fetchTopArtists();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Typography variant="h3">Top Artists</Typography>
      <Box mt={5}>
        {topArtists && <ItemsGrid items={topArtists} type="artist" />}
      </Box>
    </>
  );
};

export default TopArtists;
