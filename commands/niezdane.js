const { MessageEmbed } = require('discord.js')
const config = require("../config.json")
require('discord-reply');

module.exports = {
        name: "niezdane",

//////////////////////////////////////////////////////////////////////////////////// moduły
        
    run: async (bot, message, args) => {
        const user = message.mentions.users.first();
        if(message.channel.id == config.blacklista.id_kanalu_dla_komendusia) { // gdzie mozna uzywac komendy (ustawiane w configu)
    
          let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
          let role = message.guild.roles.cache.find(r => r.id == config.blacklista.ranga)
          let rMember = message.mentions.members.first() || message.guild.members.cache.find(m => m.user.tag === args[0]) || message.guild.members.cache.get(args[0])
//////////////////////////////////////////////////////////////////////////////////// nie tykaj

          await member.roles.add(role.id).catch(e => message.lineReplyNoMention("bot nie posiada permisji")) // nie trzeba tlumaczyc
            if(!member) return message.lineReplyNoMention({embed: { // błędne uzycie komendy
                color: 0xFF0000,
                description: "> Poprawne użycie: <@użytkownik> <hex> <powód>"
              }});
        
            let reason = args.slice(1).join(' '); 
            if(!reason) reason = "nie podano"; // nie wpisanie hexa/powodu
            
            member.send({embed: { // wiadomośc wysyłana na pv do osoby która niezdała
                color: 0xFF0000,
                title: "Niezdana Whitelista!",
                description: `> **Checker:** <@${message.author.id}>\n> **Powód**: ${reason}`,
                timestamp: new Date(),
              }})
            .catch(error => message.channel.send(`wykryto blad? `)); // wykrycie błędu
            let niezdane = new MessageEmbed() // embed niezdania
            .setTitle("Niezdana Whitelista!") // tytul
            .setColor("RED") // kolor
            .setThumbnail(`${message.author.displayAvatarURL()}`) // ikona 
            .setDescription(`> **Checker**: <@${message.author.id}>\n> **Użytkownik**: <@${member.user.id}>\n> **Id**: ${member.user.id}\n> **Hex/Powód**: ${reason}`) // opis
            .setTimestamp() // czas
            .setFooter(`${message.author.tag} `, `${message.author.displayAvatarURL()}`) // footer

            console.log(`------------------------------------------------------------\n[LOG] ${message.author.tag} odrzucil ${rMember.id}\n------------------------------------------------------------`) // log

            message.delete({ timeout: 1000 }); // usuniecie twojej wiadomosci

            message.channel.send(niezdane) // wyslanie wiadomosci

    }
}}