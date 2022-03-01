module.exports = { 
    name: "voiceban",
    description: "Ban a user from joining Voice Channel.",
    category: "Moderative",
    type: 1,    
    developerOnly: false,
    voiceChannel: false,
    mutualChannel: false,
    djOnly: false,    
    clientPerms: ["EMBED_LINKS", "USE_EXTERNAL_EMOJIS", "MOVE_MEMBERS"],
    authorPerms: ["MANAGE_GUILD"],
    options: [],
    run: async(client, interaction) => {
    interaction.reply("Coming Soon!")    
    }}