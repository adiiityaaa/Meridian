module.exports = {
    name: "",
    category: "NSFW",
    description: "",
    type: 1,
    developerOnly: false,
    voiceChannel: false,
    mutualChannel: false,
    djOnly: false,    
    clientPerms: ["EMBED_LINKS", "USE_EXTERNAL_EMOJIS"],
    authorPerms: [""],
    options: [
        {
        name: "category",
        type: "STRING",
        description: "Category of NSFW Command",
        required: true,
        choices: [
            {
                name: "Human",
                value: "",
            },
            {
                name: "Hentai",
                value: "",
            },
        ],
      },s
    ],
    run: async(client, interaction) => {
    const nonsfw = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Command must be used in NSFW Channel.**`)
    if(!interaction.channel.nsfw) { return interaction.reply({ embeds: [nonsfw] }) }        
    }
   }