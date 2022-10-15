const discord = require('discord.js')
const client = new discord.Client()
let config = require('./config.json')
require('discord-buttons')(client);
client.config = config;
const {token, prefix} = require('./configuracion/settings.json')


/* <____________________________>*/

const fs = require('fs');
const chalk = require('chalk');
client.comandos = new discord.Collection();

/* <____________________________>*/

/**
 * -----------------------------------------------------------
 *          MONGOOSE DATA BASE CONNECT
 * -----------------------------------------------------------
*/

client.on("ready", async() => {
    let mongoose = require('mongoose')
    await mongoose.connect('mongodb://localhost/FreshLifeRP').then(
        console.log(`¡Conectado a la base de datos con éxito!`)
    )
    console.log(chalk.red(`¡BOT ENCENDIDO!\n\n${client.user.username}`))
    console.log(chalk.green("Developed by: MartoOo#3038"))

    // Intervalo de Estado //

    setInterval(() =>{
        const estados = [
            "¿Necesitas ayuda? | !ayuda",
            "Discord: discord.gg/freshliferp"
        ]
        const estado = estados[Math.floor(Math.random() * estados.length)]
        client.user.setActivity(estado, {url: "https://twitch.tv/martojordi" ,type: "WATCHING"})
    },10000)
})

for (const subcarpet of fs.readdirSync('./commands/')){
    for (const archi of fs.readdirSync(`./commands/${subcarpet}`)){
        let fileName = archi.substring(0, archi.length - 3);
        let comando = require(`./commands/${subcarpet}/${archi}`)
        client.comandos.set(comando.nombre, comando, fileName)
        console.log(chalk.blue('[✅]: '+ fileName + ` Fue cargado con éxito`))
    }
}

for(const file of fs.readdirSync('./events/')){
    if(file.endsWith(".js")){
        let fileName = file.substring(0, file.length - 3);

        let fileContents = require(`./events/${file}`);

        client.on(fileName, fileContents.bind(null, client));

        console.log(chalk.green('[✅]: '+ fileName + ` Fue cargado con éxito`))
    }
}

client.on("message", async(message) => {
    if(!message.guild) return;
    if(message.content.indexOf(prefix) !== 0) return;
    if(message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    let command = args.shift().toLowerCase();
    let cmd = client.comandos.get(command) || client.comandos.find((c) => c.alias.includes(command))
    if(cmd){
        return cmd.run(client, message, args)
    }

})

const { GiveawaysManager } = require('discord-giveaways');
client.giveawaysManager = new GiveawaysManager(client, {
    storage: "./database.json",
    updateCountdownEvery: 3000,
    default: {
        botsCanWin: false,
        embedColor: "#CF62DE",
        reaction: "🎉"
    }
});

client.login(token)