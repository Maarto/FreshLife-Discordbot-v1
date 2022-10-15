const discord = require('discord.js')

module.exports = {
    nombre: 'addwl',
    alias: ["agregarwhitelist", "agregarwl", "aprobar"],
    desc: "Darás rango WhiteList",
    run: async(client, message, args) => {
        const usuario = message.mentions.members.first() || message.guild.roles.resolve(args[0])
        const fallos = args[1]
        const canallogs = client.channels.resolve('852364011005018142')
        const canalpruebas = client.channels.resolve('824966712830459905')
        const nota = args.join(" ").slice(1)

        const exito = new discord.MessageEmbed()
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setColor("GREEN")
        .setDescription(`¡<@${message.author.id}> has dado whitelist a ${usuario} con éxito!`)
        const error = new discord.MessageEmbed()
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setColor("RED")
        .setDescription("**¡Ha ocurrido un error!**\n\n *Recuerda colocar `!addwl <usuario> <fallos>`*")

        const logs =  new discord.MessageEmbed()
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setColor("GREEN")
        .setDescription(`El Staff <@${message.author.id}> le ha dado WhiteList a ${usuario}`)
        .setFooter(`Staff: ${message.author.id} | Usuario: ${usuario} | FreshLife WhiteList`, "https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")

        const mensajeaprobado = new discord.MessageEmbed()
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setColor("GREEN")
        .setDescription(`**Felicidades** ${usuario}, has aprobado el examen con ${fallos} Fallos!` +"\n\n`¡Ya tienes acceso de postulación a todas las facciones y mafias!` \n\n "+ `\`Nota:\` *${nota}*`)

        const rechazado = new discord.MessageEmbed()
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setColor("#EA4FFF")
        .setDescription("🔴 `¡No tienes permisos para utilizar este comando!` 🔴")

        const staff = ["824972575011766272"]
        if(!staff.some(id => message.member.roles.cache.has(id))){
            message.delete()
            return message.channel.send(rechazado)
        }

        if(!usuario){
            message.delete()
            return message.channel.send(error)
        }

        if(!fallos){
            message.delete()
            return message.channel.send(error)
        }

        message.delete()
        usuario.roles.add("841030560948158540")
        message.author.send(exito)
        canallogs.send(logs)
        canalpruebas.send(mensajeaprobado)
        usuario.send(mensajeaprobado)
        
    }
}