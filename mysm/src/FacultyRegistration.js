import React from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import PrincipalDetails from "./PrincipalDetails";
import TextField from "@material-ui/core/TextField";
import FacultyDetails from "./FacultyDetails";
export default function FacultyRegistration({ classes }) {
  const [visibleFacultyDetails, setVisibleFacultyDetails] = React.useState();
  const handleChange = event => {
    console.log(event.target.value);
    setVisibleFacultyDetails(event.target.value === "abc");
  };
  return (
    <React.Fragment>
      <GridList cellHeight={700} className={classes.gridList} cols={1}>
        <GridListTile key="2">
          <TextField
            id="filled-name"
            label="Princiapl Join Id"
            className={classes.textField}
            onChange={handleChange}
            margin="normal"
            variant="filled"
          />

          {visibleFacultyDetails ? <FacultyDetails classes={classes} /> : null}
        </GridListTile>
      </GridList>
    </React.Fragment>
  );
}
