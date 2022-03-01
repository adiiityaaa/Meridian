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
    options: [],
    run: async(client, interaction) => {
    interaction.reply("Coming Soon!")    
    }}