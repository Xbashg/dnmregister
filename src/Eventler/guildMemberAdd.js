const { Listener } = require('discord-akairo');
const { GuildMember } = require('discord.js')
const Discord = require('discord.js')
const db = require('quick.db')

module.exports = class extends Listener {
    constructor() {
        super("guildMemberAdd", {
            emitter: "client",
            event: "guildMemberAdd",
            category: "client"
        })
    }
    /**
     * @param { GuildMember } member
     */
    async exec(member) {
let loginChannel = db.fetch(`loginChannel_${member.guild.id}`) 
let unRegisteredRole = db.fetch(`unRegisteredRole_${member.guild.id}`)   
let staffRole = db.fetch(`staffRole_${member.guild.id}`)
let channel = loginChannel
var moment = require("moment")
require("moment-duration-format");
moment.locale("tr");
member.setNickname(`✰ İsim | Yaş`) 
let unRegistered = unRegisteredRole
await member.roles.add(unRegistered);
let kullanıcı = this.client.users.cache.get(member.id);
const kurulus = new Date().getTime() - kullanıcı.createdAt.getTime();  
let staff = staffRole
const mapping = {
  " ": "   ",
   '0': '<a:0x:1042708122592092170>',
    '1': '<a:1x:1042708127050637322>',
              '2': '<a:2x:1042708131228164147>',
              '3': '<a:3x:1042708135447629894>',
              '4': '<a:4x:1042708893668749312>',
              '5': '<a:5x:1042708910458556436>',
              '6': '<a:6x:1042708929316139008>',
              '7': '<a:7x:1042708945174810654>',
              '8': '<a:8x:1042708961150910476>',
              '9': '<a:9x:1042708984160858163>'
}
  let üyesayısı =   `${member.guild.memberCount.toString()}`
     .split("")
     .map(c => mapping[c] || c)
     .join("")

var kontrol;
if (kurulus < 1296000000) {
member.roles.add('910268287496101890');
member.roles.remove(kayıtsız);
kontrol = `**Hesap Durumu: Güvenilir Değil** <a:red:924651368097144862>`
}
if (kurulus > 1296000000) kontrol = `**Hesap Durumu: Güvenilir** <a:tik:976917519795376129>`

const kuruluss = new Date().getTime() - kullanıcı.createdAt.getTime();  
const gecen = moment.duration(kuruluss).format(`YY **[Yıl,]** DD **[Gün,]** HH **[Saat,]** mm **[Dakika,]** ss **[Saniye]**`) 
const embed = new Discord.MessageEmbed()
.setTitle(` Aramıza Yeni Bir Kullanıcı Katıldı,<a:kelebek:928101797980143617> ${member.user.username}`)
.setThumbnail(member.user.avatarURL({ dynamic: true }))
.setDescription(`<a:danspisi:926276078799056946> • **Sunucumuza Hoş Geldin** ${kullanıcı} !

<a:ates:976917502934257715>  • **Seninle Beraber Sunucumuzda `+ üyesayısı +` Değerli İnsan Oldu.**

<a:SabitGif:924651370194305024> • **Hesabın \``+ gecen +`\` Önce Oluşturulmuş.**

<a:bekleme:973867363025973308> • `+ kontrol +`

<a:Dans:926141527225425970>  • <@&${staff}> **Rolündeki Yetkililer Seninle İlgilenicektir.**

`)
.setColor("RANDOM")
this.client.channels.cache.get(channel).send({ content: `<@&${staff}>`, embeds: [embed]})

}


}