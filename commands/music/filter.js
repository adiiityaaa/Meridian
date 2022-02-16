module.exports = {
name: "filter",
description: "Enable or Disable a Filter!",
category: "Music",
type: 1,
developerOnly: false,
voiceChannel: true,
mutualChannel: true,
djOnly: true,     
clientPerms: ["EMBED_LINKS", "USE_EXTERNAL_EMOJIS"],
run: async(client, interaction) => {
const noq = client.embeds.noplay(client);        
const already = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Player has been Paused.**`)  
const enable = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Enabled the Filter.**`)  
const disable = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Filter has been Cleared.**`)  
const player = client.manager.players.get(interaction.guild.id);
if(!player) { return interaction.reply({ embeds: [noq] }) }
if(player) {
if(!player.queue) { return interaction.reply({ embeds: [noq] }) }
if(!player.playing) { return interaction.reply({ embeds: [already] }) }   
    
}}}    