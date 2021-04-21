import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import PeopleIcon from "@material-ui/icons/People";
import SearchIcon from "@material-ui/icons/Search";
import { Link, NavLink, withRouter } from "react-router-dom";
import logo from "../assets/spotify_logo.svg";
import SideBarPlaylists from "../components/layouts/SideBarPlaylists";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  link: {
    "&:hover": {
      textDecoration: "none",
    },
  },
  activeLink: {
    borderLeft: "5px solid",
    borderColor: theme.palette.primary.main,
  },
}));

const Sidebar = (props) => {
  const classes = useStyles();
  const path = props.location.pathname;

  return (
    path !== "/login" && (
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <Link to="/" className={classes.link}>
          <Box
            my={3}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            gridGap={15}
          >
            <img src={logo} width={75} alt="spotify logo" />
            <Typography variant="h6" noWrap>
              Mini Spotify
            </Typography>
          </Box>
        </Link>

        <Divider />

        <List>
          <ListItem
            button
            key="Home"
            component={NavLink}
            className={classes.link}
            exact
            to="/"
            activeClassName={classes.activeLink}
          >
            <ListItemIcon>
              <HomeRoundedIcon />
            </ListItemIcon>
            <ListItemText disableTypography>
              <Typography variant="subtitle2">Home</Typography>
            </ListItemText>
          </ListItem>

          <ListItem
            button
            key="Search"
            component={NavLink}
            to="/search"
            activeClassName={classes.activeLink}
          >
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
            <ListItemText disableTypography>
              <Typography variant="subtitle2">Search</Typography>
            </ListItemText>
          </ListItem>

          <ListItem
            button
            key="Top artists"
            component={NavLink}
            to="/topArtists"
            activeClassName={classes.activeLink}
          >
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText disableTypography>
              <Typography variant="subtitle2">Top artists</Typography>
            </ListItemText>
          </ListItem>

          <br />

          <ListItem
            button
            key="Liked Songs"
            component={NavLink}
            to="/liked"
            activeClassName={classes.activeLink}
          >
            <ListItemIcon>
              <FavoriteIcon />
            </ListItemIcon>
            <ListItemText disableTypography>
              <Typography variant="subtitle2">Liked Songs</Typography>
            </ListItemText>
          </ListItem>
        </List>

        <Divider />

        <SideBarPlaylists />
      </Drawer>
    )
  );
};

export default withRouter(Sidebar);
