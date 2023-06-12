import express from 'express'; //載入express框架模組
import bodyParser from 'body-parser';


let app = express();

app.use(bodyParser.json()); //使用JSON形式進行傳遞

//server開始聆聽client
app.listen(5000, () => {
    console.log(new Date() + "開始監聽port 5000!");
});


// GET /users/:email
app.get("/users/:email", (req, res) => {
    const email = req.params.email;
    if (email == 'test@gmail.com') {
        return res.status(200).json({ 'username': 'testing' });
    } else {
        return res.status(200).json({ 'username': null });
    }
});

// POST /users
app.post("/users", (req, res) => {
    const email = req.body.email;
    if (email == 'test@gmail.com') {
        return res.status(200).json({ 'status': 'success' });
    } else {
        return res.status(200).json({ 'status': 'failed' });
    }
});
