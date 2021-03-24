import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import IconButton from '@material-ui/core/IconButton';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import Home from './components/home'
import EE306Labs from './components/labs/ee306Labs'
import EE312Labs from './components/labs/ee312Labs'
import EE319Labs from './components/labs/ee319Labs'
import EE460nLabs from './components/labs/ee460nLabs'
import EE422Labs from './components/labs/ee422Labs'

// Using Grey: #959595 | Cream: #e2e0d4 | Off Pink: #cebeb9 | Pure Pink: #e7cac2 | Soft Grey:#e8e8e8

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar style={{ background: '#959595' }} position="static" >
      <Toolbar>
          <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white"
          }} 
          style={{
            color: "#bdbdbd",
            textDecoration: 'none'
          }}
          to="/">
            <Button>
              <Typography variant='h2' className={classes.title} style={{fontSize: '1.7rem', color: "white"}}>
                Home
              </Typography>
            </Button>
          </NavLink>
        {/* <Button>
          <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "white"
          }} 
          style={{
            color: "#bdbdbd",
            textDecoration: 'none'
          }}
          to="/">
            Overview
          </NavLink>
        </Button>
        <Button>
          <NavLink 
            activeStyle={{
              fontWeight: "bold",
              color: "white"
            }}
            style={{
              color: "#bdbdbd",
              textDecoration: 'none'
            }}
            to="/">
              Classes
          </NavLink>
        </Button> */}
      </Toolbar>
    </AppBar>
  );
}

function Footer() {
    return (
      <AppBar style={{ background: '#959595'}} position="sticky" >
        <Toolbar>
          <Grid justify={"center"} alignItems={"center"} spacing={3} container>
            <Grid item>
              <IconButton color="inherit" href="https://www.linkedin.com/in/xige-michael-chen-7a4a45190/">
                <LinkedInIcon/>
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton color="inherit" href="https://github.com/mxchen2001">
                <GitHubIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton color="inherit" href="mailto:mxchen2001@utexas.edu">
                <MailOutlineIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
}

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Router>
        <Navbar/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Labs/EE306Labs" component={EE306Labs} />
            <Route exact path="/Labs/EE312Labs" component={EE312Labs} />
            <Route exact path="/Labs/EE319Labs" component={EE319Labs} />
            <Route exact path="/Labs/EE460nLabs" component={EE460nLabs} />
            <Route exact path="/Labs/EE422Labs" component={EE422Labs} />
          </Switch>
          <Footer />
      </Router>
    </div>
  );
}

export default App;