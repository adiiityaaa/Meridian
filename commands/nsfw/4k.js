const { get } = require('axios');

module.exports = {
    name: "4k",
    category: "NSFW",
    description: "",
    type: 1,
    developerOnly: false,
    voiceChannel: false,
    mutualChannel: false,
    djOnly: false,    
    clientPerms: ["EMBED_LINKS", "USE_EXTERNAL_EMOJIS"],
    authorPerms: [""],
    run: async(client, interaction) => {
    const nonsfw = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Command must be used in NSFW Channel.**`)
    const error = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **An error has occured.**`)
    if(!interaction.channel.nsfw) { return interaction.reply({ embeds: [nonsfw] }) }   
    try {

    } catch(e) {
       console.log(e)
       interaction.reply({ embeds: [error] })
    }      
    }
   }
   