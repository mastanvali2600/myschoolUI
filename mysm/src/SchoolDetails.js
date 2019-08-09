import React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

export default function SchoolDetails({ classes }) {
  return (
    <React.Fragment>
      <Card className={classes.card}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            School Details
          </Typography>
          <TextField
            id="filled-name"
            label="School Name"
            className={classes.textField}
            onChange={""}
            margin="normal"
            variant="filled"
          />
          <div>
            <br />
            School Logo
            <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
            />
            <label htmlFor="contained-button-file">
              <Button
                variant="contained"
                component="span"
                className={classes.button}
              >
                Upload
              </Button>
            </label>
          </div>
          <br />
          <TextareaAutosize
            aria-label="minimum height"
            rows={3}
            placeholder="School Address"
            variant="filled"
          />
        </CardContent>
      </Card>
    </React.Fragment>
  );
}
