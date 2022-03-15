import React from 'react';
import {Alert, Button, Paper, Stack, TextField} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {authServices} from "../api/services/authServices";
const useStyles = makeStyles(() => ({
    root: {
        width: '50%',
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
function Profile() {
    const classes = useStyles()
    const [userName, setUserName] = React.useState('');
    const [alert, setAlert] = React.useState({});
    React.useEffect(() => {
        try{
            authServices.getAuth().then(data => setUserName(data.data))
        }catch (e){
            setAlert(e)
        }
    }, [])

    const handleEdit = () => {
            authServices.update({
                username: userName
            }).then((data) => {
                setAlert({
                    type: data.data.message,
                    message: 'Имя успешно изменено'
                })
            }).catch(err => setAlert({
                type: 'errors',
                message: 'Не удалось изменить имя'
            }))

    }
    setTimeout(() => {
        setAlert({})
    }, 3000)
    return (
        <Paper className={classes.root}>
            <div className={classes.mainTextField}>
                <TextField
                    value={userName ?? ''}
                    fullWidth
                    onChange={e => setUserName(e.target.value)}
                    label="Имя"
                    name="username"
                    variant="outlined"/>
            </div>
            <div className={classes.button}>
                <Button onClick={handleEdit} className={classes.textField} fullWidth variant="contained">Сохранить</Button>
            </div>
            {!!alert?.type && <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert severity={alert.type}>{alert.message}</Alert>
            </Stack>}
        </Paper>
    );
}

export default Profile;