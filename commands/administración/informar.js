let discord = require('discord.js');
const ms = require('ms');

module.exports = {
    nombre: 'informar',
    alias: [],
    descripcion: "Envia un mensaje al dm del usuario al que gustas informar",
    run: async (client, message, args) => {

        let informante = message.member;
        let informado = message.mentions.members.first() || message.guild.roles.resolve(args[0])
        if (!informado) return message.channel.send('馃敶 隆Algo ha fallado, recuerda colocar \`.informar ID/@usuario <Mensaje>\`');

        let filter = (m) => m.author.id === message.author.id;
        let collector = new discord.MessageCollector(message.channel, filter, {max: 2, time:60000, errors: ['time']})

        collector.on('collect', async(message, col) => {

            message.channel.send(`驴Cual es la raz贸n del informe? (Raz贸n breve)`)
            console.log(`Mensajes recolectados: ${message.content}`)
        })
        
        collector.on('end', async(collected) => {
            message.channel.send(``)
        })

        // let filter = (m) => m.author.id === message.author.id

        // message.channel.send('驴Cual es la Raz贸n del informe? (Comentario breve)')
        // message.channel.awaitMessages(filter, {max: 2, time: 60000, errors: ['time']}).then( async(collected) => {
        //     let raz贸n = collected.first()
        //     let informacion = collected.second()
        // }).then(async(m) => {
        //     console.log(m)

        //     // let Informaci贸nEnviado = new discord.MessageEmbed()
        //     // .setDescription(`**__Buenos d铆as ${informado}!__ >> __este mensaje es enviado desde el servidor de FreshLifeRP para informarte por__ \`${raz贸n}\`**\n\n\`\`\`${informe}\`\`\``)
        //     // .setColor("GREEN")
        //     // .setFooter(`Remitente: ${informante.user.username}`, informante.user.displayAvatarURL({dinamyc: true}))
        //     // informado.send(Informaci贸nEnviado).catch((err) => console.log(err))
        // })

        // // message.channel.awaitMessages(filter, { max: 1, time: 5000, errors: ['time']}).then((m) => {

        // //     let msg = m.first()

        // //     message.channel.send(`He escuchado ${m.size} mensajes > ${msg}`)
        // //     console.log(msg.content)
        // // }).catch((err) => console.log(err))
    }
}