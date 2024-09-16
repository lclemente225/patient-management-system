import { Router } from 'express';
import twilio from 'twilio';
import dotenv from 'dotenv'

const router = Router();
const envDir = '/server/.env'; 
const path = process.cwd() + envDir;
dotenv.config({path});
const twilioAccountSid = process.env.TWILIO_USER_ID;
const twilioAuthToken = process.env.TWILIO_KEY;
const sourcePhone = process.env.TWILIO_NUM
const client = twilio(twilioAccountSid, twilioAuthToken);
const messageResponse = twilio.twiml.MessagingResponse

async function createMessage(req, res) {
  try{
      const message = await client.messages.create({
        body: "You have a freakin appointment tomorrow bro",
        from: sourcePhone,
        to: "+14086878163",
       });
  return res.json({"status": 200, "message": message.body})
  } catch {
    return res.json({"status": 500, "message": "Server Error"})
  }
}

router.post("/incoming-message", (req, res) => {
  const twiml = new messageResponse();
  twiml.message("Thank you for confirming your appointment.");
  res.end(twiml.toString());
});

router.post('/send-SMS', (req, res) => createMessage(req, res))

router.get('/test', (req, res) => {
  return res.json({"message": "sms works"})
})

export {router}