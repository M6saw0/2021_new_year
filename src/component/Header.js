import React from "react"
import {Link} from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import {FaHome, FaDoorClosed} from "react-icons/fa"
import {CgHello} from "react-icons/cg"
import {MdWork} from "react-icons/md"
import {defaultPath} from "./Home"
import logo from "../assets/logo.png"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    width: '100%',
    height: '60px',
    margin: '0 auto',
    backgroundColor: '#444444',
    // backgroundImage: "url(../assets/img/cow-pattern.jpg)",
  },
  menuButton: {
    // marginLeft: '0%',
    // marginRight: theme.spacing(2),
    margin: '0',
  },
  title: {
    flexGrow: 1,
  },
  menubar: {
    backgroundColor: '#444444',
  },
  logo: {
    marginLeft: '10%',
    height: "40px",
  },
  linkText: {
    display: "flex",
    flexDirection: "row",
    fontFamily: "'Bitter', serif",
    color: "#444444",
    textDecoration: "none",
  }
}));


const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
          <AppBar position="static" className={classes.appBar}>
            <Toolbar>
              <SimpleMenu className={classes.menuButton}/>
              <Typography variant="h6" className={classes.title}>
                <Link to={defaultPath + "/"}><img className={classes.logo} src={logo} alt="Masawo"/></Link>
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
    )
}
function SimpleMenu(props) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const linkList = [
    {
      to: defaultPath + "/",
      text: "Home",
      icon: <FaHome/>,
    },
    {
      to: defaultPath + "/greeting",
      text: "Greeting",
      icon: <CgHello/>,
    },
    {
      to: defaultPath + "/work",
      text: "Work",
      icon: <MdWork/>,
    },
    {
      to: defaultPath + "/closing",
      text: "Closing",
      icon: <FaDoorClosed/>,
    },
  ]
  const linkInMenu = linkList.map((links) => (
        <MenuItem onClick={handleClose}>
          <Link to={links.to} className={classes.linkText}>
            <ListItemIcon>
              {links.icon}
            </ListItemIcon>
            <ListItemText>
              {links.text}
            </ListItemText>
          </Link>
        </MenuItem>
  ))
  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className={props.className}>
          <MenuIcon style={{color: "white" }} fontSize="large"/>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {linkInMenu}
      </Menu>
    </div>
  );
}

export {Header}