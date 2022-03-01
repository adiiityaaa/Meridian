module.exports = {
name: "help",
description: "Displays all the commands of the Bot!",
category: "Informative",
type: 1,
developerOnly: false,
voiceChannel: false,
mutualChannel: false,
djOnly: false,     
clientPerms: ["EMBED_LINKS", "USE_EXTERNAL_EMOJIS"],
options: [
      {
      name: "command",
      type: "STRING",
      description: "Optional help regarding Specific Command!",
      required: false,
    },
  ],        
run: async(client, interaction) => { 
let command = interaction.options.getString("command");
const notfound = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Command ${command} not found.**`)    
if(!command) {
const configarray = [];
const infoarray = [];
const musicarray = [];
const playarray = [];    
const utilarray = [];
const modarray = [];
const levelarray = [];
client.commands.forEach(x => { 
if(x.category === "Configuration") { configarray.push(`\`${x.name}\``) }
else if(x.category === "Informative") { infoarray.push(`\`${x.name}\``) }
else if(x.category === "Levelling") { levelarray.push(`\`${x.name}\``) }
else if(x.category === "Music") { musicarray.push(`\`${x.name}\``) }
else if(x.category === "Playlist") { playarray.push(`\`${x.name}\``) }    
else if(x.category === "Utilities") { utilarray.push(`\`${x.name}\``) } 
else if(x.category === "Moderative") { modarray.push(`\`${x.name}\``) }    
})
const embed = new client.discord.MessageEmbed()
.setColor(client.colors.green)
.setDescription(`${client.emotes.music} | **${client.user.username} Help Menu!**\n\n${client.emotes.parrow} Prefix: \`/\`\n${client.emotes.parrow} Total Commands: ${client.commands.size}\n${client.emotes.parrow} Total Categories: 6`)
.addField(`${client.emotes.dot} Configuration [${configarray.length}]:`, `${configarray.join(", ")}`)
.addField(`${client.emotes.dot} Informative [${infoarray.length}]:`, `${infoarray.join(", ")}`)
.addField(`${client.emotes.dot} Levelling [${infoarray.length}]:`, `Coming Soon!`)
.addField(`${client.emotes.dot} Moderative [${modarray.length}]:`, `${modarray.join(", ")}`)
.addField(`${client.emotes.dot} Music [${musicarray.length}]:`, `${musicarray.join(", ")}`)
.addField(`${client.emotes.dot} Playlist [${playarray.length}]:`, `Coming Soon!`)
.addField(`${client.emotes.dot} Utilities [${utilarray.length}]:`, `${utilarray.join(", ")}`)
.setThumbnail(client.user.displayAvatarURL)        
const button = new client.discord.MessageButton()
  .setStyle("LINK")
  .setURL(`https://meridian.gitbook.io/meridian-documentation/`)
  .setLabel(`Documentation`)
const button2 = new client.discord.MessageButton()
  .setStyle("LINK")
  .setURL(`https://discord.gg/xe7GTYh9PR`)
  .setLabel(`Support`)
const row = new client.discord.MessageActionRow()
  .addComponents(button, button2);
await interaction.reply({ embeds: [embed], components: [row] })    
} else {   
let alias = client.commands.get(command.toLowerCase());
if(!alias) { return interaction.reply({ embeds: [notfound] }) }    
const cmembed = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Command Information:**\n\n${client.emotes.parrow} Name: ${alias.name}\n${client.emotes.parrow} Category: ${alias.category}\n${client.emotes.parrow} Description: ${alias.description}\n${client.emotes.parrow} Voice Channel Required: ${alias.voiceChannel}\n${client.emotes.parrow} Bot Permissions: ${alias.clientPerms}`)
interaction.reply({ embeds: [cmembed] })
}}}    