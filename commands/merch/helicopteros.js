const discord = require('discord.js')

module.exports = {
    nombre: 'helicoptero',
    alias: [],
    desc: "Muestra imágenes y precios de los Helicopteros",
    run: async(client, message, args) => {
        const helimenu = new discord.MessageEmbed()
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setColor("#EA4FFF")
        .setDescription("**¿Quieres saber los precios y foto de los Helicópteros?**\n\n`Havok` = !helicoptero 1\n\n`Supervoltio2` = !Helicoptero 2\n\n `Volatus` = !Helicoptero 3\n\n `Luxor2` = !helicoptero 4")
        .setTitle("- Menú principal de Helicópteros -")
        const heli1 = new discord.MessageEmbed()
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setColor("#EA4FFF")
        .setDescription("\n`Precio:` **10€**")
        .setImage("https://cdn.discordapp.com/attachments/813271026166530068/813271917498335243/unknown.png")
        .setTitle("- Helicóptero > HAVOK < -")
        const heli2 = new discord.MessageEmbed()
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setColor("#EA4FFF")
        .setDescription("\n`Precio:` **20€**")
        .setImage("https://cdn.discordapp.com/attachments/813271026166530068/813272253981655110/unknown.png")
        .setTitle("- Helicóptero > SUPERVOLTIO2 < -")
        const heli3 = new discord.MessageEmbed()
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setColor("#EA4FFF")
        .setDescription("\n`Precio:` **30€**")
        .setImage("https://cdn.discordapp.com/attachments/813271026166530068/813272455396196352/unknown.png")
        .setTitle("- Helicóptero > VOLATUS < -")
        const heli4 = new discord.MessageEmbed()
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setColor("#EA4FFF")
        .setDescription("\n`Precio:` **40€**")
        .setImage("https://cdn.discordapp.com/attachments/813271026166530068/813273046097068052/unknown.png")
        .setTitle("- Helicóptero > LUXOR2 < -")

        const rechazado = new discord.MessageEmbed()
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setColor("#EA4FFF")
        .setDescription("🔴 `¡No tienes permisos para utilizar este comando!` 🔴")

        const staff = ["817978346343890964", "829880807799128114", "824356462586363994", "790425188465377280", "799403097687326750", "738215062023438339", "738215061323251722", "738215060115292232", "738215059519438899"]
        if(!staff.some(id => message.member.roles.cache.has(id))){
            message.delete()
            return message.channel.send(rechazado)
        }

        if(!args[0]){
            message.delete()
            return message.channel.send(helimenu)
        }

        if(args[0] === '1'){
            message.delete()
            return message.channel.send(heli1)
        }

        if(args[0] === '2'){
            message.delete()
            return message.channel.send(heli2)
        }

        if(args[0] === '3'){
            message.delete()
            return message.channel.send(heli3)
        }


        if(args[0] === '4'){
            message.delete()
            return message.channel.send(heli4)
        }

    }
}
