const { get } = require('axios');

module.exports = {
name: "activity",
description: "Start an activity in the Voice Channel!",
category: "General",
type: 1,
developerOnly: false,
voiceChannel: false,
mutualChannel: false,
djOnly: false,    
clientPerms: ["EMBED_LINKS", "USE_EXTERNAL_EMOJIS", "CREATE_INSTANT_INVITE"],
authorPerms: [""],    
options: [
      {
      name: "type",
      type: "STRING",
      description: "Type of NSFW",
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
      ],
    },
    {
        name: "category",
        type: "STRING",
        description: "Category of NSFW",
        required: true,
        choices: [
            {
                name: "Human",
                value: "human",
            },
            {
                name: "Hentai",
                value: "hentai",
            },
        ],
      },
  ],    
run: async(client, interaction) => { 
const nocat = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Please specify Category of NSFW.**`)
const error = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **An error has occured.**`)
const nnsfw = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **This Command must be used in NSFW Channel.**`)
const type = interaction.options.getString('type');
const cate = interaction.options.getString('category');
if(!interaction.channel.nsfw) { return interaction.reply({ embeds: [nnsfw] }) }
switch(type) {
case "4k":
try {
    get('https://nekobot.xyz/api/image?type=4k').then(r => {
    const embed = new client.discord.MessageEmbed()
    .setImage(r.data.message)
    .setColor(client.colors.nsfw)    
    interaction.reply({ embeds: [embed] })
    })
} catch(e) {
 console.log(e)
 interaction.reply({ embeds: [error] })
} 
break;
case "anal":
if(!cate) { return interaction.reply({ embeds: [nocat] }) }    
switch(cate) {
case "human":
    try {
        get('https://nekobot.xyz/api/image?type=anal').then(r => {
            const embed = new client.discord.MessageEmbed()
            .setImage(r.data.message)
            .setColor(client.colors.nsfw)    
            interaction.reply({ embeds: [embed] })
            })
    } catch(e) {
        console.log(e)
        interaction.reply({ embeds: [error] })
    }     
break;
case "hentai":
    try {
        get('https://nekobot.xyz/api/image?type=hanal').then(r => {
            const embed = new client.discord.MessageEmbed()
            .setImage(r.data.message)
            .setColor(client.colors.nsfw)    
            interaction.reply({ embeds: [embed] })
            })
    } catch(e) {
        console.log(e)
        interaction.reply({ embeds: [error] })
    }     
break;        
}
break;
case "ass":
if(!cate) { return interaction.reply({ embeds: [nocat] }) }  
switch(cate) {
    case "human":
        try {
            get('https://nekobot.xyz/api/image?type=ass').then(r => {
            const embed = new client.discord.MessageEmbed()
            .setImage(r.data.message)
            .setColor(client.colors.nsfw)    
            interaction.reply({ embeds: [embed] })
            })
        } catch(e) {
            console.log(e)
            interaction.reply({ embeds: [error] })
        }     
    break;
    case "hentai":
        try {
            get('https://nekobot.xyz/api/image?type=hass').then(r => {
            const embed = new client.discord.MessageEmbed()
            .setImage(r.data.message)
            .setColor(client.colors.nsfw)    
            interaction.reply({ embeds: [embed] })
            })
        } catch(e) {
            console.log(e)
            interaction.reply({ embeds: [error] })
        }     
    break;        
    }  
break;
case "boobs":
if(!cate) { return interaction.reply({ embeds: [nocat] }) }    
switch(cate) {
    case "human":
        try {
            get('https://nekobot.xyz/api/image?type=boobs').then(r => {
            const embed = new client.discord.MessageEmbed()
            .setImage(r.data.message)
            .setColor(client.colors.nsfw)    
            interaction.reply({ embeds: [embed] })
            })
        } catch(e) {
            console.log(e)
            interaction.reply({ embeds: [error] })
        }     
    break;
    case "hentai":
        try {
            get('https://nekobot.xyz/api/image?type=hboobs').then(r => {
            const embed = new client.discord.MessageEmbed()
            .setImage(r.data.message)
            .setColor(client.colors.nsfw)    
            interaction.reply({ embeds: [embed] })
            })
        } catch(e) {
            console.log(e)
            interaction.reply({ embeds: [error] })
        }     
    break;        
    }
break;
case "gonewild":
    try {
        get('https://nekobot.xyz/api/image?type=gonewild').then(r => {
        const embed = new client.discord.MessageEmbed()
        .setImage(r.data.message)
        .setColor(client.colors.nsfw)    
        interaction.reply({ embeds: [embed] })
        })
    } catch(e) {
     console.log(e)
     interaction.reply({ embeds: [error] })
    }   
break;
case "hentai":
    try {
        get('https://nekobot.xyz/api/image?type=hentai').then(r => {
        const embed = new client.discord.MessageEmbed()
        .setImage(r.data.message)
        .setColor(client.colors.nsfw)    
        interaction.reply({ embeds: [embed] })
        })
    } catch(e) {
     console.log(e)
     interaction.reply({ embeds: [error] })
    }
break;
case "neko":
if(!cate) { return interaction.reply({ embeds: [nocat] }) }    
switch(cate) {
    case "human":
        try {
            get('https://nekobot.xyz/api/image?type=neko').then(r => {
            const embed = new client.discord.MessageEmbed()
            .setImage(r.data.message)
            .setColor(client.colors.nsfw)    
            interaction.reply({ embeds: [embed] })
            })
        } catch(e) {
            console.log(e)
            interaction.reply({ embeds: [error] })
        }     
    break;
    case "hentai":
        try {
            get('https://nekobot.xyz/api/image?type=hneko').then(r => {
            const embed = new client.discord.MessageEmbed()
            .setImage(r.data.message)
            .setColor(client.colors.nsfw)    
            interaction.reply({ embeds: [embed] })
            })
        } catch(e) {
            console.log(e)
            interaction.reply({ embeds: [error] })
        }     
    break;        
    }
break;
case "porn":
    try {
        get('https://nekobot.xyz/api/image?type=pgif').then(r => {
        const embed = new client.discord.MessageEmbed()
        .setImage(r.data.message)
        .setColor(client.colors.nsfw)    
        interaction.reply({ embeds: [embed] })
        })
    } catch(e) {
     console.log(e)
     interaction.reply({ embeds: [error] })
    }
break;
case "pussy":
    try {
        get('https://nekobot.xyz/api/image?type=pussy').then(r => {
        const embed = new client.discord.MessageEmbed()
        .setImage(r.data.message)
        .setColor(client.colors.nsfw)    
        interaction.reply({ embeds: [embed] })
        })
    } catch(e) {
     console.log(e)
     interaction.reply({ embeds: [error] })
    }
break;
case "thighs":
if(!cate) { return interaction.reply({ embeds: [nocat] }) }    
switch(cate) {
    case "human":
        try {
            get('https://nekobot.xyz/api/image?type=thighs').then(r => {
            const embed = new client.discord.MessageEmbed()
            .setImage(r.data.message)
            .setColor(client.colors.nsfw)    
            interaction.reply({ embeds: [embed] })
            })
        } catch(e) {
            console.log(e)
            interaction.reply({ embeds: [error] })
        }     
    break;
    case "hentai":
        try {
            get('https://nekobot.xyz/api/image?type=hthighs').then(r => {
            const embed = new client.discord.MessageEmbed()
            .setImage(r.data.message)
            .setColor(client.colors.nsfw)    
            interaction.reply({ embeds: [embed] })
            })
        } catch(e) {
            console.log(e)
            interaction.reply({ embeds: [error] })
        }     
    break;        
    }
break;    
}}}    