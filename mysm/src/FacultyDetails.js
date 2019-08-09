import React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

export default function FacultyDetails({ classes }) {
  return (
    <React.Fragment>
      <Card className={classes.card}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Faculty Details
          </Typography>

          <TextField
            id="filled-name"
            label="Faculty Name"
            className={classes.textField}
            value={""}
            onChange={""}
            margin="normal"
            variant="filled"
          />
          <TextField
            id="filled-name"
            label="Faculty PhoneNumber"
            className={classes.textField}
            value={""}
            onChange={""}
            margin="normal"
            variant="filled"
          />
          <TextField
            id="filled-name"
            label="Faculty Image"
            className={classes.textField}
            value={""}
            onChange={""}
            margin="normal"
            variant="filled"
          />
          <TextField
            id="filled-name"
            label="Faculty Qualification"
            className={classes.textField}
            value={""}
            onChange={""}
            margin="normal"
            variant="filled"
          />
          <TextField
            id="filled-name"
            label="Faculty Address"
            className={classes.textField}
            value={""}
            onChange={""}
            margin="normal"
            variant="filled"
          />
          <TextField
            id="filled-name"
            label="Faculty Email"
            className={classes.textField}
            value={""}
            onChange={""}
            margin="normal"
            variant="filled"
          />
          <TextField
            id="filled-name"
            label="Faculty Password"
            className={classes.textField}
            value={""}
            onChange={""}
            margin="normal"
            variant="filled"
          />
          <TextField
            id="filled-name"
            label="Faculty Confirm Password"
            className={classes.textField}
            value={""}
            onChange={""}
            margin="normal"
            variant="filled"
          />
        </CardContent>
      </Card>
    </React.Fragment>
  );
}
