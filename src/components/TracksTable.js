import { Box, Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import ScheduleIcon from "@material-ui/icons/Schedule";
import { Link } from "react-router-dom";
import thumbnail from "../assets/thumbnail.jpg";

const TracksTable = ({ tracks, type }) => {
  console.log(type);
  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="top tracks table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>

              <TableCell>TITLE</TableCell>
              {type !== "album" && <TableCell>ALBUM</TableCell>}
              <TableCell>
                <ScheduleIcon />
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {tracks.map((track, index) => (
              <TableRow hover key={track.id}>
                <TableCell>
                  <Typography variant="caption" color="textSecondary">
                    {index + 1}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Box display="flex" alignItems="center" gridGap={10}>
                    {(type === "artist" || type === "playlist") && (
                      <img
                        src={
                          track.album.images[0]
                            ? track.album.images[0].url
                            : thumbnail
                        }
                        width={50}
                        height={50}
                        alt={track.album.name}
                      />
                    )}

                    <Box display="flex" flexDirection="column" gridGap={2}>
                      <Typography variant="inherit">{track.name}</Typography>
                      <Link to={`/artist/${track.artists[0].id}`}>
                        <Typography variant="inherit" color="textSecondary">
                          {track.artists[0].name}
                        </Typography>
                      </Link>
                    </Box>
                  </Box>
                </TableCell>
                {type !== "album" && (
                  <TableCell width="40%">
                    <Link to={`/album/${track.album.id}`}>
                      <Typography variant="inherit">
                        {track.album.name}
                      </Typography>
                    </Link>
                  </TableCell>
                )}
                <TableCell>{track.duration_ms}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TracksTable;
