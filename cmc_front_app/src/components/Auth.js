import React from 'react';
import {Alert, Button, Paper, Stack, TextField, Typography} from "@mui/material";
import {makeStyles} from '@mui/styles'
import {authServices} from "../api/services/authServices";
import {useNavigate} from "react-router-dom";
const useStyles = makeStyles(() => ({
    root: {
        width: '50%',
        height: '50%',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column'
    },
    textField: {
        marginTop: '20px !important',
        marginBottom: '20px !important'
    },
    mainTextField: {
        flex: 1,
    },
    button: {
        width: '100%',
        alignSelf: 'flex-end',
    }
}))

function Auth() {
    const classes = useStyles()
    const navigate = useNavigate();
    const [authState, setAuthState] = React.useState({
        username: '',
        password: ''
    })
    const [alert, setAlert] = React.useState({})
    const handleAuth = () => {
        authServices.auth(authState).then(res => {
            localStorage.setItem('isAuth', res.data.success)
            setAlert(res)
            navigate('/')
            return res
        }).catch(e => {
            setAlert(e.response.data)
            localStorage.removeItem('isAuth')
        })
    }
    return (
        <Paper className={classes.root}>
            <div className={classes.mainTextField}>
            <Typography variant="h3" component="h3">
                Войти
            </Typography>
            <TextField
                className={classes.textField}
                fullWidth
                value={authState.username}
                label="Имя"
                name="username"
                onChange={e => {
                    setAuthState(prevState => ({...prevState,
                        [e.target.name]: e.target.value
                    }))
                }}
                variant="outlined"/>
            <TextField
                className={classes.textField}
                fullWidth
                value={authState.password}
                label="Пароль"
                name="password"
                onChange={e => {
                    setAuthState(prevState => ({...prevState,
                        [e.target.name]: e.target.value
                    }))
                }}
                variant="outlined"/>
            </div>
            <div className={classes.button}>
                <Button onClick={handleAuth} className={classes.textField} fullWidth variant="contained">Войти</Button>
            </div>
            {alert?.errors && <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert severity="error">{alert?.errors}</Alert>
            </Stack>}

        </Paper>
    );
}

export default Auth;