import AlbumHeader from "../components/singleAlbum/AlbumHeader";
import AlbumTracks from "../components/singleAlbum/AlbumTracks";

const SingleAlbum = (props) => {
  const albumId = props.match.params.albumId;

  return (
    <>
      <AlbumHeader albumId={albumId} />
      <AlbumTracks albumId={albumId} />
    </>
  );
};

export default SingleAlbum;
