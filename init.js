const mongoose = require('mongoose');
const Chat = require('./models/chat.js');

main().then(() => {
    console.log("connection successfull")
})
.catch(err => console.log(err));


async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
        from: "neha",
        to: "preeti",
        msg: "sned me note for the exam",
        created_at: new Date(),
    },
    {
        from: "peter",
        to: "gwen",
        msg: "I love you gwen, stay with me.",
        created_at: new Date(),
    },
    {
        from: "kamado tanjiro",
        to: "muzan",
        msg: "I will kill you muzan",
        created_at: new Date(),
    },
    {
        from: "tony stark",
        to: "captain amarica",
        msg: "let's go, thanos is coming on earth.",
        created_at: new Date(),
    },
    {
        from: "MJ",
        to: "Spiderman",
        msg: "i miss you peter",
        created_at: new Date(),
    },

];

Chat.insertMany(allChats);

// let chat1 = new Chat({
//     from: 'Afreen',
//     to: 'Farheen',
//     msg: "I am coming home at 5:10 o'clock.",
//     created_at: new Date()
// });

// chat1.save().then((res) => { //UTC
//     console.log(res);
// });