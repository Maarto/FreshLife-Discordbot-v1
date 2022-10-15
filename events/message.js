const discord = require('discord.js')
module.exports = async (client, message, channel) => {
    if (message.author.bot) return;
    if(!message.guild) return;
    const staff = ["829880807799128114","817978346343890964","738215060115292232", "738215059519438899", "738215054004191292","738366811451555941", "824356462586363994", "790425188465377280", "799403097687326750", "738215062023438339", "738215061323251722"]
    const palabras = ["free", "bambi", "fan", "cut", "cutea", "ramdom", "coño", "pancho", "Gilipollas", "inútil", "tonto", "imbécil", "maricon", "hijo de puta", "triplehijueputa", "gonorreamalparido", "rata", "muerto de hambre", "verga", "cago"]

    const rechazado = new discord.MessageEmbed()
    .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
    .setColor("#EA4FFF")
    .setDescription("🔴 `¡Tú mensaje ha sido eliminado!` 🔴 \n\n Detectamos que puede ser posible toxicidad, puedes ser sancionado por esto! \n`Controlate.`")

    const privado = new discord.MessageEmbed()
    .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
    .setColor("#EA4FFF")
    .setDescription("🔴 `¡Tú mensaje ha sido eliminado!` 🔴 \n\n Detectamos que puede ser posible toxicidad, puedes ser sancionado por esto! \n\n*Deja de enviar mensajes tóxicos para evitar ser sancionado y expulsado de la comunidad.*\n\n`Controlate.`")

    const logs = new discord.MessageEmbed()
    .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
    .setColor("#EA4FFF")
    .setDescription(`El usuario ${message.author} ha enviado un mensaje prohibido en el Discord! \n **Mensaje:**\n\n\`${message}\``)
    .setFooter("Usuario:" + ` ${message.author.id}`)

    const canal = client.channels.resolve('825090965886861369')
    
    if(!staff.some(id => message.member.roles.cache.has(id))){
        if(palabras.some(word => message.content.toLowerCase().includes(word))){
            message.delete()
            message.author.send(privado)
            canal.send(logs)
            return message.channel.send(rechazado).then(m => m.delete({timeout: 10000}))
        }
    }

    let advertenciaMensajeF = new discord.MessageEmbed()
    .setDescription(`\`¡No puedes comentar en FreshClips!\` \n\n**¡PUEDES SER BANEADO!**`)
    .setColor('RED')
    .setThumbnail("https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
    .setTitle('FreshLifeRP | BOT')

    let advertenciaMensajeFoto = new discord.MessageEmbed()
    .setDescription(`\`¡No puedes comentar en Foto!\` \n\n**¡PUEDES SER BANEADO!**`)
    .setColor('RED')
    .setThumbnail("https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
    .setTitle('FreshLifeRP | BOT')


    // Instagram //

    // if(message.channel.id === "861979891238830083"){

    //     let igEmbed = new discord.MessageEmbed()
    //     .setAuthor(message.member.user.tag, message.member.user.displayAvatarURL({dynamic: true, format: 'png'}))
    //     .setDescription(`**El usuario ${message.member} ha comentado:**\n\n\`\`\`${message.content}\`\`\``)
    //     .setColor("#C78AEE")
    //     .setFooter("Instagram", "https://w7.pngwing.com/pngs/722/1011/png-transparent-logo-icon-instagram-logo-instagram-logo-purple-violet-text.png")

    //     if(message.member.hasPermission("ADMINISTRATOR")){
    //         return;
    //     }
        
    //     if(!message.attachments.first()){
    //         message.delete()
    //         message.channel.send(igEmbed)
    //     }
    // }


    // FreshClips //

    if(message.channel.id === "775999621905252372"){
        if(!staff.some(id => message.member.roles.cache.has(id))){
            if(!message.attachments.first()){
                message.member.send(advertenciaMensajeF)
                return message.delete()
            }
        }
    }

    // Fotos //

    if(message.channel.id === '868703788448505866'){
        if(!staff.some(id => message.member.roles.cache.has(id))){
            if(!message.attachments.first()){
                message.member.send(advertenciaMensajeFoto)
                return message.delete()
            }
        }
    }

}