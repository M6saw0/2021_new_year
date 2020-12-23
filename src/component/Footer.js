import React from "react"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: "0",
    backgroundColor: "#000000",
    width: "100%",
    textAlign: "center",
    color: "#ffffff",
    padding: "3% 0",
    marginTop: "auto",
  },
  small: {
      fontSize: "2wv",
  }
}));

const Footer = () => {
    const classes = useStyles()

    return (
        <footer className={classes.root}>
            <small className={classes.small}>(c)2020 masawo.</small>
        </footer>
    )

}

export {Footer}