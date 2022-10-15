const discord = require('discord.js')
module.exports = {
    nombre: 'normativazxfsfasfa',
    alias: ["normas","normativas","reglas","rules"],
    desc: "Envía un mensaje con todas las normativas",
    run: async(client, message, args) => {
        const rechazado = new discord.MessageEmbed()
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setColor("#EA4FFF")
        .setDescription("🔴 `¡No tienes permisos para utilizar este comando!` 🔴")
        const staff = ["738215060115292232", "738215059519438899", "738215054004191292","738366811451555941"]
        if(!staff.some(id => message.member.roles.cache.has(id))){
            message.delete()
            return message.channel.send(rechazado)
        }

        const embedmessage = new discord.MessageEmbed()
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setColor("#EA4FFF")
        .setTitle("NORMATIVAS FRESHLIFERP")
        .setDescription('**Normativa general** \n[Clickeame](https://docs.google.com/document/d/11to5lM-tpSZsg8Sx6xBRKsKaU38QO2Fh1auZmj6yYrU/edit?usp=sharing)\n\n **Normativa LSPD**\n[Clickeame](https://docs.google.com/document/d/1J5JRUae6diCQZ6gmbUO392sXLP5Y98nPTaDd7FVNQfg/edit?usp=sharing)\n\n**Normativa EMS**\n[Clickeame](https://docs.google.com/document/d/1_H19v1ND4xM616YAXque0feGvt_dBHaESBdXrWaYPjg/edit?usp=sharing) \n\n**Normativa mecánico**\n[Clickeame](https://drive.google.com/file/d/1ASJYZIMF6DHpeZVkm25InOYz7FtwGFoP/view)\n\n **Normativa taxista** \n[Clickeame](https://docs.google.com/document/d/144i7fR3Ik9DRtUFPAidCt2-MYJEUQTHCLAviqgPY0jw/edit) \n\n**Normativa de Vuelo** \n[Clickeame](https://docs.google.com/document/d/144i7fR3Ik9DRtUFPAidCt2-MYJEUQTHCLAviqgPY0jw/edit) \n\n**Normativa de Mafia** \n[Clickeame](https://docs.google.com/document/d/16BEQlUWonuDB1RExao8ZvyOoPeqEJSGBpHV2iCyV-E8/edit?usp=sharing)\n\n**Normativa Armero** \n[Clickeame](https://docs.google.com/document/d/19fuyKfBezV7KNKKQu-lvhlz0ZeMcnIi4tYZ59JZZsoo/edit?usp=sharing)')
        .setFooter("FreshLifeRP | Normativas","https://cdn.discordapp.com/attachments/838205203501154397/847928050942345286/logo_2d_tamano_real_sin_gorra.gif")
        message.channel.send(embedmessage)
    }
}