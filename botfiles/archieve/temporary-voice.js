module.exports = {
name: "temporary-voice",
description: "Setup the Temporary Voice Channels!",
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
      name: "channel",
      type: "CHANNEL",
      description: "Voice Channel for Temporary Channels.",
      required: false,
    },
    {
      name: "limit",
      type: "INTEGER",
      description: "User limit in voice channel.",
      required: false,
    },
  ],    
run: async(client, interaction) => {
const already = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Temporary Channels are already enabled!**`)    
let check = client.db.get(`tempcheck_${interaction.guild.id}`);
if(check === true) { return interaction.reply({ embeds: [already] }) }
let channel = interaction.options.getChannel('channel');
if(!channel) { channel = await interaction.guild.channels.create(`⚙｜voice-panel`, {
      type: 'GUILD_VOICE', 
      rateLimitPerUser: 6,
      reason: `Temporary Channel Setup | by ${interaction.user.username}`
    })}
await client.db.set(`tempcheck_${interaction.guild.id}`, true)
await client.db.set(`tempchx_${interaction.guild.id}`, channel.id)
const success = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Temporary Channels enabled in <#${channel.id}>!**`)
interaction.reply({ embeds: [success] })
}}    