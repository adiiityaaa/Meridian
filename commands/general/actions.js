const slap = require('axios');

module.exports = {
name: "actions",
description: "Displays Action GIF or Images",
category: "General",
type: 1,
developerOnly: false,
voiceChannel: false,
mutualChannel: false,
djOnly: false,    
clientPerms: ["EMBED_LINKS", "USE_EXTERNAL_EMOJIS"],
authorPerms: [""],    
options: [
      {
      name: "type",
      type: "STRING",
      description: "Type of Action",
      required: true,
      choices: [
          {
              name: "Cry",
              value: "cry",
          },
          {
              name: "Hug",
              value: "hug",
          },
          {
              name: "Kiss",
              value: "kiss",
          },
          {
              name: "Pat",
              value: "pat",
          },
          {
              name: "Punch",
              value: "punch",
          },
          {
              name: "Slap",
              value: "slap",
          },
      ],
    },
  ],    
run: async(client, interaction) => { 
    const error = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **An error has occured.**`)
    await interaction.deferReply().catch(() => {});     
const type = interaction.options.getString('type')
switch(type) {
    case "cry":
        try {
            const res = await fetch('https://neko-love.xyz/api/v1/cry')
            const json = await res.json();        
            const embed = new client.discord.MessageEmbed()
            .setImage(json.url)
            .setColor(client.colors.nsfw)    
            interaction.editReply({ embeds: [embed] })
        } catch(e) {
         console.log(e)
         interaction.editReply({ embeds: [error] })
        } 
        break;
    case "hug":
        try {
            const res = await fetch('https://neko-love.xyz/api/v1/hug')
            const json = await res.json();        
            const embed = new client.discord.MessageEmbed()
            .setImage(json.url)
            .setColor(client.colors.nsfw)    
            interaction.editReply({ embeds: [embed] })
        } catch(e) {
         console.log(e)
         interaction.editReply({ embeds: [error] })
        } 
        break;
case "kiss":
    try {
        const res = await fetch('https://neko-love.xyz/api/v1/kiss')
        const json = await res.json();        
        const embed = new client.discord.MessageEmbed()
        .setImage(json.url)
        .setColor(client.colors.nsfw)    
        interaction.editReply({ embeds: [embed] })
    } catch(e) {
     console.log(e)
     interaction.editReply({ embeds: [error] })
    } 
    break;
case "pat":
    try {
        const res = await fetch('https://neko-love.xyz/api/v1/pat')
        const json = await res.json();        
        const embed = new client.discord.MessageEmbed()
        .setImage(json.url)
        .setColor(client.colors.nsfw)    
        interaction.editReply({ embeds: [embed] })
    } catch(e) {
     console.log(e)
     interaction.editReply({ embeds: [error] })
    } 
    break;
case "punch":
    try {
        const res = await fetch('https://neko-love.xyz/api/v1/punch')
        const json = await res.json();        
        const embed = new client.discord.MessageEmbed()
        .setImage(json.url)
        .setColor(client.colors.nsfw)    
        interaction.editReply({ embeds: [embed] })
    } catch(e) {
     console.log(e)
     interaction.editReply({ embeds: [error] })
    } 
    break;
case "slap":
    try {
        const res = await fetch('https://neko-love.xyz/api/v1/slap')
        const json = await res.json();        
        const embed = new client.discord.MessageEmbed()
        .setImage(json.url)
        .setColor(client.colors.nsfw)    
        interaction.editReply({ embeds: [embed] })
    } catch(e) {
     console.log(e)
     interaction.editReply({ embeds: [error] })
    } 
    break;
}}}  