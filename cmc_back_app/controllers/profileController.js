const dbJson = require("../core/db.json")
const fs = require("fs");
const path = require("path").dirname(require.main.filename);
module.exports = {
    auth(req, res) {
        const {username, password} = dbJson;
        if(req.body.username === username && req.body.password === password){
            return res.status(200).send({
                success: true
            })
        }
        else if(req.body.password !== password && req.body.username !== username) {
            return res.status(400).send({
                errors: 'Неверный пароль и имя'
            })
        }else {
            const message = req.body.username !== username && 'Неверное имя'
                || username && req.body.password !== password && 'Неверный пароль'
            return res.status(400).send({
                errors: message
            })
        }
    },
    getAuth(req, res) {
        const {username} = dbJson;
        return res.status(200).send(username)
    },
    updateAuth(req, res) {
        fs.writeFile(path + '/core/db.json', JSON.stringify({
            ...dbJson,
            username: req.body.username
        }), function writeJSON(err) {
            if (err) return res.status(400).send({
                message: err.message
            });
            return res.status(201).send({
                message: 'success'
            })
        });

    }
}

