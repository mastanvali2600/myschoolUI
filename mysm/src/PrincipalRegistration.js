import React from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import PrincipalDetails from "./PrincipalDetails";
import SchoolDetails from "./SchoolDetails";

export default function PrincipalRegistration({ classes }) {
  return (
    <React.Fragment>
      <GridList cellHeight={700} className={classes.gridList} cols={2} rows={1}>
        <GridListTile key="1">
          <SchoolDetails classes={classes} />
        </GridListTile>
        <GridListTile key="2">
          <PrincipalDetails classes={classes} />
        </GridListTile>
      </GridList>
    </React.Fragment>
  );
}
