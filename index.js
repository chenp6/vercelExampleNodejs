import express from 'express'; //載入express框架模組
import cors from 'cors';
import * as dotenv from 'dotenv';
dotenv.config();



let app = express();


app.use(cors({
    origin: '*',
}));


app.listen(5000, () => {
    console.log(new Date() + "開始監聽port 5000!");
});

app.get("/users/:email", async(req, res) => {
    const email = req.params.email;
    if (email == 'test@gmail.com') {
        return res.status(200).json({ 'username': 'testing' });
    } else {
        return res.status(200).json({ 'username': null });
    }
});
