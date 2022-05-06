module.exports = {
    name: "activity",
    description: "Start an activity in the Voice Channel!",
    category: "Multi-Choice",
    type: 1,
    developerOnly: false,
    voiceChannel: false,
    mutualChannel: false,
    djOnly: false,    
    clientPerms: ["EMBED_LINKS", "USE_EXTERNAL_EMOJIS", "CREATE_INSTANT_INVITE"],
    authorPerms: [""],    
    options: [
          {
          name: "channel",
          type: "CHANNEL",
          description: "Channel for the Activity",
          required: true,
          channelTypes: ["GUILD_VOICE"],
          },
          {
          name: "game",
          type: "STRING",
          description: "Game for the Activity",
          required: true,
          choices: [
              {
                  name: "Awkword",
                  value: "awkword",
              },
              {
                  name: "Betrayal",
                  value: "betrayal",
              },
              {
                  name: "Chess",
                  value: "chess",
              },
              {
                  name: "Doodlecrew",
                  value: "doodlecrew",
              },
              {
                  name: "Fishington",
                  value: "fishington",
              },
              {
                  name: "Lettertile",
                  value: "lettertile",
              },
              {
                  name: "Poker",
                  value: "poker",
              },
              {
                  name: "Puttparty",
                  value: "puttparty",
              },
              {
                  name: "Spellcast",
                  value: "spellcast",
              },
              {
                  name: "wordsnack",
                  value: "wordsnack",
              },
              {
                  name: "YouTube",
                  value: "youtube",
              },
          ],
        },
      ],    
    run: async(client, interaction) => {    
    const channel = interaction.options.getChannel("channel");   
    const game = interaction.options.getString('game');
    switch(game) {
        case "awkword":
        client.activities.createTogetherCode(channel.id, 'awkword').then(async invite => {
        const button = client.btns.link(client, `${invite.code}`, "Click here to Join!");
        const embed = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Awkword Activity has been Created.**`) 
        interaction.reply({ embeds: [embed], components: button })})
        break;                                                    
        case "betrayal":
        client.activities.createTogetherCode(channel.id, 'betrayal').then(async invite => {
        const button = client.btns.link(client, `${invite.code}`, "Click here to Join!");
        const embed = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Betrayal Activity has been Created.**`) 
        await interaction.reply({ embeds: [embed], components: button })})
        break;
        case "chess":
        client.activities.createTogetherCode(channel.id, 'chess').then(async invite => {
        const button = client.btns.link(client, `${invite.code}`, "Click here to Join!");
        const embed = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Chess Activity has been Created.**`) 
        await interaction.reply({ embeds: [embed], components: button })})
        break;
        case "doodlecrew":
        client.activities.createTogetherCode(channel.id, 'doodlecrew').then(async invite => {
        const button = client.btns.link(client, `${invite.code}`, "Click here to Join!");
        const embed = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Doodlecrew Activity has been Created.**`) 
        await interaction.reply({ embeds: [embed], components: button })})
        break;
        case "fishington":
        client.activities.createTogetherCode(channel.id, 'fishington').then(async invite => {
        const button = client.btns.link(client, `${invite.code}`, "Click here to Join!");
        const embed = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Fishington Activity has been Created.**`) 
        await interaction.reply({ embeds: [embed], components: button })})
        break;
        case "lettertile":
        client.activities.createTogetherCode(channel.id, 'lettertile').then(async invite => {
        const button = client.btns.link(client, `${invite.code}`, "Click here to Join!");
        const embed = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Lettertile Activity has been Created.**`) 
        await interaction.reply({ embeds: [embed], components: button })})
        break;
        case "poker":
        client.activities.createTogetherCode(channel.id, 'poker').then(async invite => {
        const button = client.btns.link(client, `${invite.code}`, "Click here to Join!");
        const embed = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Poker Activity has been Created.**`) 
        await interaction.reply({ embeds: [embed], components: button })})
        break;
        case "puttparty":
        client.activities.createTogetherCode(channel.id, 'puttparty').then(async invite => {
        const button = client.btns.link(client, `${invite.code}`, "Click here to Join!");
        const embed = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Puttparty Activity has been Created.**`) 
        await interaction.reply({ embeds: [embed], components: button })})
        break;
        case "spellcast":
        client.activities.createTogetherCode(channel.id, 'spellcast').then(async invite => {
        const button = client.btns.link(client, `${invite.code}`, "Click here to Join!");
        const embed = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Spellcast Activity has been Created.**`) 
        await interaction.reply({ embeds: [embed], components: button })})
        break;
        case "wordsnack":
        client.activities.createTogetherCode(channel.id, 'wordsnack').then(async invite => {
        const button = client.btns.link(client, `${invite.code}`, "Click here to Join!");
        const embed = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **Wordsnack Activity has been Created.**`) 
        await interaction.reply({ embeds: [embed], components: button })})
        break;
        case "youtube":
        client.activities.createTogetherCode(channel.id, 'youtube').then(async invite => {
        const button = client.btns.link(client, `${invite.code}`, "Click here to Join!");
        const embed = client.modules.embed(client, client.colors.green, `${client.emotes.check} | **YouTube Activity has been Created.**`) 
        await interaction.reply({ embeds: [embed], components: button })})
        break;
    }}}