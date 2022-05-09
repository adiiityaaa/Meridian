import fetch from 'node-fetch';;

module.exports = {
name: "actions",
description: "Displays Action GIF or Images",
category: "Entertainment",
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
            name: "Bored",
            value: "bored",
        },
        {
            name: "Bonk",
            value: "bonk",
        },
          {
              name: "Cry",
              value: "cry",
          },
          {
            name: "Cuddle",
            value: "cuddle",
        },
        {
            name: "Dance",
            value: "dance",
        },
        {
            name: "Highfive",
            value: "highfive",
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
            name: "Scream",
            value: "scream",
        },
          {
              name: "Slap",
              value: "slap",
          },
          {
            name: "Wink",
            value: "wink",
        },
        {
            name: "Yeet",
            value: "yeet",
        },
      ],
    },
  ],    
run: async(client, interaction) => { 
const error = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **An error has occured.**`)
await interaction.deferReply().catch(() => {});     
const type = interaction.options.getString('type')
switch(type) {
    case "bored":
        try {
            const res = await fetch('https://nekoapi.vanillank2006.repl.co/api/reaction/bored')
            const json = await res.json();        
            const embed = new client.discord.MessageEmbed()
            .setImage(json.url)
            .setColor(client.colors.actions)    
            interaction.editReply({ embeds: [embed] })
        } catch(e) {
         console.log(e)
         interaction.editReply({ embeds: [error] })
        } 
        break;
    case "bonk":
        try {
            const res = await fetch('https://api.waifu.pics/sfw/bonk')
            const json = await res.json();        
            const embed = new client.discord.MessageEmbed()
            .setImage(json.url)
            .setColor(client.colors.actions)    
            interaction.editReply({ embeds: [embed] })
        } catch(e) {
         console.log(e)
         interaction.editReply({ embeds: [error] })
        } 
        break;
    case "cuddle":
        try {
            const res = await fetch('https://nekos.life/api/v2/img/cuddle')
            const json = await res.json();        
            const embed = new client.discord.MessageEmbed()
            .setImage(json.url)
            .setColor(client.colors.actions)    
            interaction.editReply({ embeds: [embed] })
        } catch(e) {
         console.log(e)
         interaction.editReply({ embeds: [error] })
        } 
        break;
    case "cry":
        try {
            const res = await fetch('https://neko-love.xyz/api/v1/cry')
            const json = await res.json();        
            const embed = new client.discord.MessageEmbed()
            .setImage(json.url)
            .setColor(client.colors.actions)    
            interaction.editReply({ embeds: [embed] })
        } catch(e) {
         console.log(e)
         interaction.editReply({ embeds: [error] })
        } 
        break;
        case "dance":
            try {
                const res = await fetch('https://api.waifu.pics/sfw/dance')
                const json = await res.json();        
                const embed = new client.discord.MessageEmbed()
                .setImage(json.url)
                .setColor(client.colors.actions)    
                interaction.editReply({ embeds: [embed] })
            } catch(e) {
             console.log(e)
             interaction.editReply({ embeds: [error] })
            } 
            break;    
            case "highfive":
                try {
                    const res = await fetch('https://api.waifu.pics/sfw/highfive')
                    const json = await res.json();        
                    const embed = new client.discord.MessageEmbed()
                    .setImage(json.url)
                    .setColor(client.colors.actions)    
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
            .setColor(client.colors.actions)    
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
        .setColor(client.colors.actions)    
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
        .setColor(client.colors.actions)    
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
        .setColor(client.colors.actions)    
        interaction.editReply({ embeds: [embed] })
    } catch(e) {
     console.log(e)
     interaction.editReply({ embeds: [error] })
    } 
    break;
    case "scream":
        try {
            const res = await fetch('https://nekoapi.vanillank2006.repl.co/api/reaction/scream')
            const json = await res.json();        
            const embed = new client.discord.MessageEmbed()
            .setImage(json.url)
            .setColor(client.colors.actions)    
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
        .setColor(client.colors.actions)    
        interaction.editReply({ embeds: [embed] })
    } catch(e) {
     console.log(e)
     interaction.editReply({ embeds: [error] })
    } 
    break;
    case "wink":
        try {
            const url = "https://some-random-api.ml/animu/wink";
            const res = await fetch(url).then(async (res) => await res.json())    
            const embed = new client.discord.MessageEmbed()
            .setImage(res.link)
            .setColor(client.colors.actions)    
            interaction.editReply({ embeds: [embed] })
        } catch(e) {
         console.log(e)
         interaction.editReply({ embeds: [error] })
        } 
        break;    
        case "yeet":
            try {
                const res = await fetch('https://api.waifu.pics/sfw/yeet')
                const json = await res.json();        
                const embed = new client.discord.MessageEmbed()
                .setImage(json.url)
                .setColor(client.colors.actions)    
                interaction.editReply({ embeds: [embed] })
            } catch(e) {
             console.log(e)
             interaction.editReply({ embeds: [error] })
            } 
            break;
}}}  