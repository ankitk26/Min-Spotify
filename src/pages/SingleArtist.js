import ArtistHeader from "../components/singleArtist/ArtistHeader";
import ArtistTopTracks from "../components/singleArtist/ArtistTopTracks";
import ArtistAlbums from "../components/singleArtist/ArtistAlbums";

const SingleArtist = (props) => {
  const artistId = props.match.params.artistId;

  return (
    <div>
      <ArtistHeader artistId={artistId} />
      <ArtistTopTracks artistId={artistId} />
      <ArtistAlbums artistId={artistId} />
    </div>
  );
};

export default SingleArtist;
