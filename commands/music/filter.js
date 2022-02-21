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
options: [
    {
      name: "name",
      type: "STRING",
      description: "Name of the Filter which you want to add or remove.",
      required: true,
      choices: [
       {
              name: "DJ Roles",
              value: "djrole",
       },
       {
              name: "Request Channel",
              value: "requestchannel",
       },  
       {
              name: "Voice Channel Logs",
              value: "voicelogs",
       },  
       {
              name: "Everything",
              value: "everything",
       },
     ],
   },
 ],      
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