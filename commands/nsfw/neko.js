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
      },
    ],
    run: async(client, interaction) => {
        
    }
   }