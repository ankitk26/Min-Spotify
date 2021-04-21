import { Box, Typography } from "@material-ui/core";
import { useContext, useEffect } from "react";
import ItemsGrid from "../components/ItemsGrid";
import { SpotifyContext } from "../context/SpotifyContext";

const MyPlaylists = () => {
  const { fetchMyPlaylists, myPlaylists } = useContext(SpotifyContext);

  useEffect(() => {
    fetchMyPlaylists();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Typography variant="h3">Saved Playlists</Typography>
      <Box mt={5}>
        {myPlaylists && <ItemsGrid items={myPlaylists} type="playlist" />}
      </Box>
    </>
  );
};

export default MyPlaylists;
