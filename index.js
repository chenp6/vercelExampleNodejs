import express from 'express'; //載入express框架模組
// import cors from 'cors'; 
import bodyParser from 'body-parser';

import * as dotenv from 'dotenv';
dotenv.config();



let app = express();


// app.use(cors({
//     origin: '*',
// }));

app.use(bodyParser.json());

app.listen(5000, () => {
    console.log(new Date() + "開始監聽port 5000!");
});

app.get("/users/:email", (req, res) => {
    const email = req.params.email;
    if (email == 'test@gmail.com') {
        return res.status(200).json({ 'username': 'testing' });
    } else {
        return res.status(200).json({ 'username': null });
    }
});


app.post("/users", (req, res) => {
    const email = req.body.email;
    if (email == 'test@gmail.com') {
        return res.status(200).json({ 'status': 'success' });
    } else {
        return res.status(200).json({ 'status': 'failed' });
    }
});
