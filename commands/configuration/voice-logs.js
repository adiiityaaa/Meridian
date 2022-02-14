module.exports = {
name: "voice-logs",
description: "Setup the Voice Channel Logs!",
category: "Configuration",
type: 1,
developerOnly: false,
voiceChannel: false,
mutualChannel: false,
djOnly: false,     
clientPerms: ["EMBED_LINKS", "USE_EXTERNAL_EMOJIS", "MANAGE_CHANNELS"],
authorPerms: ["MANAGE_GUILD"],    
options: [
        {
      name: "option",
      type: "STRING",
      description: "Choose if you want to set or disable Voice Logs!",
      required: true,
      choices: [
          {
              name: "Enable",
              value: "enable",
          },
          {
              name: "Disable",
              value: "disable",
          },
        ],
    },
    {
      name: "channel",
      type: "CHANNEL",
      description: "Channel where the request channel should be setup!",
      required: false,
      channelTypes: ["GUILD_TEXT"],
    },
  ],    
run: async(client, interaction) => {
const option = interaction.options.getString("option");
const already = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Voice Channel Logs already enabled!**`)    
const noalready = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Voice Channel Logs not Setupped!**`)    
const disabled = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Voice Channel Logs Disabled!**`)    
switch(option) {
    case "enable":        
let check = client.db.get(`voicelogs_${interaction.guild.id}`);
if(check) { return interaction.reply({ embeds: [already] }) }
let channel = interaction.options.getChannel('channel');
if(!channel) { channel = await interaction.guild.channels.create(`voice-logs`, {
      type: 'GUILD_TEXT', 
      reason: `Voice Channel Logs | by ${interaction.member.tag}`
    })}
const success = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Voice Channel Logs enabled in <#${channel.id}>!**`)    
await interaction.reply({ embeds: [success] })    
await client.db.set(`voicelogs_${interaction.guild.id}`, channel.id)
   break;
    case "disable":
    if(!client.db.has(`voicelogs_${interaction.guild.id}`)) { return interaction.reply({ embeds: [noalready] }) }
    client.db.delete(`voicelogs_${interaction.guild.id}`)        
    await interaction.reply({ embeds: [disabled] })
    break;
}}}    