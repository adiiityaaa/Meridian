const ms = require("ms")
module.exports = {
    name: "start",
    description: "Start a Giveaway!",
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
            channelTypes: ["GUILD_TEXT"],
            required: true,
          },
      ],    
    run: async(client, interaction) => {
      const noperms = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **You do not have Manage Messages Permission or Giveaways Role.**`)    
if(!interaction.member.permissions.has('MANAGE_MESSAGES') && !interaction.member.roles.cache.some((r) => r.name === "Giveaways")){ return interaction.reply({ embeds: [noperms] }) }
        const embed = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Giveaway has been started.**`)  
        const giveawayChannel = interaction.options.getChannel('channel');
        const giveawayDuration = interaction.options.getString('duration');
        const giveawayWinnerCount = interaction.options.getInteger('winners');
        const giveawayPrize = interaction.options.getString('prize');        
        client.giveawaysManager.start(channel, {
            duration: ms(giveawayDuration),
            prize: giveawayPrize,
            winnerCount: giveawayWinnerCount,
            hostedBy: interaction.user
        });
        interaction.reply({ embeds: [embed] })
    }}        