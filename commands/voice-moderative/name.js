module.exports = { 
    name: "name",
    description: "Edit the name of the Voice Channel.",
    category: "Voice-Moderative",
    type: 1,    
    developerOnly: false,
    voiceChannel: false,
    mutualChannel: false,
    djOnly: false,    
    clientPerms: ["EMBED_LINKS", "USE_EXTERNAL_EMOJIS", "MANAGE_CHANNELS"],
    authorPerms: ["MANAGE_CHANNELS"],
    options: [
        {
            name: "channel",
            type: "CHANNEL",
            description: "Name of the Channel to change Nickname.",
            required: true,
            channelTypes: ["GUILD_VOICE"],
        },
        {
            name: "name",
            type: "STRING",
            description: "New name that is to be set.",
            required: true,
          },
    ],
    run: async(client, interaction) => {
    const exceed = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Name exceeds 16 Characters.**`)          
    const channel = interaction.options.getChannel('channel');
    const name = interaction.options.getString('name');
    if(name.length > 16) { return interactionn.reply({ embeds: [exceed] }) }
    const embed = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Nickname set to <#${channel.id}>.**`)
    channel.setName(name)
    interaction.reply({ embeds: [embed] })
}}