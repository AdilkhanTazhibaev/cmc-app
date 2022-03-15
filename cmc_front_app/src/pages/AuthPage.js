import React from 'react';
import Auth from "../components/Auth";
import {Box} from "@mui/material";
import {makeStyles} from "@mui/styles";
const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
    }
}))
function AuthPage(props) {
    const classes = useStyles()
    return (
        <Box className={classes.root}><Auth/></Box>
    );
}

export default AuthPage;