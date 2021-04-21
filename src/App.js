import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { Route, Router, Switch } from "react-router-dom";
import SpotifyProvider from "./context/SpotifyContext";
import history from "./history";
import ContentLayout from "./layouts/ContentLayout";
import Header from "./layouts/Header";
import MainLayout from "./layouts/MainLayout";
import Sidebar from "./layouts/Sidebar";
import FollowedArtists from "./pages/FollowedArtists";
import Home from "./pages/Home";
import LikedSongs from "./pages/LikedSongs";
import Login from "./pages/Login";
import MyPlaylists from "./pages/MyPlaylists";
import Redirect from "./pages/Redirect";
import SearchResults from "./pages/SearchResults";
import SingleAlbum from "./pages/SingleAlbum";
import SingleArtist from "./pages/SingleArtist";
import SinglePlaylist from "./pages/SinglePlaylist";
import TopArtists from "./pages/TopArtists";
import TopTracks from "./pages/TopTracks";
import theme from "./theme";

const App = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    history.push("/login");
  }
  // useEffect(() => {

  // }, []);

  return (
    <SpotifyProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router history={history}>
          <ContentLayout>
            <Header />
            <Sidebar />
            <Switch>
              <Route path="/login" component={Login} />
              <MainLayout>
                <Route exact path="/" component={Home} />
                <Route path="/callback" component={Redirect} />
                <Route path="/topArtists" component={TopArtists} />
                <Route path="/collection/artists" component={FollowedArtists} />
                <Route path="/playlists" component={MyPlaylists} />
                <Route path="/topTracks" component={TopTracks} />
                <Route path="/liked" component={LikedSongs} />
                <Route
                  path="/playlist/:playlistId"
                  component={SinglePlaylist}
                />
                <Route path="/album/:albumId" component={SingleAlbum} />
                <Route path="/artist/:artistId" component={SingleArtist} />
                <Route path="/search" component={SearchResults} />
              </MainLayout>
            </Switch>
          </ContentLayout>
        </Router>
      </ThemeProvider>
    </SpotifyProvider>
  );
};

export default App;
