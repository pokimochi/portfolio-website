import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({

}));

export default function Navbar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton} edge="start" color="inherit" aria-label="menu">
                        Matthew Deogracias
                    </IconButton>
                    <Button color="inherit">About</Button>
                    <Button color="inherit">Education</Button>
                    <Button color="inherit">Experience</Button>
                    <Button color="inherit">Projects</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}