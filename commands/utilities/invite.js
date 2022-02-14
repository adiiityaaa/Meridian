module.exports = {
name: "invite",
description: "Sends invite link for Meridian.",
category: "Utilities",
type: 1,    
developerOnly: false,
voiceChannel: false,
mutualChannel: false,
djOnly: false,    
clientPerms: ["EMBED_LINKS", "USE_EXTERNAL_EMOJIS"],
authorPerms: [""],
run: async(client, interaction) => {        
const embed = new client.discord.MessageEmbed()
.setDescription(`${client.emotes.check} | **Click on the Button to Invite!**`)
.setFooter({ text: `Thanks for Considering Meridian!`, icon: client.user.displayAvatarURL() })
.setColor(client.colors.green)
const button = new client.discord.MessageButton()
  .setStyle("LINK")
  .setURL(`https://discord.com/api/oauth2/authorize?client_id=933686221727731794&permissions=274881342737&scope=bot%20applications.commands`)
  .setLabel(`Invite`)
const button2 = new client.discord.MessageButton()
  .setStyle("LINK")
  .setURL(`https://discord.gg/xe7GTYh9PR`)
  .setLabel(`Support`)
const row = new client.discord.MessageActionRow()
  .addComponents(button, button2);
await interaction.reply({ embeds: [embed], components: [row] })
}}