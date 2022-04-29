const { get } = require('axios');

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
        const nonsfw = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Command must be used in NSFW Channel.**`)
        const error = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **An error has occured.**`)
        if(!interaction.channel.nsfw) { return interaction.reply({ embeds: [nonsfw] }) }     
        let choice;
        const option = interaction.options.getString("category")
        switch(category) { 
        case "":
        choice = "";        
        break;
        case "":
        choice = "";
        break;
        }      
        try {

        } catch(e) {
            console.log(e)
            interaction.reply({ embeds: [error] })
         }            
    }
   }