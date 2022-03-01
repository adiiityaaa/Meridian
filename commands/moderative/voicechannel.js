const channel = require("./channel");

module.exports = { 
    name: "voicechannel",
    description: "Create or Delete a voice channel.",
    category: "Moderative",
    type: 1,    
    developerOnly: false,
    voiceChannel: false,
    mutualChannel: false,
    djOnly: false,    
    clientPerms: ["EMBED_LINKS", "USE_EXTERNAL_EMOJIS", "MANAGE_CHANNELS"],
    authorPerms: ["MANAGE_CHANNELS"],
    options: [
        {
            name: "method",
            type: "STRING",
            description: "Choose whether Create or Delete a Voice Channel.",
            required: true,
            choices: [
              {
                  name: "Create a Voice Channel",
                  value: "create",
              },
              {
                  name: "Delete a Voice Channel",
                  value: "delete",
              },
           ],  
      },
      {
        name: "name",
        type: "STRING",
        description: "Channel to Create.",
        required: false,
      },
      {
        name: "channel",
        type: "CHANNEL",
        description: "Channel to delete.",
        required: false,
        channelTypes: ["GUILD_VOICE"],
       },
    ],     
run: async(client, interaction) => {
const method = interaction.options.getString("method");
const exceed = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Name exceeds 16 Characters.**`)    
const noname = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Please specify name for the Channel.**`)
const nochx = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Please specify the Channel to delete.**`)
const deleted = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Channel has been Deleted.**`)
switch(method) {
    case "create":
    const name = interaction.options.getString("name");
    if(!name) { return interaction.reply({ embeds: [noname] }) }
    if(name.length > 16) { return interaction.reply({ embeds: [exceed] }) }
    const channel = await interaction.guild.channels.create(`${name}`, {
        type: 'GUILD_VOICE',
        reason: `Command used by ${interaction.user.tag}`
      })
    const created = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **<#${channel.id}> has been created.**`)
    interaction.reply({ embeds: [created] })
    break;
    case "delete":
    const chx = interaction.options.getChannel("channel");
    if(!chx) { return interaction.reply({ embeds: [nochx] }) }        
    channel.delete()
    interaction.reply({ embeds: [deleted] })
    break;
}}}