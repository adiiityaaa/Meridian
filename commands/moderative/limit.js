module.exports = { 
    name: "limit",
    description: "Change the Member Limit of Voice Channel.",
    category: "Moderative",
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
            type: "INTEGER",
            description: "The User limit to set.",
            required: true,  
       },
       {
        name: "channel",
        type: "CHANNEL",
        description: "Channel to change Limit",
        required: true,
        channelTypes: ["GUILD_VOICE"],
       },
    ],
    run: async(client, interaction) => {
    const max = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Max Limit can be 99 Users.**`)   
    const channel = interaction.options.getChannel('channel');
    const option = interaction.options.getInteger('option');
    const embed = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Set member limit to ${option}.`)
    if(option > 99) { return interaction.reply({ embeds: [max] }) }
    interaction.reply({ embeds: [embed] })
}}