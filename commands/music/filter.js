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
              name: "8D",
              value: "eightd",
       },
       {
              name: "Bassboost",
              value: "bassboost",
       },
       {
              name: "Chipmunk",
              value: "chipmunk",
       },
       {
              name: "Darthvader",
              value: "darthvader",
       },
       {
              name: "Earrape",
              value: "earrape",
       },          
       {
              name: "Karaoke",
              value: "karaoke",
       },
       {
              name: "Nightcore",
              value: "nightcore",
       },
       {
              name: "Pitch",
              value: "pitch",
       },           
       {
              name: "Pop",
              value: "pop",
       },          
       {
              name: "Reset",
              value: "reset",
       },          
       {
              name: "Slowmo",
              value: "slowmo",
       },
       {
              name: "Soft",
              value: "soft",
       },
       {
              name: "Speed",
              value: "speed",
       },       
       {
              name: "Tremolo",
              value: "tremolo",
       },          
       {
              name: "Vaporwave",
              value: "vaporwave",
       },
       {
              name: "Vibrate",
              value: "vibrate",
       },          
     ],
   },
 ],      
run: async(client, interaction) => {
const noq = client.embeds.noplay(client);        
const name = interaction.options.getString("name");  
const enable = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Enabled the Filter.**`)  
const disable = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Filter has been Cleared.**`)  
const embed = client.modules.embed(client, client.colors.gold, `${client.emotes.loading} | **Coming Soon!**`)
const player = client.manager.players.get(interaction.guild.id);
if(!player) { return interaction.reply({ embeds: [noq] }) }
if(player) {
if(!player.queue || !player.playing) { return interaction.reply({ embeds: [noq] }) }   
switch(name) {
    case "eightd":
    interaction.reply({ embeds: [embed] })
    break;
    case "bassboost":
    interaction.reply({ embeds: [embed] })        
    break;
    case "chipmunk":
    interaction.reply({ embeds: [embed] })        
    break;
    case "darthvader":
    interaction.reply({ embeds: [embed] })        
    break;
    case "earrape":
    interaction.reply({ embeds: [embed] })        
    break;
    case "karaoke":
    interaction.reply({ embeds: [embed] })        
    break;
    case "nightcore":
    interaction.reply({ embeds: [embed] })        
    break;
    case "pitch":
    interaction.reply({ embeds: [embed] })        
    break;
    case "pop":
    interaction.reply({ embeds: [embed] })        
    break;
    case "reset":
    interaction.reply({ embeds: [embed] })        
    break;
    case "slowmo":
    interaction.reply({ embeds: [embed] })        
    break;
    case "soft":
    interaction.reply({ embeds: [embed] })        
    break;
    case "speed":
    interaction.reply({ embeds: [embed] })        
    break;
    case "tremolo":
    interaction.reply({ embeds: [embed] })        
    break;
    case "vaporwave":
    interaction.reply({ embeds: [embed] })        
    break;
    case "vibrate":
    interaction.reply({ embeds: [embed] })        
    break;        
}}}}    