const db = require('mongoose')
const Model = require('./model')
const MONGO_URI = 'mongodb+srv://user:user1234@cluster0.lftui.mongodb.net/messages?retryWrites=true&w=majority'

db.Promise = global.Promise;

db.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{console.log('[db] Conectada con exito')})
    .catch(err => console.error('[db]', err));

function addMessage(message){
    console.log('Mensaje añadido')
    const myMessage = new Model(message);
    myMessage.save()
}
async function getMessage(filterUser){
    let filter = {}
    if(filterUser !== null){
        filter = {user: filterUser}
    }
    const messages = await Model.find(filter)
    return messages;
}
async function updateText(id, message){
    const foundMessage = await Model.findOne({
        _id: id
    })
    foundMessage.message = message
    const newMessage = await foundMessage.save()
    return newMessage;
}
module.exports = {
    add: addMessage,
    list: getMessage,
    updateText: updateText
    //delete
}