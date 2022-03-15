const express = require('express');
const cors = require('cors')
const ProfileController = require('./controllers/profileController.js')
const app = express();
app.use(express.json())
app.use(cors())
app.post('/auth', ProfileController.auth)
app.get('/', ProfileController.getAuth)
app.post('/update', ProfileController.updateAuth)

app.listen(8888, () => {
    console.log('STARTING SERVER')
})