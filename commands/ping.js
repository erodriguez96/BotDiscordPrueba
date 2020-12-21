module.exports = {
    name: 'ping',
    description: 'responde pong! cuando le dices ping',
    execute(message, args){
        message.channel.send('pong!');
    }
}