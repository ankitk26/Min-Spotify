import { Box, Typography } from "@material-ui/core";
import { useContext, useEffect } from "react";
import ItemsGrid from "../components/ItemsGrid";
import { SpotifyContext } from "../context/SpotifyContext";

const FollowedArtists = () => {
  const { fetchFollowedArtists, followedArtists } = useContext(SpotifyContext);

  useEffect(() => {
    fetchFollowedArtists();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Typography variant="h3">Followed Artists</Typography>
      <Box mt={5}>
        {followedArtists && (
          <ItemsGrid items={followedArtists.items} type="artist" />
        )}
      </Box>
    </>
  );
};

export default FollowedArtists;
