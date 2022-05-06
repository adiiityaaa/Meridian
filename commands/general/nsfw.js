const { get } = require('axios');
const fetch = require("node-fetch");

module.exports = {
name: "nsfw",
description: "Displays NSFW Content",
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
      description: "Type of NSFW",
      required: true,
      choices: [
          {
              name: "4k",
              value: "4k",
          },
          {
              name: "Anal",
              value: "anal",
          },
          {
              name: "Ass",
              value: "ass",
          },
          {
              name: "Boobs",
              value: "boobs",
          },
          {
              name: "Gonewild",
              value: "gonewild",
          },
          {
              name: "Hentai",
              value: "hentai",
          },
          {
              name: "Neko",
              value: "neko",
          },
          {
              name: "Porn",
              value: "porn",
          },
          {
              name: "Pussy",
              value: "pussy",
          },
          {
              name: "Thighs",
              value: "thighs",
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
    await interaction.deferReply().catch(() => {});     
const nocat = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Please specify Category of NSFW.**`)
const error = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **An error has occured.**`)
const nnsfw = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **This Command must be used in NSFW Channel.**`)
const type = interaction.options.getString('type');
const cate = interaction.options.getString('category');
if(!interaction.channel.nsfw) { return interaction.reply({ embeds: [nnsfw] }) }
switch(type) {
case "4k":
try {
    const res = await fetch('https://nekobot.xyz/api/image?type=4k')
    const json = await res.json();        
    const embed = new client.discord.MessageEmbed()
    .setImage(json.message)
    .setColor(client.colors.nsfw)    
    interaction.editReply({ embeds: [embed] })
} catch(e) {
 console.log(e)
 interaction.editReply({ embeds: [error] })
} 
break;
case "anal":
if(!cate) { return  interaction.editReply({ embeds: [nocat] }) }    
switch(cate) {
case "human":
    try {
        const res = await fetch('https://nekobot.xyz/api/image?type=anal')
        const json = await res.json(); 
            const embed = new client.discord.MessageEmbed()
            .setImage(json.message)
            .setColor(client.colors.nsfw)    
            interaction.editReply({ embeds: [embed] })
    } catch(e) {
        console.log(e)
         interaction.editReply({ embeds: [error] })
    }     
break;
case "hentai":
    try {
        const res = await fetch('https://nekobot.xyz/api/image?type=hanal')
        const json = await res.json(); 
            const embed = new client.discord.MessageEmbed()
            .setImage(json.message)
            .setColor(client.colors.nsfw)    
            interaction.editReply({ embeds: [embed] })
    } catch(e) {
        console.log(e)
        interaction.editReply({ embeds: [error] })
    }     
break;        
}
break;
case "ass":
if(!cate) { return interaction.editReply({ embeds: [nocat] }) }  
switch(cate) {
    case "human":
        try {
            get('https://nekobot.xyz/api/image?type=ass').then(r => {
            const embed = new client.discord.MessageEmbed()
            .setImage(r.data.message)
            .setColor(client.colors.nsfw)    
            interaction.editReply({ embeds: [embed] })
            })
        } catch(e) {
            console.log(e)
            interaction.editReply({ embeds: [error] })
        }     
    break;
    case "hentai":
        try {
            get('https://nekobot.xyz/api/image?type=hass').then(r => {
            const embed = new client.discord.MessageEmbed()
            .setImage(r.data.message)
            .setColor(client.colors.nsfw)    
            interaction.editReply({ embeds: [embed] })
            })
        } catch(e) {
            console.log(e)
            interaction.editReply({ embeds: [error] })
        }     
    break;        
    }  
break;
case "boobs":
if(!cate) { return  interaction.editReply({ embeds: [nocat] }) }    
switch(cate) {
    case "human":
        try {
            get('https://nekobot.xyz/api/image?type=boobs').then(r => {
            const embed = new client.discord.MessageEmbed()
            .setImage(r.data.message)
            .setColor(client.colors.nsfw)    
            interaction.editReply({ embeds: [embed] })
            })
        } catch(e) {
            console.log(e)
            interaction.editReply({ embeds: [error] })
        }     
    break;
    case "hentai":
        try {
            get('https://nekobot.xyz/api/image?type=hboobs').then(r => {
            const embed = new client.discord.MessageEmbed()
            .setImage(r.data.message)
            .setColor(client.colors.nsfw)    
            interaction.editReply({ embeds: [embed] })
            })
        } catch(e) {
            console.log(e)
            interaction.editReply({ embeds: [error] })
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
        interaction.editReply({ embeds: [embed] })
        })
    } catch(e) {
     console.log(e)
     interaction.editReply({ embeds: [error] })
    }   
break;
case "hentai":
    try {
        get('https://nekobot.xyz/api/image?type=hentai').then(r => {
        const embed = new client.discord.MessageEmbed()
        .setImage(r.data.message)
        .setColor(client.colors.nsfw)    
        interaction.editReply({ embeds: [embed] })
        })
    } catch(e) {
     console.log(e)
     interaction.editReply({ embeds: [error] })
    }
break;
case "neko":
if(!cate) { return  interaction.editReply({ embeds: [nocat] }) }    
switch(cate) {
    case "human":
        try {
            get('https://nekobot.xyz/api/image?type=neko').then(r => {
            const embed = new client.discord.MessageEmbed()
            .setImage(r.data.message)
            .setColor(client.colors.nsfw)    
            interaction.editReply({ embeds: [embed] })
            })
        } catch(e) {
            console.log(e)
            interaction.editReply({ embeds: [error] })
        }     
    break;
    case "hentai":
        try {
            get('https://nekobot.xyz/api/image?type=hneko').then(r => {
            const embed = new client.discord.MessageEmbed()
            .setImage(r.data.message)
            .setColor(client.colors.nsfw)    
            interaction.editReply({ embeds: [embed] })
            })
        } catch(e) {
            console.log(e)
            interaction.editReply({ embeds: [error] })
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
        interaction.editReply({ embeds: [embed] })
        })
    } catch(e) {
     console.log(e)
     interaction.editReply({ embeds: [error] })
    }
break;
case "pussy":
    try {
        get('https://nekobot.xyz/api/image?type=pussy').then(r => {
        const embed = new client.discord.MessageEmbed()
        .setImage(r.data.message)
        .setColor(client.colors.nsfw)    
        interaction.editReply({ embeds: [embed] })
        })
    } catch(e) {
     console.log(e)
     interaction.editReply({ embeds: [error] })
    }
break;
case "thighs":
if(!cate) { return interaction.editReply({ embeds: [nocat] }) }    
switch(cate) {
    case "human":
        try {
            get('https://nekobot.xyz/api/image?type=thighs').then(r => {
            const embed = new client.discord.MessageEmbed()
            .setImage(r.data.message)
            .setColor(client.colors.nsfw)    
            interaction.editReply({ embeds: [embed] })
            })
        } catch(e) {
            console.log(e)
            interaction.editReply({ embeds: [error] })
        }     
    break;
    case "hentai":
        try {
            get('https://nekobot.xyz/api/image?type=hthighs').then(r => {
            const embed = new client.discord.MessageEmbed()
            .setImage(r.data.message)
            .setColor(client.colors.nsfw)    
            interaction.editReply({ embeds: [embed] })
            })
        } catch(e) {
            console.log(e)
            interaction.editReply({ embeds: [error] })
        }     
    break;        
    }
break;    
}}}    