import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(5),
    marginTop: theme.spacing(10),
  },
}));

const MainLayout = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.content}>{children}</div>;
};

export default MainLayout;
