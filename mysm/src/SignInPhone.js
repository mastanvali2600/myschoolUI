import React from "react";
import TextField from "@material-ui/core/TextField";

export default function SignInPhone() {
  return (
    <div>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="phone"
        label="Phone Number"
        name="phone"
        autoComplete="phone"
        autoFocus
      />
    </div>
  );
}
