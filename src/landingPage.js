import React, { useEffect, useState } from "react";
import './App.css';
import { client } from "./client";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import logo from "../src/logo.png";
import bodyimage from "../src/bodyImage.jpg";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import AddIcon from "@material-ui/icons/Add";
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      paddingRight: 20,
      fontSize: 18,
      color: "#000000",
    },
    logo: {
      width: 100,
    },
    bodyimage: {
      width: 500,
      height: 300,
    },
    createPollButton: {
      margin: theme.spacing(1),
      backgroundColor: "#B9C4D1",
      color: "#ffffff",
    },
    formControl: {
      minWidth: 100,
      minHeight: 65,
    },
    items: {
      fontSize: 18,
      paddingRight: 30,
    },
    inputTitle: {
      fontSize: 18,
      textDecoration: "none",
    },
    bodyTitle: {
      fontSize: 36,
      textAlign: "center",
      marginTop: 20,
    },
    bodySubTitle: {
      fontSize: 24,
      textAlign: "center",
      marginTop: 10,
      color: "#6A7685",
    },
    createPollBodyButton: {
      textAlign: "center",
      marginTop: 30,
    },
    bodyImage: {
      textAlign: "center",
      marginTop: 20,
    },
    appbar: {
      backgroundColor: "#ffffff",
      boxShadow: "none",
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
      marginRight: 20,
      color: "#000000",
      fontSize: 18,
    },
    pollButtonStyle: {
      backgroundColor: "#B9C4D1",
      color: "#ffffff",
    },
    createPollBtn: {
      marginLeft: "auto",
    },
  }),
);

const LandingPage=()=> {
  const classes = useStyles();
  const [meeting, setMeeting]=useState(null);
  const [solution, setSolution] = React.useState("");
  const [resource, setResource] = React.useState("");
  const [contact, setContact] = React.useState("");

  const handleChange = (event) => {
    setSolution(event.target.value);
  };
  const handleResourceChange = (
    event
  ) => {
    setResource(event.target.value);
  };
  const handleContactChange = (
    event
  ) => {
    setContact(event.target.value);
  };
  useEffect(()=>{
    client.getEntries()
    .then((response)=>{
      console.log(response);
      setMeeting(response?.items[2]?.fields)
    })
    .catch(console.error)
  },[])
  
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
        <img src={meeting?.logo.fields.file.url} alt="logo" className={classes.logo} />
        <Typography className={classes.title}>Features</Typography>
        {/* <Link to="/createpoll" className={classes.pollTable}>Table</Link> */}
          <FormControl className={classes.formControl}>
            <Select
              disableUnderline
              value={solution}
              onChange={handleChange}
              displayEmpty
              className={classes.selectEmpty}
              inputProps={{ "aria-label": "Without label" }}>
              <MenuItem value="">Solutions</MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <Typography className={classes.title}>Pricing</Typography>
          <Typography className={classes.title}>Integrations</Typography>

          <FormControl className={classes.formControl}>
            <Select
              disableUnderline
              value={resource}
              onChange={handleResourceChange}
              displayEmpty
              className={classes.selectEmpty}
              inputProps={{ "aria-label": "Without label" }}>
              <MenuItem value="">Resources</MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <Select
              disableUnderline
              value={contact}
              onChange={handleContactChange}
              displayEmpty
              className={classes.selectEmpty}
              inputProps={{ "aria-label": "Without label" }}>
              <MenuItem value="">Contact</MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <div className={classes.createPollBtn}>
            <Button
              variant="contained"
              color="default"
              href="create-poll"
              className={classes.createPollButton}
              startIcon={<AddIcon style={{ fontSize: 30 }} />}>
              Create Poll
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <div>
        <Typography className={classes.bodyTitle}>
          {meeting?.landingTitle}
        </Typography>
      </div>
      <div>
        <Typography className={classes.bodySubTitle}>
        {meeting?.landingTitleContent}
        </Typography>
      </div>
      <div className={classes.createPollBodyButton}>
        <Button
          variant="contained"
          color="default"
          href="create-poll"
          className={classes.pollButtonStyle}
          startIcon={<AddIcon style={{ fontSize: 30 }} />}>
          Create Poll
        </Button>
      </div>
      <div className={classes.bodyImage}>
        <img src={meeting?.bodyImage.fields.file.url} alt="bodyImage" className={classes.bodyimage} />
      </div>
      <div>
        <Typography className={classes.bodyTitle}>
        {meeting?.landingSubtitle}
        </Typography>
      </div>
      <div>
        <Typography className={classes.bodySubTitle}>
        {meeting?.landingSubtitleContent}
        </Typography>
      </div>
    </div>
  );
}

export default LandingPage;
