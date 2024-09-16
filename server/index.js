import express from 'express'
import cors from 'cors';
import dotenv from 'dotenv'
import {router as smsRoute} from './sms/sms.js'
const app = express();
const port = 7000;

dotenv.config({path: '/server/.env'});
app.use(cors({
    origin: 'http://localhost:1420'
  }));

app.use('/sms', smsRoute)

app.get('/dude', (req, res) => {
    console.log("getting dude")
    return res.json({status:200, message:"node works dude"})
})

app.listen(port, () => {
    console.log(`server is running at port ${port}`)
})