import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Select from "@material-ui/core/Select";
import { LoginListContext } from "./LoginListContext";
import SignInPhone from "./SignInPhone";
import SignInLogo from "./SignInLogo";
import FormControl from "@material-ui/core/FormControl";
import PricipalRegistration from "./PrincipalRegistration";
import FacultyRegistration from "./FacultyRegistration";
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
    width: "75%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "100%"
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)"
  },
  formControl: {
    margin: theme.spacing(1),
    width: "100%"
  }
}));

export default function Registration() {
  const regList = [
    { id: 0, name: "" },
    { id: 1, name: "Principal" },
    { id: 2, name: "Faculty" }
  ];
  const options = regList.map(reg => {
    return (
      <option value={reg.id} key={reg.id}>
        {reg.name}
      </option>
    );
  });
  const classes = useStyles();
  const [logins, setLogins] = useContext(LoginListContext);
  const [visiblePrinciapal, setVisiblePrinciapal] = React.useState();
  const [visibleFaculty, setVisibleFaculty] = React.useState();
  const [disableSubmit, setEnableSubmit] = React.useState();
  const handleLoginType = name => event => {
    setVisiblePrinciapal(Number(event.target.value) === 1);
    setVisibleFaculty(Number(event.target.value) === 2);
    setEnableSubmit(Number(event.target.value) !== 0);
    console.log(Number(event.target.value));
  };
  return (
    <Container component="main" maxWidth="100%">
      <CssBaseline />
      <div className={classes.paper}>
        <SignInLogo classes={classes} type="Registration" />
        <form className={classes.form} noValidate>
          <h1 />

          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-native-simple">Register As</InputLabel>
            <Select
              native
              onChange={handleLoginType("loginType")}
              inputProps={{
                name: "Register As",
                id: "age-native-simple"
              }}
            >
              {options}
            </Select>
          </FormControl>
          {visiblePrinciapal ? (
            <PricipalRegistration classes={classes} />
          ) : null}
          {visibleFaculty ? <FacultyRegistration classes={classes} /> : null}
          {disableSubmit ? (
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Register
            </Button>
          ) : null}
        </form>
      </div>
    </Container>
  );
}
