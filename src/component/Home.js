import React from "react"
import {Link} from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import {Header} from "./Header"
import {Footer} from "./Footer"
import logo from "../assets/img/2021-ushi-title.jpg"

const defaultPath = "/2021_new_year"

const useStyles = makeStyles((theme) => ({
  root: {
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        paddingTop: "0",
  },
  titleImage: {
        width: "100%",
  },
  content: {
        margin: "5% 5% 0 5%",
        fontFamily: "'Sawarabi Mincho', sans-serif",
        fontSize: "4wv",
        flex: 1,
        minHeight: "100vh"
  },
  linkClass: {
    color: "#555555",
    textDecoration: "none",
    borderBottom: "2px solid #555555",
    paddingBottom: "0.2wv",
  }
}));

const Home = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Header/>
                <img src={logo} className={classes.titleImage} alt="top"/>
                <div className={classes.content}>
                    <b>
                        新年あけましておめでとうございます。
                    </b>
                    <p>
                        新年のご挨拶や就職後の近況報告など書かせていただければと存じます。別に会社でWeb開発をしているわけではないので、サイトの完成度が低いのはご容赦をば。
                    </p>
                    <b>Next &gt;&gt; <Link to={defaultPath + "/greeting"} className={classes.linkClass}>新年のご挨拶</Link></b>
                </div>
            <Footer/>
        </div>
    )
}

export {Home, defaultPath}