module.exports = {
    name: "create",
    description: "Create a Giveaway!",
    category: "Giveaways",
    type: 1,
    developerOnly: false,
    voiceChannel: false,
    mutualChannel: false,
    djOnly: false,    
    clientPerms: ["EMBED_LINKS", "USE_EXTERNAL_EMOJIS"],
    authorPerms: [""],    
    options: [
          {
          name: "prize",
          type: "STRING",
          description: "Prize for the Giveaway",
          required: true,
        },
        {
            name: "duration",
            type: "STRING",
            description: "Duration of the Giveaway",
            required: true,
          },
          {
            name: "winners",
            type: "INTEGER",
            description: "Number of Winners",
            required: true,
          },
          {
            name: "channel",
            type: "CHANNEL",
            description: "Channel for the Giveaway",
            required: true,
          },
          {
            name: "amari",
            type: "INTEGER",
            description: "Amari Level Requirement",
            required: false,
          },
          {
            name: "role",
            type: "ROLE",
            description: "Role Required to Enter",
            required: false,
          },
          {
            name: "server",
            type: "STRING",
            description: "Server ID of required server",
            required: false,
          },
      ],    
    run: async(client, interaction) => {  

        
    }}        