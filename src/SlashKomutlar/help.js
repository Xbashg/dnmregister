const { CommandInteraction } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
const {MessageActionRow, MessageSelectMenu} = require('discord.js')
const Discord = require('discord.js')
const db = require('quick.db')
module.exports = { data: new SlashCommandBuilder()
    .setName("help")//Hyper Of Arsenic - Register
    .setDescription(`Yardım Komutudur.`),
	
    /**
     * @param { CommandInteraction } interaction 
     */
    async execute(interaction) {
 let embed = new Discord.MessageEmbed()
.setDescription(`Hyper Of Arsenic - Register!`)
.addField(`/register`, `Kayıt Komutudur. Erkek Kız Seçim Menüsü Vardır.`, true)
.addField(`/config`, `Bayan Üye, Erkek Üyeye Verilecek Rol Burdan Ayarlanır. Ayrıca Komutu Kullanacak Rol De Buradan Ayarlanıyor.`, true)
.setColor(`RANDOM`)
.setFooter({ text: `Hyper Of Arsenic - Register!`, iconURL: "https://media.discordapp.net/attachments/1024706404294082690/1042520706350592090/tester1.png?width=473&height=473"})
.setTimestamp()
interaction.reply({ embeds: [embed]})
//Hyper Of Arsenic - Register!
}
}