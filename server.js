const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

const baseUrl = '/calculator'

app.use(express.json());

const baseRouter = express.Router();

baseRouter.get('/greeting', (req, res) => {
    return res.send('Hello World');
});

baseRouter.post('/add', (req, res) => {

    let res1 = req.body.first + req.body.second;

    res.json({ "result": res1 });
});


baseRouter.post('/subtract', (req, res) => {
    let res1 = req.body.first - req.body.second;

    res.json({ "result": res1 });
});

app.use(baseUrl, baseRouter);
app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});