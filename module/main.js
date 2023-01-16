const sendNoti = require("./noti");
const saveFile = require("./file");
const db = require("./db");
// const {storeDatabase} = require("./db");

async function createFeed(message, image){

  await saveFile(image);

  await db.storeDatabase(message);
  // await storeDatabase(message);
  

  await sendNoti(message,userId);

  
}
