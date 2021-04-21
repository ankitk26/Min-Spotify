import { useContext, useEffect } from "react";
import { SpotifyContext } from "../../context/SpotifyContext";
import TracksTable from "../TracksTable";

const AlbumTracks = ({ albumId }) => {
  const { fetchAlbumTracks, albumTracks } = useContext(SpotifyContext);

  useEffect(() => {
    fetchAlbumTracks(albumId);
    // eslint-disable-next-line
  }, [albumId]);

  return (
    <>
      {albumTracks && <TracksTable tracks={albumTracks.items} type="album" />}
    </>
  );
};

export default AlbumTracks;
