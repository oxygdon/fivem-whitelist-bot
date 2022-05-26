const Discord = require("discord.js");
const { Client, Collection } = require("discord.js");
const db = require(`quick.db`)
const config = require("../config.json")
const fs = require("fs");
const szczek = new Set();
require('discord-reply');
const szczek2 = new Set();
const moment = require('moment');
const ms = require(`ms`)
const { error } = require("console");
const process = require('process');


module.exports = {
    name: "pytanie",
  
    run: async (bot, message, args) => {
    // const role = message.guild.roles.cache.get('966354404464795668');        (mozilowsc wlaczenia)
    // if(message.channel.id == config.otworz.id_kanalu_dla_komendanta) {       (mozilowsc wlaczenia)

//////////////////////////////////////////////////////////////////////////////////// moduły        

   const pytania = [ //pytania
    `w jaki sposób użyłbyś komendy **me**, **do**, **try** podczas przechodzenia obok śmietnika?`,
    `gdzie żyjemy?`,
    `czym jest lore?`,
    `jakie są wyspy w gta 5?`,
    `czym są dla ciebie metazwroty?`,
    `co zrobisz jeśli ktoś ci powie, że boli go głowa?`,
    `czym jest powergaming?`,
    `jaki **typ** powergamingu jest dozwolony?`,
    `kto ma prawo do korzystania z powergamingu?`,
    `jak byś wyjaśnił niewidomej osobie czym jest pomarańcz?`,
    `jak byś nazwał swój debiutancki album muzyczny i jakbyś go rozporomował?`,
    `jak opisałbyś sytuację którą nazwałbyś dobrym roleplay'em?`,
    `jaki byś wymyślił event dla graczy?`,
    `jak byś opisał neardelteczykowi co to jest laptop i na czym polega?`,
    `jestes na środku pustyni i musisz odejść od kompa. odegraj to inaczej niż pisząc na looc i pójścia do toalety`,
    `wisisz sporą kasę gangowi, niedługo sie masz się z nimi spotkać. niestety nie masz dla nich tych pieniędzy, jak szybko uzyskasz pieniadze?`,
    `byłeś na imprezie na której bardzo się nachlałeś. Budzisz się w lesie, bez ubrań, bez niczego. Jak dotrzesz do domu?`,
    `Wygrałeś na loterii sporą sumę pieniędzy. Co zrobisz z wygranymi pieniędzmi?`,
    `w jaki sposób wszedłbyś na zamkniętą imprezę?`,
    `zostałeś skazany na karę śmierci. Jakie są twoje ostatnie słowa oraz posiłek?`
];

const random = Math.floor(Math.random() * (pytania.length - 5) + 5); // maszyna losująca



   const botinfoembed = new Discord.MessageEmbed() // embed
    .setTitle(`Wygenernowano losowe pytanie!`) // tytul
    .setDescription(`> ${pytania[random]}`) // opis
   .setColor("GREEN") // kolor
   message.lineReplyNoMention(botinfoembed) // wyslanie wiadomosci
   }   

}