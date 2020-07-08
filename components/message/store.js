const db = require('mongoose')

//mongodb://user:user1234@cluster0-shard-00-00.lftui.mongodb.net:27017,cluster0-shard-00-01.lftui.mongodb.net:27017,cluster0-shard-00-02.lftui.mongodb.net:27017/<dbname>?ssl=true&replicaSet=atlas-xuqmp7-shard-0&authSource=admin&retryWrites=true&w=majority


function addMessage(message){
    list.push(message)
}
function getMessage(){
    return list;
}
module.exports = {
    add: addMessage,
    list: getMessage,
    //get
    //update
    //delete
}