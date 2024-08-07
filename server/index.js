import express from "express";
import cors from 'cors';
const app = express();
const port = 3000;

app.use(cors({
    origin: 'http://localhost:1420'
  }));


app.get('/dude', (req, res) => {
    console.log("getting dude")
    return res.json({status:200, message:"node works dude"})
})

app.listen(port, () => {
    console.log(`server is running at port ${port}`)
})