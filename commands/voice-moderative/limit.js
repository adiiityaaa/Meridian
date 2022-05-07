module.exports = { 
    name: "limit",
    description: "Change the Member Limit of Voice Channel.",
    category: "Voice-Moderative",
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
            description: "Channel to change Limit",
            required: true,
            channelTypes: ["GUILD_VOICE"],
        },
        {
            name: "limit",
            type: "INTEGER",
            description: "The User limit to set.",
            required: true,  
       },
    ],
    run: async(client, interaction) => {
    const max = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Max Limit can be 99 Users.**`)   
    const channel = interaction.options.getChannel('channel');
    const option = interaction.options.getInteger('limit');
    const embed = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Set member limit to ${limit}.`)
    if(limit > 99) { return interaction.reply({ embeds: [max] }) }
    channel.setUserLimit(limit)
    interaction.reply({ embeds: [embed] })
}}