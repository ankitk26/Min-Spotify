import { InputAdornment, makeStyles, TextField } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import { useContext, useState } from "react";
import { SpotifyContext } from "../../context/SpotifyContext";

const useStyles = makeStyles((theme) => ({
  searchInput: {
    margin: theme.spacing(1),
    width: 300,
  },
}));

const SearchAnything = () => {
  const classes = useStyles();

  const { searchQuery } = useContext(SpotifyContext);

  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    searchQuery(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        type="text"
        value={query}
        variant="outlined"
        className={classes.searchInput}
        placeholder="Artist and songs"
        onChange={(e) => setQuery(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchOutlined />
            </InputAdornment>
          ),
        }}
      />
    </form>
  );
};

export default SearchAnything;
