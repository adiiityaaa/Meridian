module.exports = {
name: "leave",
description: "Make the Bot leave your Voice Channel!",
category: "Music",
type: 1,
developerOnly: false,
voiceChannel: true,
mutualChannel: true,
djOnly: true,     
clientPerms: ["EMBED_LINKS", "USE_EXTERNAL_EMOJIS"],
run: async(client, interaction) => {
  const embed = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Left your Voice Channel.**`)    
  const already = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Client not connected to Voice Channel.**`)    
  const plcheck = client.manager.players.get(interaction.guild.id);
  if(!plcheck) { interaction.reply({ embeds: [already] }) }
 if(plcheck.state === "CONNECTED") { await plcheck.destroy()
 interaction.reply({ embeds: [embed] })  }
}}    