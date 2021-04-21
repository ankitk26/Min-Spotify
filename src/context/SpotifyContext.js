import axios from "axios";
import { createContext, useState } from "react";
import history from "../history";
import checkTokenExpiry from "../utils/checkTokenExpiry";
import setHeader from "../utils/setHeader";

export const SpotifyContext = createContext();

export default function SpotifyProvider({ children }) {
  const [user, setUser] = useState(null);
  const [topTracks, setTopTracks] = useState(null);
  const [topArtists, setTopArtists] = useState(null);
  const [myPlaylists, setMyPlaylists] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
  const [singlePlaylist, setSinglePlaylist] = useState(null);
  const [likedTracks, setLikedTracks] = useState(null);
  const [followedArtists, setFollowedArtists] = useState(null);

  const [artistInfo, setArtistInfo] = useState(null);
  const [artistTopTracks, setArtistTopTracks] = useState(null);
  const [artistAlbums, setArtistAlbums] = useState(null);

  const [singleAlbum, setSingleAlbum] = useState(null);
  const [albumTracks, setAlbumTracks] = useState(null);

  const fetchUserProfile = async () => {
    setHeader();
    try {
      const res = await axios.get("https://api.spotify.com/v1/me");
      // console.log(res.data);
      setUser(res.data);
    } catch (err) {
      // console.log("fetch user error" + err);
      checkTokenExpiry(err);
    }
  };

  const fetchTopTracks = async () => {
    setHeader();
    try {
      const res = await axios.get(
        "https://api.spotify.com/v1/me/top/tracks?limit=50"
      );
      console.log(res.data);
      setTopTracks(res.data.items);
    } catch (err) {
      // console.log(err);
    }
  };

  const fetchLikedTracks = async () => {
    setHeader();
    try {
      const res = await axios.get(
        "https://api.spotify.com/v1/me/tracks?limit=50"
      );
      console.log(res.data);
      setLikedTracks(res.data);
    } catch (err) {
      // console.log(err);
    }
  };

  const fetchMyPlaylists = async () => {
    setHeader();
    try {
      const res = await axios.get("https://api.spotify.com/v1/me/playlists");
      // console.log(res.data);
      setMyPlaylists(res.data.items);
    } catch (err) {
      // console.log(err);
    }
  };

  const fetchTopArtists = async () => {
    setHeader();
    try {
      const res = await axios.get("https://api.spotify.com/v1/me/top/artists");
      console.log(res.data);
      setTopArtists(res.data.items);
    } catch (err) {
      // console.log(err);
    }
  };

  const fetchFollowedArtists = async () => {
    setHeader();
    try {
      const res = await axios.get(
        "https://api.spotify.com/v1/me/following?type=artist&limit=50"
      );
      console.log(res.data);
      setFollowedArtists(res.data.artists);
    } catch (err) {
      // console.log(err);
    }
  };

  const searchQuery = async (query) => {
    setHeader();
    try {
      const res = await axios.get(
        `https://api.spotify.com/v1/search?q=${query}&type=album,artist,playlist,track&limit=32`
      );
      console.log(res.data);
      setSearchResults(res.data);
    } catch (err) {
      // console.log(err);
    }
  };

  const fetchPlaylistById = async (id) => {
    setHeader();
    try {
      const res = await axios.get(`https://api.spotify.com/v1/playlists/${id}`);
      console.log(res.data);
      setSinglePlaylist(res.data);
    } catch (err) {
      // console.log(err);
    }
  };

  const fetchArtistInfo = async (id) => {
    setHeader();
    try {
      const res = await axios.get(`https://api.spotify.com/v1/artists/${id}`);
      console.log(res.data);
      setArtistInfo(res.data);
    } catch (err) {
      // console.log(err);
    }
  };

  const fetchArtistTopTracks = async (id) => {
    setHeader();
    try {
      const res = await axios.get(
        `https://api.spotify.com/v1/artists/${id}/top-tracks?market=from_token`
      );
      console.log(res.data);
      setArtistTopTracks(res.data.tracks);
    } catch (err) {
      // console.log(err);
    }
  };

  const fetchArtistAlbums = async (id) => {
    setHeader();
    try {
      const res = await axios.get(
        `https://api.spotify.com/v1/artists/${id}/albums?include_groups=album,single&market=from_token`
      );
      setArtistAlbums(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchAlbumById = async (id) => {
    setHeader();
    try {
      const res = await axios.get(`https://api.spotify.com/v1/albums/${id}`);
      console.log(res.data);
      setSingleAlbum(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchAlbumTracks = async (id) => {
    setHeader();
    try {
      const res = await axios.get(
        `https://api.spotify.com/v1/albums/${id}/tracks`
      );
      console.log(res.data);
      setAlbumTracks(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const logoutUser = () => {
    localStorage.removeItem("token");
    setUser(null);
    setTopTracks(null);
    setTopArtists(null);
    setMyPlaylists(null);
    setSearchResults(null);
    setSinglePlaylist(null);
    setLikedTracks(null);
    setFollowedArtists(null);
    setArtistInfo(null);
    setArtistTopTracks(null);
    setArtistAlbums(null);
    setSingleAlbum(null);
    setAlbumTracks(null);
    history.push("/login");
  };

  return (
    <SpotifyContext.Provider
      value={{
        user,
        topTracks,
        myPlaylists,
        searchResults,
        fetchUserProfile,
        fetchTopTracks,
        singlePlaylist,
        topArtists,
        fetchPlaylistById,
        logoutUser,
        artistTopTracks,
        fetchArtistInfo,
        fetchArtistTopTracks,
        fetchLikedTracks,
        artistInfo,
        fetchTopArtists,
        artistAlbums,
        setArtistAlbums,
        fetchArtistAlbums,
        fetchMyPlaylists,
        searchQuery,
        likedTracks,
        fetchFollowedArtists,
        followedArtists,
        fetchAlbumById,
        fetchAlbumTracks,
        singleAlbum,
        albumTracks,
      }}
    >
      {children}
    </SpotifyContext.Provider>
  );
}
