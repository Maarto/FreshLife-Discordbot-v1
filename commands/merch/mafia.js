const discord = require('discord.js')
module.exports = {
    nombre: "mafia",
    alias: [],
    desc: "Muestras los Packs de Mafias.",
    run: async(client, message, args) => {
        const mafia0 = new discord.MessageEmbed()
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setColor("#EA4FFF")
        .setDescription("**¿Quieres saber los precios y descripción de las Mafias?**\n\n`Pack 1` = !mafia 1\n\n`Pack 2` = !mafia 2\n\n `Pack 3` = !mafia 3")
        .setTitle("- Menú principal de Mafias -")

        const mafia1 =  new discord.MessageEmbed()
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setColor("#EA4FFF")
        .setTitle("- Pack Default Mafia -")
        .setDescription("🔥 `Precio` = **50€** \n\n🔸 **2 autos exclusivos** \n\n🔸 **Rango personalizado**\n\n🔸 **20 Slots**\n\n🔸 **Sede**\n\n🔸 **Menú de mafia (Opciones cachear, esposar, etc)**\n\n🔸 **Punto de compra de armas, armario y garage (Incluídos en la sede)**")

        const mafia2 =  new discord.MessageEmbed()
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setColor("#EA4FFF")
        .setTitle("- Pack VIP Mafia -")
        .setDescription("🔥 `Precio` = **95€** \n\n🔸 **3 autos exclusivos** \n\n🔸 **Rango personalizado**\n\n🔸 **20 Slots**\n\n🔸 **Sede a elección**\n\n🔸 **Menú de mafia (Opciones cachear, esposar, etc)**\n\n🔸 **Punto de compra de armas, armario y garage (Incluídos en la sede)** \n\n🔸 **1 Helicoptero**")

        const mafia3 =  new discord.MessageEmbed()
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setColor("#EA4FFF")
        .setTitle("- Pack Premium Mafia -")
        .setDescription("🔥 `Precio` = **150€** \n\n🔸 **4 autos exclusivos** \n\n🔸 **Rango personalizado**\n\n🔸 **20 Slots**\n\n🔸 **Sede a elección**\n\n🔸 **Menú de mafia (Opciones cachear, esposar, etc)**\n\n🔸 **Punto de compra de armas, armario y garage (Incluídos en la sede)** \n\n🔸 **1 Helicoptero** \n\n🔸 **2 Blindados**")

        const error = new discord.MessageEmbed()
        .setAuthor("FreshLifeRP","https://cdn.discordapp.com/attachments/847336241490034701/851600464075423754/512x512_sin_mov.png")
        .setColor("RED")
        .setDescription("**¡Error!, coloca `!mafia` para ver los comandos**")
        
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
            message.channel.send(mafia0)
        }

        if(args[0] === "1"){
            message.delete()
            message.channel.send(mafia1)
        }

        if(args[0] === "2"){
            message.delete()
            message.channel.send(mafia2)
        }

        if(args[0] === "3"){
            message.delete()
            message.channel.send(mafia3)
        }
    }   
}