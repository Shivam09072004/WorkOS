import 'dotenv/config'; import { createApp } from './app.js';
createApp().listen(Number(process.env.PORT||4000),()=>console.log(`WorkOS API listening on ${process.env.PORT||4000}`));
