const Discord = require("discord.js")
require('discord-reply');

module.exports = {
    name: "embed",

//////////////////////////////////////////////////////////////////////////////////// moduły
    
    run: async (client, message, args) => { // async

    require("./eoeooddychacniemoge.js") // line reply

    const con = message.content

    const argssplited = con.split('|'); // oddzielenie

if (!args[0]) { // brak argumentow
    const podajtresc = new Discord.MessageEmbed() // embed
    .setDescription("> Poprawne użycie: embed <#hex> | <tytuł> | <treść>") // opis
    .setColor("RED") // kolor
    message.lineReplyNoMention(podajtresc); // wyslanie wiadomosci
    return;
}

if (!argssplited[2]) { // brak argumentow2
    const podajtresc = new Discord.MessageEmbed() // embed2 
    .setDescription("> Poprawne użycie: =embed <#hex> | <tytuł> | <treść>") // opis2
    .setColor("RED") // kolor2
    message.lineReplyNoMention(podajtresc) // wyslanie wiadomosci2
    return;
}

const tresc = argssplited[2] // odosobienie argumentow



if (tresc) { // jesli tresc xd
    const embed_custom = new Discord.MessageEmbed() // embed
    .setTitle(argssplited[1]||' ')  // tytul 
    .setDescription(argssplited[2]) // opis
    .setColor(`${args[0]}`) // kolor
    .setFooter(`${message.author.tag} `, `${message.author.displayAvatarURL({ dynamic: true })}`) // footer
    .setTimestamp(); // czas
    console.log(`------------------------------------------------------------\n[LOG] ${message.author.tag} tworzy embed\n------------------------------------------------------------`) // log
    message.channel.send(embed_custom) // wyslanie wiadomosci
    return  message.delete() // usuniecie twojej wiadomosci
    
}
   }
            }


// by maciek <3