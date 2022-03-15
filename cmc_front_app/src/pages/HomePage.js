import React from 'react';
import {Box} from "@mui/material";
import {makeStyles} from "@mui/styles";
import Profile from "../components/Profile";
import Header from "../components/Header";
const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
    }
}))
function HomePage(props) {
    const classes = useStyles()
    return (
        <>
            <Header />
            <Box className={classes.root}>
                <Profile />
            </Box>
        </>
    );
}

export default HomePage;