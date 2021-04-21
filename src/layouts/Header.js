import {
  AppBar,
  Avatar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PersonIcon from "@material-ui/icons/Person";
import { useContext, useEffect } from "react";
import { withRouter } from "react-router-dom";
import SearchAnything from "../components/layouts/SearchAnything";
import { SpotifyContext } from "../context/SpotifyContext";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  username: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
  },
  user: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(6),
  },
  avatar: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.common.white,
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const path = props.location.pathname;

  const { user, fetchUserProfile, logoutUser } = useContext(SpotifyContext);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      fetchUserProfile();
    }
    // eslint-disable-next-line
  }, [token]);

  return (
    path !== "/login" && (
      <AppBar position="fixed" color="default" className={classes.appBar}>
        <Toolbar className={classes.root}>
          {path === "/search" ? <SearchAnything /> : <div />}

          <div className={classes.user}>
            <div className={classes.username}>
              {user &&
                (user.images.length > 0 ? (
                  <Avatar src={user.images[0].url} className={classes.avatar} />
                ) : (
                  <Avatar className={classes.avatar}>
                    <PersonIcon />
                  </Avatar>
                ))}
              <Typography>{user && user.display_name}</Typography>
            </div>

            <Button onClick={() => logoutUser()} startIcon={<ExitToAppIcon />}>
              Logout
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    )
  );
};

export default withRouter(Header);
