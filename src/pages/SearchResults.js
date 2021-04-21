import { Box, Typography } from "@material-ui/core";
import { useContext } from "react";
import ItemsGrid from "../components/ItemsGrid";
import TracksTable from "../components/TracksTable";
import { SpotifyContext } from "../context/SpotifyContext";

const SearchResults = () => {
  const { searchResults } = useContext(SpotifyContext);

  return (
    <div>
      {searchResults && (
        <>
          {searchResults.tracks.items.length > 0 && (
            <Box>
              <Typography variant="h5">Songs</Typography>
              <Box mt={2}>
                <TracksTable
                  tracks={searchResults.tracks.items}
                  type="artist"
                />
              </Box>
            </Box>
          )}

          {searchResults.albums.items.length > 0 && (
            <Box mt={8}>
              <Typography variant="h5">Abums</Typography>
              <Box mt={2}>
                <ItemsGrid items={searchResults.albums.items} type="album" />
              </Box>
            </Box>
          )}

          {searchResults.artists.items.length > 0 && (
            <Box mt={8}>
              <Typography variant="h5">Artist</Typography>
              <Box mt={2}>
                <ItemsGrid items={searchResults.artists.items} type="artist" />
              </Box>
            </Box>
          )}

          {searchResults.playlists.items.length > 0 && (
            <Box mt={8}>
              <Typography variant="h5">Playlists</Typography>
              <Box mt={2}>
                <ItemsGrid
                  items={searchResults.playlists.items}
                  type="playlist"
                />
              </Box>
            </Box>
          )}
        </>
      )}
    </div>
  );
};

export default SearchResults;
