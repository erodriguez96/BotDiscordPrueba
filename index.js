const Discord = require('discord.js');

const client = new Discord.Client();

client.once('ready', () => {
    console.log('El bot está online putos!');
});


const prefix = '!!';

const fs = require('fs'); //https://nodejs.org/api/fs.html

client.commands = new Discord.Collection(); //crea una coleccion de discord, cosas de la api...

//esto de ahora es para comprobar que los ficheros son javascript y no otra mierda asegurando comandos
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

//se busca el comando correcto (vamos el fichero que corresponda al comando a ejecutar)
for (const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);

    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        //console.log("klk boys : " + message + " " + args);
        client.commands.get('ping').execute(message, args);
    }
});

//aquí va el token del bot en sí (regenerar, porque ese token está inservible)
client.login('NzkwMzM1MDE1MTgyNzk0Nzgy.X9_G1w.ws6ck8Z4o6uSh0lgAwWEWYaHnW0');

