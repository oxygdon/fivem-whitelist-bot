const { MessageEmbed } = require('discord.js')
const config = require("../config.json")
const disbut = require('discord-buttons');
require('discord-reply');



module.exports = {
        name: "zdane",

//////////////////////////////////////////////////////////////////////////////////// moduły        
    run: async (bot, message, args) => {

      const user = message.mentions.users.first();
      if(message.channel.id == config.wl.id_kanalu_dla_komenda) { // odpowiada gdzie komenda moze byc wpisana, banalne xD
      let rMember = message.mentions.members.first() || message.guild.members.cache.find(m => m.user.tag === args[0]) || message.guild.members.cache.get(args[0])
      let role = message.guild.roles.cache.find(r => r.id == config.wl.ranga) // ranga którą ustawiasz w configu po wpisaniu komendy
            let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
            if(!member) return message.lineReplyNoMention({embed: {
              color: 0xFF0000,
              description: "> Poprawne użycie: <@użytkownik> <hex>"
            }}); // instrukcja dla zjebuw
        
            await rMember.roles.add(role.id).catch(e => message.lineReplyNoMention("Bot nie posiada permisji")) // bot musi mieć wyższa rangę niż taką jaką chcemy dać komuś z bota

            let reason = args.slice(1).join(' ');
            if(!reason) reason = "nie wpisano"; // zastąpi pusty tekst
            
            member.send({embed: { // wiadomość na pv do osoby która zdała whitelistę
                color: 0x2ECC71,
                title: "Zdana Whitelista!",
                description: `> **Checker**: <@${message.author.id}>\n> **Informacja**: Wkrótce zostaniesz dodany na serwer`,
                timestamp: new Date(),
              }})
            .catch(error => message.channel.send(`wykryto blad? `)); // wykrycie błędu
            let zdane = new MessageEmbed() // embed zdania
            .setTitle("Zdana Whitelista!")
            .setColor("GREEN")
            .setFooter(message.guild.name, message.guild.iconURL())
            .setThumbnail(`${message.author.displayAvatarURL()}`)
            .setDescription(`> **Checker**: <@${message.author.id}>\n> **Użytkownik**: ${rMember} \n> **Id**: ${rMember.id}\n> **Hex**: ${reason}`)
            .setTimestamp()
            .setFooter(`${message.author.tag} `, `${message.author.displayAvatarURL()}`)

            message.delete({ timeout: 1000 }); // usunięcie twojej wiadomości
            console.log(`------------------------------------------------------------\n[LOG] ${message.author.tag} przepuscil ${rMember.id}\n------------------------------------------------------------`) // log

            message.channel.send(zdane)
            

    }
}}