module.exports = {
name: "vote",
description: "Support developers by voting for Meridian!",
category: "Utilities",
type: 1,    
developerOnly: false,
voiceChannel: false,
mutualChannel: false,
djOnly: false,    
clientPerms: ["EMBED_LINKS", "USE_EXTERNAL_EMOJIS"],
authorPerms: [""],
run: async(client, interaction) => {        
const embed = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Your vote Matters! Please vote below:**`)
const button = new client.discord.MessageButton()
  .setStyle("LINK")
  .setURL(`https://top.gg/bot/933686221727731794`)
  .setLabel(`TOPGG`)
const button2 = new client.discord.MessageButton()
  .setStyle("LINK")
  .setURL(`https://discordbotlist.com/bots/meridian`)
  .setLabel(`DBL`)
const row = new client.discord.MessageActionRow()
  .addComponents(button, button2);
await interaction.reply({ embeds: [embed], components: [row] })
}}