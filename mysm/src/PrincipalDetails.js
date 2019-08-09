import React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

export default function PrincipalDetails({ classes }) {
  return (
    <React.Fragment>
      <Card className={classes.card}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Princiapl Details
          </Typography>

          <TextField
            id="filled-name"
            label="Principal Name"
            className={classes.textField}
            value={""}
            onChange={""}
            margin="normal"
            variant="filled"
          />
          <TextField
            id="filled-name"
            label="Principal PhoneNumber"
            className={classes.textField}
            value={""}
            onChange={""}
            margin="normal"
            variant="filled"
          />
          <TextField
            id="filled-name"
            label="Principal Image"
            className={classes.textField}
            value={""}
            onChange={""}
            margin="normal"
            variant="filled"
          />
          <TextField
            id="filled-name"
            label="Principal Qualification"
            className={classes.textField}
            value={""}
            onChange={""}
            margin="normal"
            variant="filled"
          />
          <TextField
            id="filled-name"
            label="Principal Address"
            className={classes.textField}
            value={""}
            onChange={""}
            margin="normal"
            variant="filled"
          />
          <TextField
            id="filled-name"
            label="Principal Email"
            className={classes.textField}
            value={""}
            onChange={""}
            margin="normal"
            variant="filled"
          />
          <TextField
            id="filled-name"
            label="Principal Password"
            className={classes.textField}
            value={""}
            onChange={""}
            margin="normal"
            variant="filled"
          />
          <TextField
            id="filled-name"
            label="Principal Confirm Password"
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
