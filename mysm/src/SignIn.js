import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Select from "@material-ui/core/Select";
import { LoginListContext } from "./LoginListContext";
import SignInEmail from "./SIgnInMail";
import SignInPhone from "./SignInPhone";
import SignInLogo from "./SignInLogo";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  formControl: {
    margin: theme.spacing(1),
    width: "100%"
  }
}));

export default function SignIn() {
  const classes = useStyles();
  const [logins, setLogins] = useContext(LoginListContext);
  const [visible, setVisible] = React.useState();
  const [disableSubmit, setEnableSubmit] = React.useState();
  const handleLoginType = name => event => {
    setVisible(Number(event.target.value) === 3);
    setEnableSubmit(Number(event.target.value) !== 0);
    console.log(Number(event.target.value));
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <SignInLogo classes={classes} />
        <form className={classes.form} noValidate>
          <h1 />

          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-native-simple">Login As</InputLabel>
            <Select
              native
              onChange={handleLoginType("loginType")}
              inputProps={{
                name: "Login As",
                id: "age-native-simple"
              }}
            >
              {logins.map(login => (
                <option value={login.id} key={login.id}>
                  {login.name}
                </option>
              ))}
            </Select>
          </FormControl>
          {!visible ? <SignInEmail /> : null}
          {visible ? <SignInPhone /> : null}
          {disableSubmit ? (
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
          ) : null}
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
