import express from 'express'; //載入express框架模組
import cors from 'cors';
import * as dotenv from 'dotenv';
dotenv.config();



let app = express();


app.use(cors({
    origin: '*',
}));


app.listen(3000 || process.env.PORT, () => {
    console.log(new Date() + "開始監聽port 3000!");
});

app.get("/username", async(req, res) => {
    const email = req.query.email;
    if (email == 'test@gmail.com') {
        return res.status(200).json({ 'username': 'testing' });
    } else {
        return res.status(200).json({ 'username': null });
    }
});