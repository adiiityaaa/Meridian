const fetch = require("node-fetch");

module.exports = {
name: "fun",
description: "Displays some funny Content",
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
      description: "Category of Command",
      required: true,
      choices: [
          {
              name: "8Ball",
              value: "8ball",
          },
          {
              name: "Coin Flip",
              value: "coinflip",
          },
          {
            name: "Dare",
            value: "dare",
        },
          {
            name: "Dick Size",
            value: "dicksize",
        },
          {
              name: "Gay Rate",
              value: "grate",
          },
          {
              name: "Meme",
              value: "meme",
          },
          {
              name: "Paranoia",
              value: "para",
          },
          {
              name: "Truth",
              value: "truth",
          }, 
        {
            name: "Would you rather",
            value: "wyr",
        },        
          {
              name: "Yo Momma Joke",
              value: "yourmom",
          },
      ],
    },
    {
        name: "string",
        type: "STRING",
        description: "String to enter text for some types",
        required: false,
      },
      {
        name: "user",
        type: "USER",
        description: "User to choose for some types",
        required: false,
      },
  ],    
run: async(client, interaction) => { 
await interaction.deferReply().catch(() => {});     
const notext = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Please provide a String.**`)
const nouser = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **Please provide a User.**`)
const error = client.modules.embed(client, client.colors.red, `${client.emotes.cross} | **An error has occured.**`)
const type = interaction.options.getString('type');
const string = interaction.options.getString('string');
const member = interaction.options.getMember('user');
switch(type) {
case "8ball":
if(!string) { return interaction.editReply({ embeds: [notext] }) }    
const breplies = require('../../botfiles/storage/8ball.json')
const breply = breplies[Math.floor(Math.random() * breplies.length)]
const bembed = new client.discord.MessageEmbed()
.setColor(client.colors.fun)
.setDescription(`${client.emotes.rarrow} ${string}\n${client.emotes.garrow} ${breply}`)
interaction.editReply({ embeds: [bembed] })
break;
case "coinflip":
    const n = Math.floor(Math.random() * 2);
    let result;
    if (n === 1) result = "Heads";
    else result = "Tails";
    const cembed = new client.discord.MessageEmbed()
    .setColor(client.colors.fun)
    .setDescription(`${client.emotes.garrow} It is a **${result}**!`)
    interaction.editReply({ embeds: [cembed] })
break;
case "dicksize":
if(!member) { return interaction.editReply({ embeds: [nouser] }) }    
const dreplies = require('../../botfiles/storage/dsizes.json')
const dreply = dreplies[Math.floor(Math.random() * dreplies.length)]
const dembed = new client.discord.MessageEmbed()
.setColor(client.colors.fun)
.setDescription(`${client.emotes.garrow} <@${member.id}>'s Dick size is:\n${dreply}`)
interaction.editReply({ embeds: [dembed] })
break;
case "grate":
    if(!member) { return interaction.editReply({ embeds: [nouser] }) }
    const gembed = new client.discord.MessageEmbed()
    .setColor(client.colors.fun)
    .setDescription(`${client.emotes.rarrow} <@${member.id}> is **${Math.floor(Math.random() * 100 + 1)}%** Gay!`)
    interaction.editReply({ embeds: [gembed] })
break;  
case "dare":
    try {
        const url = "https://api.truthordarebot.xyz/api/dare";
        const res = await fetch(url).then(async (res) => await res.json())
        const embed = new client.discord.MessageEmbed()
        .setColor(client.colors.fun)
        .setDescription(`${client.emotes.garrow} ${res.question}`)
        interaction.editReply({ embeds: [embed] })
    } catch(e) {
       console.log(e)
       interaction.editReply({ embeds: [error] }) 
    } 
    break;
    case "meme":
        try {
            const url = "https://random-d.uk/api/v2/random";
            const res = await fetch(url).then(async (res) => await res.json())
            const embed = new client.discord.MessageEmbed()
            .setColor(client.colors.fun)
            .setDescription(`${client.emotes.garrow} ${res.url}`)
            interaction.editReply({ embeds: [embed] })
        } catch(e) {
           console.log(e)
           interaction.editReply({ embeds: [error] }) 
        } 
        break;
        case "para":
            try {
                const url = "https://api.truthordarebot.xyz/api/paranoia";
                const res = await fetch(url).then(async (res) => await res.json())
                const embed = new client.discord.MessageEmbed()
                .setColor(client.colors.fun)
                .setDescription(`${client.emotes.garrow} ${res.question}`)
                interaction.editReply({ embeds: [embed] })
            } catch(e) {
               console.log(e)
               interaction.editReply({ embeds: [error] }) 
            } 
            break;
            case "truth":
try {
    const url = "https://api.truthordarebot.xyz/api/truth";
    const res = await fetch(url).then(async (res) => await res.json())
    const embed = new client.discord.MessageEmbed()
    .setColor(client.colors.fun)
    .setDescription(`${client.emotes.garrow} ${res.question}`)
    interaction.editReply({ embeds: [embed] })
} catch(e) {
   console.log(e)
   interaction.editReply({ embeds: [error] }) 
} 
break;
case "wyr":
try {
    const url = "https://api.truthordarebot.xyz/api/wyr";
    const res = await fetch(url).then(async (res) => await res.json())
    const embed = new client.discord.MessageEmbed()
    .setColor(client.colors.fun)
    .setDescription(`${client.emotes.garrow} ${res.question}`)
    interaction.editReply({ embeds: [embed] })
} catch(e) {
   console.log(e)
   interaction.editReply({ embeds: [error] }) 
} 
break;
case "yomomma":
try {
    const url = "https://api.yomomma.info/";
    const res = await fetch(url).then(async (res) => await res.json())
    const embed = new client.discord.MessageEmbed()
    .setColor(client.colors.fun)
    .setDescription(`${client.emotes.garrow} ${res.joke}`)
    interaction.editReply({ embeds: [embed] })
} catch(e) {
   console.log(e)
   interaction.editReply({ embeds: [error] }) 
} 
break;
}}}    