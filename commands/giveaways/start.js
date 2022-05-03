const ms = require("ms")
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
      ],    
    run: async(client, interaction) => {  
        const giveawayChannel = interaction.options.getChannel('channel');
        const giveawayDuration = interaction.options.getString('duration');
        const giveawayWinnerCount = interaction.options.getInteger('winners');
        const giveawayPrize = interaction.options.getString('prize');        
        client.giveawaysManager.start(channel, {
            duration: ms(giveawayDuration),
            prize: giveawayPrize,
            winnerCount: giveawayWinnerCount,
            hostedBy: client.config.hostedBy ? interaction.user : null,
            messages
        });
    }}        